<script setup>
import { onMounted, ref, computed, watch, onBeforeUnmount } from 'vue';
import BreadCrumb from './components/BreadCrumb.vue';
import Theme from '/public/static/js/theme';
// import PageTitle from './components/PageTitle.vue';
import checkRoomTop from "./components/CheckRoomTop.vue";
import { searchCarsAPI, createOrderAPI } from '@/apis/Dispatch'
import { MemberLogin } from '@/stores/memberlogin'
import dayjs from 'dayjs';


const breadCrumb = ref("Dispatch Service");
const placeSearch = ref({
  starterPlace: "",
  endPlace: "KALSARI Hotel",
  Placeholder1: "上車地點",
  Placeholder2: "下車地點",
  ItemLat: null,
  ItemLng: null,
});

const pickUpLocation = ref("");
const scheduleCheck = ref(false)
const confirm = ref(false);
function scheduleCheckOn() {
  refreshTime();
  scheduleCheck.value = true;
  const input = source1.value.querySelector('input');
  pickUpLocation.value = input.value.split(',')[0];
  confirm.value = false;
  timePicker.value = dayAfterTomorrow;
  datePicker.value = dayAfterTomorrow;
  calcTime();

}
function scheduleCheckOff() {
  refreshTime();
  scheduleCheck.value = false;
  confirm.value = false;
  mapSwitch.value = true;
  timePicker.value = dayAfterTomorrow;
  datePicker.value = dayAfterTomorrow;
  calcTime();
}

const createCheck = async (queryData) => {
  const res = await createOrderAPI(queryData);
  console.log(res);
  if (res == "成功") {
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "預定成功",
      showConfirmButton: false,
      timer: 1500
    }).then(() => {
      window.location.href = '/carOrderList'
    });
    console.log("ok");
  }
  else {
    Swal.fire({
      icon: "error",
      title: "預定失敗",
      text: "訂單時間重疊"
    });
    console.log("不ok");
  }
}
async function createOrder() {
  const queryData = {
    carId: tt.value,
    pickUpLatitude: `${start.lat()}`,
    pickUpLongtitude: `${start.lng()}`,
    pickUpLocation: pickUpPlace.value,
    destinationLatitude: `${end.lat()}`,
    destinationLongtitude: `${end.lng()}`,
    destinationLocation: destinationPlace.value,
    total: totalPrice.value + selectedPlusPrice.value,
    startTime: `${gogoTime.value.getFullYear()}-${gogoTime.value.getMonth() + 1}-${gogoTime.value.getDate()} ${gogoTime.value.getHours()}:${gogoTime.value.getMinutes()}:00`,
    endTime: `${arrivalTime.value.getFullYear()}-${arrivalTime.value.getMonth() + 1}-${arrivalTime.value.getDate()} ${arrivalTime.value.getHours()}:${arrivalTime.value.getMinutes()}:00`,
  }
  createCheck(queryData);
}

const avaCars = ref({});
const availableCars = async (queryData) => {
  const res = await searchCarsAPI(queryData);
  avaCars.value = res;
}
const remainedCars = ref([]);
const queryData = ref({});
const mapSwitch = ref(true);
async function nextStep() {
  // console.log(gogoTime.value);
  // console.log(arrivalTime.value);
  // scheduleCheck.value = false;
  // confirm.value = true;
  mapSwitch.value = false;
  // timePicker.value = new Date();
  // datePicker.value = dayjs().add(2, 'day').format('YYYY/MM/DD');
  tt.value = 0;
  confirm.value = false;
  queryData.value =
  {
    id: 0,
    carId: 0,
    pickUpLatitude: `${start.lat()}`,
    pickUpLongtitude: `${start.lng()}`,
    pickUpLocation: "string",
    destinationLatitude: `${end.lat()}`,
    destinationLongtitude: `${end.lng()}`,
    destinationLocation: "string",
    total: totalPrice.value,
    startTime: `${gogoTime.value.getFullYear()}-${gogoTime.value.getMonth() + 1}-${gogoTime.value.getDate()} ${gogoTime.value.getHours()}:${gogoTime.value.getMinutes()}:00`,
    endTime: `${arrivalTime.value.getFullYear()}-${arrivalTime.value.getMonth() + 1}-${arrivalTime.value.getDate()} ${arrivalTime.value.getHours()}:${arrivalTime.value.getMinutes()}:00`,
    // actualEndTime: "string",
    empId: 0,
    memberId: 0,
  }

  await availableCars(queryData.value);
  console.log(avaCars.value, "可用車車");

  // console.log(dayjs(queryData.value.startTime)  dayjs(queryData.value.startTime))

  //判斷是否有上一筆或下一筆訂單 且若訂單之間的duration不允許接單回傳false
  const verifyDuration = async (c) => {
    return new Promise(async (resolve, reject) => {
      let allow = true
      if (c.asc) {
        const asc = await calcDurationASC(c.asc.pickUpLatitude, c.asc.pickUpLongtitude, c.asc.startTime);
        if (!asc) allow = false;
      }
      if (c.desc) {
        const desc = await calcDurationDESC(c.desc.destinationLatitude, c.desc.destinationLongtitude, c.desc.endTime);
        if (!desc) allow = false;
      }
      resolve(allow);
    });
  }
  const calcCarPos = async (arr) => {
    let result = [];
    for (const c of arr) {
      const { id, empId, capacity, comment, plusPrice, picture, description } = c;
      let allow = false;
      if (c.asc || c.desc) {
        allow = await verifyDuration(c);
        console.log(allow);
      } else {
        console.log('没有 asc, desc');
        allow = true;
      }
      result.push({
        id,
        capacity,
        comment,
        plusPrice,
        picture,
        description,
        allow,
      });
    }
    return result;
  };

  const ccc = await calcCarPos(Array.from(avaCars.value))
  console.log(ccc)
  remainedCars.value = [];
  for (var i = 0; i < ccc.length; i++) {
    if (ccc[i].allow) remainedCars.value.push(ccc[i]);
    else return;
  }
  // remainedCars.value = ccc;
}

// 计算ASC持续时间
async function calcDurationASC(latASC, lngASC, startTimeASC) {
  if (placeSearch.value.Placeholder1 == "上車地點") {
    Lat = placeSearch.value.ItemLat;
    Lng = placeSearch.value.ItemLng;
    start = new google.maps.LatLng(Lat, Lng);
    end = new google.maps.LatLng(24.985546670921007, 121.22207843586307);
  } else {
    Lat = placeSearch.value.ItemLat;
    Lng = placeSearch.value.ItemLng;
    start = new google.maps.LatLng(24.985546670921007, 121.22207843586307);
    end = new google.maps.LatLng(Lat, Lng);
  }
  const result = await serviceDistance.getDistanceMatrix({
    origins: [end],
    destinations: [new google.maps.LatLng(latASC, lngASC)],
    travelMode: "DRIVING",
    drivingOptions: {
      departureTime: new Date(Date.now()),
      trafficModel: "optimistic",
    },
    unitSystem: google.maps.UnitSystem.METRIC,
    avoidHighways: false,
    avoidTolls: true,
  });

  const durationGoogle = Math.round(result.rows[0].elements[0].duration.value / 60);
  const queryEndTime = new Date(queryData.value.endTime);
  const ASCstartTime = dayjs(startTimeASC, 'YYYY/M/D A hh:mm:ss').toDate();
  const timestamp1 = queryEndTime.getTime();
  const timestamp2 = ASCstartTime.getTime();
  const timeDifference = Math.abs(timestamp2 - timestamp1);
  const secondsDifference = timeDifference / 1000;
  const minutesDifference = secondsDifference / 60;

  console.log(minutesDifference, "asc實際時間差");
  console.log(durationGoogle, "asc google time difference");
  return durationGoogle + 20 < minutesDifference;
}

// 计算DESC持续时间
async function calcDurationDESC(latDESC, lngDESC, endTimeDESC) {
  if (placeSearch.value.Placeholder1 == "上車地點") {
    Lat = placeSearch.value.ItemLat;
    Lng = placeSearch.value.ItemLng;
    start = new google.maps.LatLng(Lat, Lng);
    end = new google.maps.LatLng(24.985546670921007, 121.22207843586307);
  } else {
    Lat = placeSearch.value.ItemLat;
    Lng = placeSearch.value.ItemLng;
    start = new google.maps.LatLng(24.985546670921007, 121.22207843586307);
    end = new google.maps.LatLng(Lat, Lng);
  }
  const result = await serviceDistance.getDistanceMatrix({
    origins: [new google.maps.LatLng(latDESC, lngDESC)],
    destinations: [start],
    travelMode: "DRIVING",
    drivingOptions: {
      departureTime: new Date(Date.now()),
      trafficModel: "optimistic",
    },
    unitSystem: google.maps.UnitSystem.METRIC,
    avoidHighways: false,
    avoidTolls: true,
  });

  const durationGoogle = Math.round(result.rows[0].elements[0].duration.value / 60);
  const queryStartTime = new Date(queryData.value.startTime);
  const DESCendTime = dayjs(endTimeDESC, 'YYYY/M/D A hh:mm:ss').toDate();
  const timestamp1 = DESCendTime.getTime();
  const timestamp2 = queryStartTime.getTime();
  const timeDifference = Math.abs(timestamp2 - timestamp1);
  const secondsDifference = timeDifference / 1000;
  const minutesDifference = secondsDifference / 60;
  console.log(minutesDifference, "desc實際時間差");
  console.log(durationGoogle, "desc google time difference");
  return durationGoogle + 20 < minutesDifference;
}

// async function calcDurationASC(latASC, lngASC, startTimeASC) {
//   if (placeSearch.value.Placeholder1 == "上車地點") {
//     Lat = placeSearch.value.ItemLat;
//     Lng = placeSearch.value.ItemLng;
//     start = new google.maps.LatLng(Lat, Lng);
//     end = new google.maps.LatLng(24.985546670921007, 121.22207843586307);
//   } else {
//     Lat = placeSearch.value.ItemLat;
//     Lng = placeSearch.value.ItemLng;
//     start = new google.maps.LatLng(24.985546670921007, 121.22207843586307);
//     end = new google.maps.LatLng(Lat, Lng);
//   }
//   //呼叫算距離的
//   var resultDistance = serviceDistance.getDistanceMatrix(
//     {
//       // origins: [origin1, origin2],
//       origins: [end],
//       // destinations: [end],
//       destinations: [new google.maps.LatLng(latASC, lngASC)],
//       travelMode: "DRIVING",
//       // transitOptions: TransitOptions,
//       drivingOptions: {
//         departureTime: new Date(Date.now()),
//         trafficModel: "optimistic",
//       },
//       unitSystem: google.maps.UnitSystem.METRIC,
//       avoidHighways: false,
//       avoidTolls: true,
//     },
//     callbackDistance
//   );
//   const durationGoogle = ref(0);//以分鐘為單位
//   const durationActual = ref(0); //實際從結束訂單到下一筆訂單的時間
//   resultDistance.then((result) => {
//     durationGoogle.value = Math.round(result.rows[0].elements[0].duration.value / 60);
//     const queryEndTime = new Date(queryData.value.endTime);
//     const ASCstartTime = dayjs(startTimeASC, 'YYYY/M/D A hh:mm:ss').toDate();

//     // 將兩個 Date 物件轉換為時間戳記
//     const timestamp1 = queryEndTime.getTime(); // 第一個時間戳記（毫秒）
//     const timestamp2 = ASCstartTime.getTime(); // 第二個時間戳記（毫秒）
//     // 計算時間差（毫秒）
//     const timeDifference = Math.abs(timestamp2 - timestamp1);
//     // 將時間差轉換為以秒為單位
//     const secondsDifference = timeDifference / 1000;
//     // 將時間差轉換為以分鐘為單位
//     const minutesDifference = secondsDifference / 60;
//     durationActual.value = minutesDifference;
//     console.log(queryEndTime);
//     console.log(durationActual.value, "實際經過時間");
//     console.log(durationGoogle.value, "計算出的經過時間");
//     console.log(durationGoogle.value < durationActual.value, 'ASC');
//   })
//   if (durationGoogle.value < durationActual.value) return true;
//   return false;
// }
// async function calcDurationDESC(latDESC, lngDESC, endTimeDESC) {
//   if (placeSearch.value.Placeholder1 == "上車地點") {
//     Lat = placeSearch.value.ItemLat;
//     Lng = placeSearch.value.ItemLng;
//     start = new google.maps.LatLng(Lat, Lng);
//     end = new google.maps.LatLng(24.985546670921007, 121.22207843586307);
//   } else {
//     Lat = placeSearch.value.ItemLat;
//     Lng = placeSearch.value.ItemLng;
//     start = new google.maps.LatLng(24.985546670921007, 121.22207843586307);
//     end = new google.maps.LatLng(Lat, Lng);
//   }
//   //呼叫算距離的
//   var resultDistance = serviceDistance.getDistanceMatrix(
//     {
//       // origins: [origin1, origin2],
//       origins: [new google.maps.LatLng(latDESC, lngDESC)],
//       // destinations: [end],
//       destinations: [start],
//       travelMode: "DRIVING",
//       // transitOptions: TransitOptions,
//       drivingOptions: {
//         departureTime: new Date(Date.now()),
//         trafficModel: "optimistic",
//       },
//       unitSystem: google.maps.UnitSystem.METRIC,
//       avoidHighways: false,
//       avoidTolls: true,
//     },
//     callbackDistance
//   );
//   const durationGoogle = ref(0);//以分鐘為單位
//   const durationActual = ref(0); //實際從結束訂單到下一筆訂單的時間
//   resultDistance.then((result) => {
//     // console.log(result, 555);
//     // console.log(result.rows[0].elements[0].duration.value, 456);
//     // console.log(result.rows[0].elements[0].duration.text, 753);
//     // console.log(Math.floor(result.rows[0].elements[0].duration.value / 3600));// 幾小時
//     // console.log(Math.round(result.rows[0].elements[0].duration.value / 60));// 幾分鐘duration google
//     durationGoogle.value = Math.round(result.rows[0].elements[0].duration.value / 60);
//     const queryStartTime = new Date(queryData.value.startTime);
//     const DESCendTime = dayjs(endTimeDESC, 'YYYY/M/D A hh:mm:ss').toDate();

//     // 將兩個 Date 物件轉換為時間戳記
//     const timestamp1 = DESCendTime.getTime(); // 第一個時間戳記（毫秒）
//     const timestamp2 = queryStartTime.getTime(); // 第二個時間戳記（毫秒）
//     // 計算時間差（毫秒）
//     const timeDifference = Math.abs(timestamp2 - timestamp1);
//     // 將時間差轉換為以秒為單位
//     const secondsDifference = timeDifference / 1000;
//     // 將時間差轉換為以分鐘為單位
//     const minutesDifference = secondsDifference / 60;
//     durationActual.value = minutesDifference;
//     console.log(durationActual.value, "實際時間");
//     console.log(durationGoogle.value, "谷哥時間");
//     console.log(durationGoogle.value < durationActual.value, 'DESC');
//   })
//   return durationGoogle.value < durationActual.value;
// }

const beginPrice = 80;
const pricePerKm = 25;
const totalPrice = computed(() => {
  if (Math.floor(distance.value / pricePerKm) == 0) {
    console.log(123);
    return 0;
  }
  //todo input清空價格也要歸零 要用watch
  // if (inputElement.value.value == "") {
  //   console.log(456);
  //   return 0;
  // }
  return Math.floor(beginPrice + distance.value / pricePerKm);
});

const distance = ref(0);

// calendar變數
// const now = new Date(); // 現在的日期和時間
// const year = now.getFullYear(); // 年份，例如：2023
// const month = now.getMonth() + 1; // 月份（注意 JavaScript 中的月份從 0 開始），例如：11（十一月）
// const date = now.getDate(); // 日期，例如：2


let dayTomorrow;
let dayAfterTomorrow;
const refreshTime = () => {
  const now = new Date();
  dayTomorrow = new Date(now);
  dayAfterTomorrow = new Date(now);
  dayTomorrow.setDate(now.getDate() + 1);
  dayAfterTomorrow.setDate(now.getDate() + 2); // 使用當前年、月、日
}

refreshTime();




const datePicker = ref(dayAfterTomorrow);
const timePicker = ref(dayAfterTomorrow);

const YYYY = computed(() => datePicker.value.getFullYear());
const MM = computed(() => datePicker.value.getMonth());
const DD = computed(() => datePicker.value.getDate());
const HH = computed(() => timePicker.value.getHours());
const mm = computed(() => timePicker.value.getMinutes());

console.log(datePicker.value, 123);
const disDate = (date) => {
  return date < dayTomorrow;
}

const duration = ref(
  {
    text: "",
    value: 0, // 要添加的秒數
  });

// 將秒數轉換為小時和分鐘
const hoursToAdd = computed(() => { return Math.floor(duration.value.value / 3600); });
const minutesToAdd = computed(() => { return Math.floor((duration.value.value % 3600) / 60); });

const gogoTime = computed(() => new Date(YYYY.value, MM.value, DD.value, HH.value, mm.value, 0));
// 將小時數和分鐘數添加到當前時間
const arrivalTime = ref(new Date(YYYY.value, MM.value, DD.value, HH.value, mm.value, 0));
const calcTime = () => {
  // console.log(YYYY.value, MM.value, DD.value, HH.value, mm.value);
  arrivalTime.value = new Date(YYYY.value, MM.value, DD.value, HH.value, mm.value, 0);
  arrivalTime.value.setHours(HH.value + hoursToAdd.value);
  arrivalTime.value.setMinutes(mm.value + minutesToAdd.value);
  // console.log(arrivalTime.value);
}

// watch(timePicker.vlaue, (newVal, oldVal) => {
//   arrivalTime.value.setHours(timePicker.value.getHours() + hoursToAdd.value);
//   arrivalTime.value.setMinutes(timePicker.value.getMinutes() + minutesToAdd.value);
// }, { immediate: true });

watch(duration.value, (newVal, oldVal) => {
  calcTime();
  // arrivalTime.value.setHours(timePicker.value.getHours() + hoursToAdd.value);
  // arrivalTime.value.setMinutes(timePicker.value.getMinutes() + minutesToAdd.value);
}, { deep: true });

//地圖
const positionLat = ref();
const positionLng = ref();

// 使用者不提供權限，或是發生其它錯誤
function error() {
  alert('無法取得你的位置');
}

// 使用者允許抓目前位置，回傳經緯度，然後以目前位置為中心呼叫myMap()創建地圖
function success(position) {
  // console.log(position.coords.latitude, position.coords.longitude);
  positionLat.value = position.coords.latitude;
  positionLng.value = position.coords.longitude;
  myMap();
}

// 創建地圖
var map;
function myMap() {
  var mapProp = {
    zoom: 10,
    mapId: "701129ee385e0804",
    center: { lat: positionLat.value, lng: positionLng.value },
  };
  //建立一張地圖
  map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
  // const beachFlagImg = document.createElement("img");
  // beachFlagImg.src =
  //   "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png";

  // placeTest();

  var marker = {
    coords: {
      lat: 24.985546670921007,
      lng: 121.22207843586307,
    },
    iconImage: "/public/static/picture/images.png",
    //   "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png",
    content: `<span style="color: black; ">KALSARI Hotel</span>`,
    name: "KALSARI",
  };
  createMarker(marker);

}

// placeSearch 搜尋文字要求
var pyrmont = new google.maps.LatLng(positionLat, positionLng);
var request = ref({
  location: pyrmont,
  radius: '500', //一次好像只能回傳二十筆 共六十筆
  // keyword: '', // 搜尋關鍵字
  query: "", //從這裡輸入你要查甚麼
  // rankBy: google.maps.places.RankBy.DISTANCE // 按距離排序
});
const array = ref([]);
function callback(results, status) {
  // console.log(results, status)
  array.value = [];
  if (status == google.maps.places.PlacesServiceStatus.OK) {
    // const max = results.length > 5 ? 5 : results.length;
    for (var i = 0; i < markerDel.length; i++) {
      markerDel[i].setMap(null);
    }

    for (var i = 0; i < results.length; i++) {
      var place = results[i];
      // console.log(place);
      array.value.push(place)
      var marker = {
        coords: {
          lat: place.geometry.location.lat(),
          lng: place.geometry.location.lng(),
        },
        iconImage: "",
        //   "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png",
        content: `<span style="color: black; ">${place.name}</span>`,
      };
      createMarker(marker);
    }
  }

}

// 長Marker
function createMarker(prop) {
  var marker = new google.maps.Marker({
    position: prop.coords,
    map: map,
    icon: prop.iconImage,
    title: "A marker using a custom PNG Image",
  });

  //check 有沒有content
  if (prop.content) {
    var infoWindow = new google.maps.InfoWindow({
      content: prop.content,
    });
  }
  marker.addListener("click", function () {
    infoWindow.open(map, marker);
  });

  if (prop.name) {
    return
  } else {
    markerDel.push(marker);
  }
}

//呼叫placeSearch依文字搜尋
function placeTest() {
  placeSearch.value.starterPlace = inputElement.value.value
  request.value.query = placeSearch.value.starterPlace;
  showRecommendations.value = true;
  var service = new google.maps.places.PlacesService(map);
  if (placeSearch.value.starterPlace != "") {
    service.textSearch(request.value, callback);
  } else {
    array.value = []
    callback([], 'OK');
    array.value.push({ name: "很抱歉", formatted_address: "沒有結果!", none: true });
  }
}

//畫route
var resultRoute;
var directionsService = new google.maps.DirectionsService();
var directionsRenderer = new google.maps.DirectionsRenderer();
const flightPath = ref(null);
var start;
var end;
let Lat;
let Lng;
function calcRoute() {

  if (placeSearch.value.Placeholder1 == "上車地點") {
    Lat = placeSearch.value.ItemLat;
    Lng = placeSearch.value.ItemLng;
    start = new google.maps.LatLng(Lat, Lng);
    end = new google.maps.LatLng(24.985546670921007, 121.22207843586307);
  } else {
    Lat = placeSearch.value.ItemLat;
    Lng = placeSearch.value.ItemLng;
    start = new google.maps.LatLng(24.985546670921007, 121.22207843586307);
    end = new google.maps.LatLng(Lat, Lng);
  }
  // var start = new google.maps.LatLng(24.985478597505473, 121.2222179107264);
  // var end = new google.maps.LatLng(25.013032561035523, 121.21440241830474);
  var request = {
    origin: start,
    destination: end,
    travelMode: "DRIVING",
    // transitOptions: TransitOptions,
    drivingOptions: {
      departureTime: new Date(Date.now()),
      trafficModel: "optimistic",
    },
    unitSystem: google.maps.UnitSystem.METRIC,
    avoidHighways: false,
    avoidTolls: true,
  };
  directionsService.route(request, function (result, status) {
    if (status == "OK") {
      directionsRenderer.setDirections(result);
      // directionsRenderer.setMap(map);
      resultRoute = [];
      for (var i = 0; i < result.routes[0].overview_path.length; i++) {
        resultRoute.push({
          lat: result.routes[0].overview_path[i].lat(),
          lng: result.routes[0].overview_path[i].lng(),
        });
      }
      resultRoute = Object.values(resultRoute);
      // console.log(result.routes[0].overview_path[0].lat());
      // console.log(resultRoute);
      // flightPath.value.removeAt()

      if (!flightPath.value) {
        flightPath.value = new google.maps.Polyline({
          path: resultRoute,
          geodesic: true,
          strokeColor: "#000000",
          strokeOpacity: 1.0,
          strokeWeight: 3,
        });
      } else {
        flightPath.value.setOptions({
          path: resultRoute,
        });
      }

      flightPath.value.setMap(map);
      // console.log(markers);
      // createMarker(markers);
    }
  });

  //呼叫算距離的
  var resultDistance = serviceDistance.getDistanceMatrix(
    {
      // origins: [origin1, origin2],
      origins: [start],
      // destinations: [destinationA, destinationB],
      destinations: [end],
      travelMode: "DRIVING",
      // transitOptions: TransitOptions,
      drivingOptions: {
        departureTime: new Date(Date.now()),
        trafficModel: "optimistic",
      },
      unitSystem: google.maps.UnitSystem.METRIC,
      avoidHighways: false,
      avoidTolls: true,
    },
    callbackDistance
  );
  resultDistance.then((result) => {
    console.log(result);
    console.log(result.rows[0].elements[0].distance.value);
    distance.value = result.rows[0].elements[0].distance.value;
    console.log(Math.floor(totalPrice.value));
    duration.value.text = result.rows[0].elements[0].duration.text;
    duration.value.value = result.rows[0].elements[0].duration.value;

  })

}

//計算距離
var serviceDistance = new google.maps.DistanceMatrixService();

function callbackDistance(response, status) {
  // See Parsing the Results for
  // the basics of a callback function.

  if (status == "OK") {
    var origins = response.originAddresses;
    var destinations = response.destinationAddresses;

    for (var i = 0; i < origins.length; i++) {
      var results = response.rows[i].elements;
      for (var j = 0; j < results.length; j++) {
        var element = results[j];
        var distance = element.distance.text;
        var duration = element.duration.text;
        var from = origins[i];
        var to = destinations[j];
      }
    }
  }
}

onMounted(() => {
  //Theme.init();

  // 跟使用者拿所在位置的權限
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(success, error);

  } else {
    alert('Sorry, 你的裝置不支援地理位置功能。')
  }
});

// 關鍵字搜索ul li控制
const keyword = ref();
const showRecommendations = ref(false);
const recommendations = ref([]);

const checkLeave = ref(null);

const enterHandler = () => checkLeave.value = false;
const leaveHandler = () => checkLeave.value = true;

function handleInput() {
  // 模擬從後端獲取推薦清單
  // recommendations.value = getRecommendations(keyword.value);

  // 如果推薦清單不為空，則顯示推薦清單
  if (checkLeave.value) showRecommendations.value = false;

}

const pickUpPlace = ref("");
const destinationPlace = ref("")
var markerDel = [];
function selectItem(item) {
  // 點擊推薦清單中的項目時，將該項目賦值給輸入框
  // console.log(itemName, itemAddresss)
  if (placeSearch.value.Placeholder1 == "上車地點") {
    pickUpPlace.value = `${item.name}, ${item.formatted_address}`;
    destinationPlace.value = "KALSARI Hotel";
  } else {
    pickUpPlace.value = `${item.name}, ${item.formatted_address}`;
    destinationPlace.value = "KALSARI Hotel";
  }

  // 選擇項目後，隱藏推薦清單
  if (!item.none) {
    inputElement.value.value = `${item.name}, ${item.formatted_address}`;
  }

  showRecommendations.value = false;
  for (var i = 0; i < markerDel.length; i++) {
    markerDel[i].setMap(null);
  }
  markerDel = [];
  var marker = {
    coords: {
      lat: item.geometry.location.lat(),
      lng: item.geometry.location.lng(),
    },
    iconImage: "",
    //   "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png",
    content: `<span style="color: black; ">${item.name}</span>`,
  };
  createMarker(marker);
  placeSearch.value.ItemLat = item.geometry.location.lat();
  placeSearch.value.ItemLng = item.geometry.location.lng();
  calcRoute();
}

//監聽輸入框的寬度變化，並將推薦清單的寬度設置為相同值
const inputElement = ref(null);
const inputWidth = ref(0);
const inputHeight = ref(0);
// const inputWidth = computed(() => {
//   return inputElement.value.offsetWidth;
// });

const updateInputWidth = () => {
  if (inputElement.value) {
    inputWidth.value = inputElement.value.offsetWidth;
  }
};


onMounted(() => {
  window.addEventListener('resize', updateInputWidth);
  updateInputWidth(); // 確保初始設置正確
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', updateInputWidth);

});
// 對調DOM
let targetNode;
let isChanged = false
const div1 = ref(null)
const div2 = ref(null)
const source2 = ref(null)
const source1 = ref(null)
function exchangeInput() {
  if (isChanged) {
    source1.value.appendChild(div1.value)
    source2.value.appendChild(div2.value)
    isChanged = false;
    placeSearch.value.Placeholder1 = "上車地點"
    placeSearch.value.Placeholder2 = "下車地點"
  } else {
    source2.value.appendChild(div1.value)
    source1.value.appendChild(div2.value)
    isChanged = true
    placeSearch.value.Placeholder1 = "下車地點"
    placeSearch.value.Placeholder2 = "上車地點"
  }
  calcRoute();
}

const tt = ref(0);
const selectedPlusPrice = ref(0);
const selectedCarId = ref(0);
//預約搭乘
function reservation(item) {
  if (tt.value == item.id) {
    tt.value = 0;
    confirm.value = false;
  }
  else {
    tt.value = item.id;
    confirm.value = true;
    selectedPlusPrice.value = item.plusPrice;
    selectedCarId.value = item.carId;
  }

}
//預約搭乘

</script>

<template>

  <!-- Heading -->
  <div class="mt-30 text-center">
    <span class="text-uppercase h-sub-font fsm-1 fw-medium ls-2 d-block mb-4">Dispatch Service</span>
    <h2 class="text-uppercase h-special-font mb-6 text-body-emphasis">預定搭乘</h2>
    <BreadCrumb :bread-crumb="breadCrumb" />
  </div>
  <!-- /Heading -->

  <section id="contact" class="pt-16 pb-14">
    <div class="container" style="align-items: center; justify-content: center;">
      <div class="row">

        <div class="col-12 col-xl-4">
          <div class="border border-2">
            <!-- Contact Form -->
            <form class="needs-validation mb-6 mt-6 ms-6 me-6" method="" novalidate="" v-show="!scheduleCheck">
              <div class="d-flex align-items-center justify-content-between mb-3">
                <h2 class="h5 text-uppercase ls-1 h-sub-font">開始搭乘</h2>
                <!-- <span class="text-danger">* 為必填項目</span> -->
              </div>
              <!-- form message -->
              <div class="row">
                <div class="col-12">
                  <div class="alert d-none" role="alert" id="msg_alert"></div>
                </div>
              </div>
              <!-- /form message -->
              <div class="row gx-4">
                <div ref="source1" class="col-md-12">
                  <div ref="div1" class="form-floating mb-3" @mouseleave="leaveHandler" @mouseenter="enterHandler">
                    <input ref="inputElement" id="form_firstname" type="text" name="firstname"
                      class="form-control shadow-sm" required="" placeholder="" @keyup="placeTest" @blur="handleInput">
                    <label for="form_firstname">{{ placeSearch.Placeholder1 }}</label>
                    <ul v-if="showRecommendations" class="recommendations" :style="{ width: inputWidth + 'px' }">
                      <li v-for="(item, index) in array" :key="index" @click="selectItem(item)"
                        :class="{ none: item.none }">{{
                          `${item.name},
                        ${item.formatted_address}` }}
                      </li>
                    </ul>
                  </div>
                </div>
                <!-- fontAwesome -->
                <div class="col-md-12 text-center mb-3">
                  <i class="fa-solid fa-arrow-right-arrow-left rotate-90" @click="exchangeInput"></i>
                </div>
                <!-- fontAwesome -->
                <div class="col-md-12" ref="source2">
                  <div ref="div2" class="form-floating mb-3">
                    <input id="form_lastname" type="text" name="lastname" class="form-control shadow-sm"
                      placeholder="Last Name" required="" v-model="placeSearch.endPlace" disabled="true">
                    <label for="form_lastname">{{ placeSearch.Placeholder2 }}</label>
                  </div>
                </div>
                <div class="col-md-12">
                  <div class="mb-5 mt-3">
                    <button type="button" class="btn btn-primary shadow-sm border border-2" @click="scheduleCheckOn">
                      <span>預約兩天後的訂單</span>
                    </button>
                  </div>
                </div>
                <div class="col-sm-12 col-md-12 totalPrice d-flex justify-content-end">小計: ${{ totalPrice }}</div>
              </div>
            </form>
            <!-- /Contact Form -->

            <!-- scheduleCheck -->
            <div class="row justify-content-around" v-show="scheduleCheck">
              <div class="col-12">
                <div class="ms-4 mt-5">
                  <button class="back-button" @click="scheduleCheckOff">
                    <i class="fas fa-arrow-left"></i>
                  </button>
                </div>
              </div>
              <div class="col-12 mb-0">
                <div class="ms-6 mt-3 mb-0">
                  <h5 class="h5 text-uppercase ls-1 h-sub-font mb-0">希望何時上車?</h5>
                </div>
              </div>
              <div class="col-12 mt-3">
                <div class="ms-6">
                  上車地點: {{ pickUpLocation }}
                </div>
              </div>
              <div class="col-12 mt-3">
                <div class="ms-6">
                  <el-date-picker v-model="datePicker" type="date" placeholder="選擇日期" :disabledDate="disDate"
                    size="large" format="YYYY-MM-DD" @change="calcTime"></el-date-picker>
                </div>
              </div>
              <div class="col-12 mt-3">
                <div class="ms-6">
                  <el-time-picker v-model="timePicker" placeholder="選擇時間" size="large" format="HH:mm"
                    @change="calcTime">
                  </el-time-picker>
                </div>
              </div>
              <div class="col-12 mt-3">
                <div class="ms-6">
                  <i class="fa-solid fa-car pt-2"></i>
                  <span class="ms-1">下車時間: {{ arrivalTime.getHours() }}:{{ arrivalTime.getMinutes() }}</span>
                </div>
              </div>
              <div class="col-12 mt-2 ">
                <div class="ms-6 me-5">
                  <div>根據預估的交通路況，您的搭乘行程時間大約為 {{ duration.text }}。
                    實際的交通路況可能會影響您的下車時間。
                  </div>
                </div>
              </div>
              <div class="col-12 mt-3 mb-5">
                <div class="ms-6">
                  <button type="button" class="btn btn-primary shadow-sm border border-2" @click="nextStep">
                    <span>下一步</span>
                  </button>
                </div>
              </div>



            </div>

            <!-- /scheduleCheck -->

          </div>

          <!-- 預約搭乘 -->
          <div class="border border-2 mt-3" v-show="confirm">
            <div class="row">
              <div class="col-2 d-flex pe-0 justify-content-center align-content-center align-items-center">
                <i class="fa-solid fa-clock "></i>
              </div>
              <div class="col-10">
                <div class="mt-5">上車時間: {{ `${YYYY}/${MM + 1}/${DD}` }}</div>
                <div class="mb-3">預估下車時間: {{ arrivalTime.getHours() }}:{{ arrivalTime.getMinutes() }}</div>

              </div>
              <div class="col-12">
                <div class="totalPrice d-flex justify-content-end me-5">總計: ${{
                  totalPrice + selectedPlusPrice }}</div>
              </div>
              <div class="col-12 mb-5 d-flex justify-content-center align-content-center align-items-center">
                <button type="button" class="btn btn-primary shadow-sm border border-2" style="width: 90%;"
                  @click="createOrder">
                  <span>預約搭乘</span>
                </button>
              </div>
            </div>
          </div>
          <!-- 預約搭乘 -->
          <!-- todo 點下一步顯示此時間段有空的車輛的車種 要重寫一個cars的資料表 -->
          <!-- 預約搭乘 -->

        </div>
        <!-- 選擇行程 -->
        <!-- Map -->
        <div class="col-12 col-xl-8">
          <div id="googleMap" v-show="mapSwitch"
            style="width: auto; height: 400pt; align-items: center; justify-content: center;"></div>
          <div v-show="!mapSwitch" class="plan-select">
            <div v-for="item in remainedCars" :key="item.id" class="row p-0" @click="reservation(item)" :style="{
              'border-color': tt == item.id ? '#9B7C64' : 'transparent', 'border-style': 'solid',
              'border-width': '5px 18px'
            }">
              <img :src="item.picture" class="col-4">
              <div class="col-6 d-flex align-items-center justify-content-center">
                <div>
                  <div>
                    <span style="font-size: 25px; font-weight: bolder;">{{ item.comment
                      + " " }}</span><span>{{ item.capacity }}人座</span>
                  </div>
                  <div>{{ item.description }}</div>
                </div>
              </div>
              <div class="col-2 d-flex align-items-center justify-content-center">總計: ${{ item.plusPrice + totalPrice
                }}
              </div>
            </div>
          </div>
        </div>
        <!-- Map -->

      </div>
    </div>
  </section>
  <!-- /Contact -->

</template>

<style scoped>
/* 上一頁按鈕 */
.back-button {
  background-color: transparent;
  /* 背景透明 */
  border: none;
  /* 去除邊框 */
  cursor: pointer;
  /* 讓滑鼠在按鈕上時顯示為手指 */
  width: 50px;
  height: 50px;
  padding: 10px;
  /* 按鈕的內邊距 */
  border-radius: 50%;
  /* 圓形按鈕 */
  transition: background-color 0.3s;
  /* 平滑過渡 */

  /* 將內容垂直居中 */
  display: flex;
  align-items: center;
  justify-content: center;
}

.back-button:hover {
  background-color: #ccc;
  /* 滑鼠 hover 時變灰色 */
}

/* 使用 Font Awesome 圖示 */
.back-button i {
  color: #000;
  /* 圖示顏色 */
  font-size: 20px;
  /* 圖示大小 */
}

/* 上一頁按鈕 */

.plan-select {
  max-height: 500px;
  /* 設置最大高度以便顯示垂直滾動條 */
  overflow-y: auto;
  /* 啟用垂直滾動條 */
  width: auto;
  overflow-x: hidden;
}

.plan-select div:hover {
  background-color: #ccc;
  /* 滑鼠 hover 時變灰色 */
}

.totalPrice {
  font-size: 25px;
  font-weight: bolder;
}

.text-center {
  text-align: center;
}

.rotate-90 {
  transform: rotate(90deg);
}

.recommendations {
  position: absolute;
  z-index: 999;
  background-color: #fff;
  border: 1px solid #ccc;
  list-style: none;
  padding: 0;
  max-height: 175px;
  /* 設置最大高度以便顯示垂直滾動條 */
  overflow-y: auto;
  /* 啟用垂直滾動條 */
}

.recommendations li {
  padding: 5px;
  cursor: pointer;
}

.recommendations li:hover {
  background-color: #f0f0f0;
}

.form-floating>.form-control:not(:placeholder-shown)~label::after {
  position: absolute;
  inset: 1rem 0.5rem;
  z-index: -1;
  height: 1.5em;
  content: "";
  background-color: transparent;
}

.recommendations li.none:hover {
  background-color: #ffffff;
  cursor: auto;
}
</style>