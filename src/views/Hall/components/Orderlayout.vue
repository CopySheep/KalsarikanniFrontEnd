<script setup>
import { onMounted, ref, computed,watch,defineProps } from 'vue';
import { getCategory,getMenu,SearchMenu,CreateOrder} from '@/apis/HallItem';
import Popper from "vue3-popper";
import draggable from 'vuedraggable';

// #region 呼叫API

const Category = ref([]);
const getCategories = async () => {
    const res = await getCategory();
    Category.value = res;
    // console.log(Category.value);
}

const CategoryList = () => {
    const list = Category.value.map(item => ({
    id: item.id,
    name: item.category,
    }));
    return list;
}

const MenuList = ref([]);
const HallMenuList =()=>{
    const list = MenuList.value.map(item => ({
    id: item.id,
    p: item.dishName,
    d:item.description,
    s:item.price,
    }))
    return list;
}

// #endregion

//#region 宴會餐點
const computedMenus = ref([]);

const SearchMenus = async () => {
    const res = await SearchMenu(params.value);
    MenuList.value = res;
    computedMenus.value = HallMenuList();

    //#region 聯繫廚師長
    const nullMenu = document.querySelector('#menu');
    if (res.length == 0) {
            nullMenu.classList.remove('d-none');
    } else {
        nullMenu.classList.add('d-none');
    }
    //#endregion
}

const params = ref({
    CategoryId: 0, 
    Keywords: '', 
});

//#endregion

//#region 點擊篩選
const handleCategoryClick = async (categoryId) => {
    params.value.CategoryId = categoryId;
    const res = await SearchMenu(params.value);
    MenuList.value = res;
    computedMenus.value = HallMenuList();
    SearchMenus();
    // console.log(res);
};

const handleMenuClick = async (MenuId) => {
    const keyword = document.querySelector('#keywords');
    const res = await getMenu(MenuId);
    if (res[0]?.keywords && typeof res[0].keywords === 'string') {
        const keywordsArray = res[0].keywords.split(',');

        keyword.innerHTML = '';

        keywordsArray.forEach((kw) => {
            const button = document.createElement('button');
            button.textContent = kw.trim();
            button.className = 'btn btn-outline-primary rounded-pill';
            button.setAttribute('id', 'keyword');
            keyword.appendChild(button);
        });
        keyword.innerHTML = `關鍵字: ${keyword.innerHTML}`;

        const buttons = document.querySelectorAll('#keyword');
        buttons.forEach((button) => {
            button.addEventListener('click', () => {
                params.value.Keywords = button.textContent;
                
                buttons.forEach((btn) => {
                    btn.classList.add('btn-outline-primary');
                    btn.classList.remove('btn-primary');
                });
        
                button.classList.remove('btn-outline-primary');
                button.classList.add('btn-primary');
                SearchMenus(params.value);
            });
        });
    } else {
        keyword.innerHTML = "沒有關鍵字資訊";
    }
    SearchMenus();
    // console.log(res);
};

const handlekeywordClick = async (keyword) => {
    const keywords = document.querySelector('#keywords');
    params.value.Keywords = keyword;
    const res = await SearchMenu(params.value);
    MenuList.value = res;
    computedMenus.value = HallMenuList();
    keywords.innerHTML = '';
};

//#endregion

//#region 移動按鈕
const buttonsA = computed(() => CategoryList());
const buttonsB = ref([]);

const showAreaA = ref(true);
const showAreaB = ref(true);

const moveButtonToB = (button) => {
    buttonsA.value.splice(buttonsA.value.indexOf(button), 1);
    buttonsB.value.push(button);
};

const moveButtonToA = (button) => {
    buttonsB.value.splice(buttonsB.value.indexOf(button), 1);
    buttonsA.value.unshift(button);
};
//#endregion

//#region 拖曳內容

const ordermeals = ref([]); 
const countOrder = ref([]);

const menus = ref(ordermeals);
const count = ref(countOrder);

const addNewMenu = () => {

    const newMenu = { 
    name:`${menus.value.length+1}`,
    items: [
        {
            id: 0,
            p: '',
            d: '',
            s: 0,
        }
    ] ,
    };

    const countOrder = {
        number : 1
    }
    menus.value.push(newMenu);
    count.value.push(countOrder);
};

const setMenu = async (id)=>{
    await addNewMenu();
    await addNewMenu();
    await addNewMenu();
    await addNewMenu();
    await addNewMenu();

    const allMenu = computedMenus.value.map(item => [item]);

    let setMenuObject;
    if (id === 1) {
        setMenuObject = {
            0: { name: '1', items: allMenu[1] },
            1: { name: '2', items: allMenu[6] },
            2: { name: '3', items: allMenu[9] },
            3: { name: '4', items: allMenu[12] },
            4: { name: '5', items: allMenu[17] }
        };
    } else if (id === 2) {
        setMenuObject = {
            0: { name: '1', items: allMenu[2] },
            1: { name: '2', items: allMenu[43] },
            2: { name: '3', items: allMenu[39] },
            3: { name: '4', items: allMenu[11] },
            4: { name: '5', items: allMenu[20] }
        };
    } else if (id === 3) {
        setMenuObject = {
            0: { name: '1', items: allMenu[27] },
            1: { name: '2', items: allMenu[28] },
            2: { name: '3', items: allMenu[29] },
            3: { name: '4', items: allMenu[13] },
            4: { name: '5', items: allMenu[30] }
        };
    } else if (id === 4) {
        setMenuObject = {
            0: { name: '1', items: allMenu[41] },
            1: { name: '2', items: allMenu[38] },
            2: { name: '3', items: allMenu[4] },
            3: { name: '4', items: allMenu[34] },
            4: { name: '5', items: allMenu[19] }
        };
    }

    const setMenuArray = Object.values(setMenuObject);
    ordermeals.value = setMenuArray;
    //#region 顯示樣式
    for (let i = 0; i < setMenuArray.length; i++) { 
        const order = document.querySelector(`#order${i}`);
        const Menu = document.querySelector(`#menu${i}`);
        if (Menu) { 
            Menu.innerHTML = `<div style="font-size: 70%; text-align: center;">${ordermeals.value[i].items[0].d}</div>
                              <div style="font-size: 70%; text-align: center;">$${ordermeals.value[i].items[0].s * countOrder.value[i].number}</div>`;
        } else {
            console.error(`Element with ID "menu${i}" not found.`);
        }
        if (order) { 
            order.classList.remove('btn-online-primary');
            order.classList.add('btn-primary');
        } else {
            console.error(`Element with ID "order${i}" not found.`);
        }
    }
     //#endregion 顯示樣式
}


const removeMenu = (menuIndex) => {
    menus.value = menus.value.slice(0, menuIndex).concat(menus.value.slice(menuIndex + 1));
    count.value = count.value.slice(0, menuIndex).concat(count.value.slice(menuIndex + 1));
};

const addNumber = (menuIndex) => {
    let Item = countOrder.value[menuIndex].number;
    Item = Item + 1;
    countOrder.value[menuIndex].number = Item;
}
const subNumber = (menuIndex) => {
    let Item = countOrder.value[menuIndex].number;
    alert('餐點數量不允許為 0');
    if(Item > 1){
    Item = Item - 1;
    countOrder.value[menuIndex].number = Item;
    }
};

const watchItem = (menuIndex) => {
    SearchMenus();
    const Item = ordermeals.value[menuIndex].items;
    const Itemnumber = countOrder.value[menuIndex].number;
    menus.value[menuIndex].items = [Item[0]]; // 保持第一項
    //#region 控制移入樣式
    if(Item.length >1 )
    {
        const Menu = document.querySelector(`#menu${menuIndex}`);
        Menu.innerHTML=`<div style="font-size: 70%; text-align: center;">${ordermeals.value[menuIndex].items[0].d}</div>
        <div style="font-size: 70%; text-align: center;">$${ordermeals.value[menuIndex].items[0].s * Itemnumber}</div>`;
        const order = document.querySelector(`#order${menuIndex}`);
        order.classList.remove('btn-online-primary');
        order.classList.add('btn-primary');
    }else if (Item.length === 1 ){

        const Menu = document.querySelector(`#menu${menuIndex}`);
        Menu.innerHTML=``;
        const order = document.querySelector(`#order${menuIndex}`);
        order.classList.add('btn-online-primary');
        order.classList.remove('btn-primary');
    }
    //#endregion
};

//#endregion

//#region 預定時間
const Bookingtime = ref({});

const props = defineProps({
    Datetime: {
        type: Object
    },
    Selecttime: {
        type: Object
    },
    getHall:{
        type:Array
    }
});

watch(() => props.Datetime, async (newVal) => {
        Bookingtime.value = newVal;
});

watch(() => props.Selecttime, async (newVal) => {
        Bookingtime.value = newVal;
});

watch(() => Bookingtime.value, async (newVal) => {
    const { startStr, endStr, dateStr } = newVal;
    if(dateStr !== undefined) {
        const AMtime2 = document.querySelector('.AMtime2');
        const PMtime2 = document.querySelector('.PMtime2');
        AMtime2.classList.add('d-none');
        PMtime2.classList.add('d-none');
    }
    if(dateStr == undefined) {
        const AMtime2 = document.querySelector('.AMtime2');
        const PMtime2 = document.querySelector('.PMtime2');
        AMtime2.classList.remove('d-none');
        PMtime2.classList.remove('d-none');
    }

});

const observeButtonClicks = () => {
    const buttons = [AMtime1, PMtime1, AMtime2, PMtime2];
    const buttonClickStates = {};

    const observer = new MutationObserver((mutationsList, observer) => {
        
        for (const mutation of mutationsList) {
            if (mutation.attributeName === 'class') {
            const button = mutation.target;
            const newClass = button.classList.contains('btn-primary') ? 'btn-primary' : 'btn-online-primary';
            const buttonId = button.id;

            buttonClickStates[buttonId] = newClass === 'btn-primary';
        }
    }
    handleButtonClickStates(buttonClickStates);
});

    buttons.forEach(button => {
        observer.observe(button, { attributes: true });
    });
};

let globalNewValue

const handleButtonClickStates = (buttonClickStates) => {
    const AMtime1State = buttonClickStates['AMtime1'];
    const PMtime1State = buttonClickStates['PMtime1'];
    const AMtime2State = buttonClickStates['AMtime2'];
    const PMtime2State = buttonClickStates['PMtime2'];
    const newValue = generateNewValue(AMtime1State, PMtime1State,AMtime2State,PMtime2State);
    globalNewValue = newValue;
};

const generateNewValue = (AMtime1State, PMtime1State,AMtime2State,PMtime2State) => {
    // 这是一个示例生成新值的函数，你可以根据自己的逻辑来实现
    if (AMtime1State && PMtime1State && AMtime2State && PMtime2State) {
        return '09:00:00,18:00:00';
    } else if (AMtime1State && PMtime1State && AMtime2State || AMtime1State && AMtime2State ) {
        return '09:00:00,12:00:00';
    }else if (AMtime1State && PMtime1State && PMtime2State || AMtime1State && PMtime2State) {
        return '09:00:00,18:00:00';
    }else if (PMtime1State && AMtime2State && PMtime2State || PMtime1State && PMtime2State ) {
        return '13:00:00,18:00:00';
    }else if (PMtime1State && AMtime2State) {
        return '13:00:00,12:00:00';
    }   else if (AMtime1State && PMtime1State ) {
        return '09:00:00,18:00:00';
    } else if ( AMtime1State ) {
        return '09:00:00,12:00:00';
    } else if (PMtime1State) {
        return '13:00:00,18:00:00';
    } 
    else {
        return '請選擇時段';
    }
};


const timeClick = (id)=>{
    const AMtime1 = document.querySelector('#AMtime1');
    const PMtime1 = document.querySelector('#PMtime1');
    const AMtime2 = document.querySelector('#AMtime2');
    const PMtime2 = document.querySelector('#PMtime2');

    if (id === 1) {
        AMtime1.classList.toggle('btn-primary');
        AMtime1.classList.toggle('btn-online-primary');
    }else if(id === 2) {
        PMtime1.classList.toggle('btn-primary');
        PMtime1.classList.toggle('btn-online-primary');
    }else if(id === 3) {
        AMtime2.classList.toggle('btn-primary');
        AMtime2.classList.toggle('btn-online-primary');
    }else if(id === 4) {
        PMtime2.classList.toggle('btn-primary');
        PMtime2.classList.toggle('btn-online-primary');
    }
}

//#endregion

// #region 驗證
const checkPhone = ()=>{
        const phoneInput = document.querySelector('#phoneInput');
        const phoneError = document.querySelector('#phoneError');
        const phoneNumber = phoneInput.value;
        const phoneNumberPattern = /^[0-9]{10,12}$/;

        if (!phoneNumberPattern.test(phoneNumber)) {
            phoneError.textContent = '請輸入有效的電話號碼（10至12位數字）';
        } else {
            phoneError.textContent = '';
        }
    }

    const checkEmail = ()=>{
        const emailInput = document.querySelector('#emailInput');
        const emailError = document.querySelector('#emailError');
        const email = emailInput.value;
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

            if (!emailPattern.test(email)) {
            emailError.textContent = '請輸入有效的電子郵件';
        } else {
            emailError.textContent = '';
        }
    }

// #endregion

//#region 取得輸入資料

const getname = ref();
const getphone = ref();
const getemail = ref();
const getother = ref();
const getBookstrdate = ref();
const getBookenddate = ref();
const getBookstrtime = ref();
const getBookendtime = ref();
const getguest = ref();
const getPrice = ref([]);
const getqty = ref([]);
const getid = ref();
const getMenuLevel = ref([]);
const getMenuname = ref([]);



const getinput = () => {
    const modal = document.getElementById('myModal');
    const modalInstance = new bootstrap.Modal(modal);

    const numMenuElements = document.querySelectorAll('#numMenu');
    const numMenus = Array.from(numMenuElements).map(element => element.textContent);
    getqty.value = numMenus;

    const numPriceElements = document.querySelectorAll('#numPrice');
    const numPrices = Array.from(numPriceElements).map(element => element.textContent);
    getPrice.value = numPrices;

    const numIdElements = document.querySelectorAll('#numMenuId');
    const numIds = Array.from(numIdElements).map(element => element.textContent);
    getid.value = numIds;

    const numMenuLevel = document.querySelectorAll('#numMenuLevel');
    const numMenuLevels = Array.from(numMenuLevel).map(element => element.textContent);
    getMenuLevel.value = numMenuLevels;

    const numMenumenu = document.querySelectorAll('#numMenuname');
    const numMenumenus = Array.from(numMenumenu).map(element => element.textContent);
    getMenuname.value = numMenumenus;

    const gettime = globalNewValue ? globalNewValue.split(',') : null;
    if (!gettime || gettime.length !== 2) {
        Swal.fire({
        title: "尚未預約時間",
        text: "請返回選擇預約時間點",
        icon: "question"
        });
        return false;
    }

    modalInstance.show();

    getBookstrdate.value = document.querySelector('#Bookstrtime').innerHTML;
    getBookenddate.value = document.querySelector('#Bookendtime').innerHTML;
    getname.value = document.querySelector('#nameInput').value;
    getphone.value = document.querySelector('#phoneInput').value;
    getemail.value = document.querySelector('#emailInput').value;
    getother.value = document.querySelector('#otherInput').value;
    getguest.value = document.querySelector('#guestInput').value;
    getBookstrtime.value = gettime[0];
    getBookendtime.value = gettime[1];
};


const sendAPI = async () => {
    try {
        const dataPrice = Array.from(getPrice.value).map(item => parseInt(item));
        const dataqty = Array.from(getqty.value).map(item => parseInt(item));
        const dataid = Array.from(getid.value).map(item => parseInt(item));
        const dataLevel = Array.from(getMenuLevel.value).map(item => parseInt(item)); 
        const dataMenuname = getMenuname.value.map(item => item.toString());

        const orderData = {
            hallId : props.getHall[0].id,
            guests : getguest.value,
            startTime : `${getBookstrdate.value}T${getBookstrtime.value}`,
            endTime : `${getBookenddate.value}T${getBookendtime.value}`,
            name : getname.value,
            cellPhone : getphone.value,
            email : getemail.value,
            price: dataPrice ,
            qty : dataqty ,
            hallMenuId:dataid ,
            BookingStatus:true,
            HallName: props.getHall[0].hallName,
            MenuLevel: dataLevel,
            MenuName:dataMenuname,
        };
        

        // 调用 CreateOrder API
    const response = await CreateOrder(orderData);
        console.log('Order created:', response.data);

        Swal.fire({
            title: "預約成功",
            text: "我們誠摯期盼那一天的到來！",
            icon: "success"
        }).then(() => {
            const modal = document.getElementById('myModal');
            const modalInstance = bootstrap.Modal.getInstance(modal);
            modalInstance.hide();
            location.reload();
        });
    } catch (error) {
        console.error('Error creating order:', error);
    }
    
};

const subTotal = computed(() => {
    let total = 0;
    menus.value.forEach((menu, index) => {
        total += menu.items[0].s * count.value[index].number;
    });
    return total;
});



//#endregion

onMounted(() => {
    getCategories();
    SearchMenus(); 
    observeButtonClicks();
});

</script>

<template>
<div class="container">
    <div class="row gy-5">
    <div class="row">
        <div class="col-12 text-center pt-5">
            <div><span class="text-uppercase h-sub-font fw-medium ls-2 d-block mb-4" style="margin-left: 3.5%; font-size: 150%; font-weight: bold;">顧客基本資料</span>
            </div>
        </div>
    </div>
    <div class="col-12">
        <div class="row mb-3">
            <div class="col-3 mb-5">
                <span class="p-5" style="font-size: 130%; font-weight: bold;">預約開始時間：</span>
            </div>
            <div class="col-3 mb-5">
                <span class="p-5" style="font-size: 130%; font-weight: bold;" id="Bookstrtime" >{{ Bookingtime.dateStr || Bookingtime.startStr }}</span>
            </div>
            <div class="col-3 mb-5">
                <span class="p-5" style="font-size: 130%; font-weight: bold;">預約結束時間：</span>
            </div>
            <div class="col-3 mb-5">
                <span class="p-5" style="font-size: 130%; font-weight: bold;" id="Bookendtime" >{{ Bookingtime.dateStr || Bookingtime.endStr }}</span>
            </div>
            <div class="row">
            <div class="col-3 mb-5">
                <span class="p-5" style="font-size: 130%; font-weight: bold;">可選擇時段：</span>
            </div>
            <div class="col-9 mb-5">
                <div class="row">
                <div class="col AMtime1" >
                <div class="p-3 btn btn-online-primary border-primary" id="AMtime1" @click="timeClick(1)" style="height: 100%;width: 75%;margin-left: -20%;">上午9點-12點</div>
                </div>
                <div class="col PMtime1">
                <div class="p-3 btn btn-online-primary border-primary" id="PMtime1" @click="timeClick(2)" style="height: 100%;width: 80%;margin-left: -50%;">下午13點-18點</div>
                </div>
                <div class="col AMtime2 d-none">
                <div class="p-3 btn btn-online-primary border-primary" id="AMtime2" @click="timeClick(3)" style="height: 100%;width: 75%;margin-left: 50%;">上午9點-12點</div>
                </div>
                <div class="col PMtime2 d-none">
                <div class="p-3 btn btn-online-primary border-primary" id="PMtime2" @click="timeClick(4)" style="height: 100%;width: 80%;margin-left: 20%;">下午13點-18點</div>
                </div>
            </div>
            </div>
        </div>
        </div>
        <div class="row">
        <div class="input-group mb-4 input-group-lg">
            <span class="input-group-text rounded-pill p-5 bg-transparent border-0" id="basic-addon1" style="font-weight: bold;">姓名：</span>
            <input type="text" class="form-control border-primary rounded-pill" placeholder="姓名" aria-label="Username" aria-describedby="basic-addon1" id="nameInput">
        </div>
        <div class="input-group mb-4 input-group-lg">
            <span class="input-group-text rounded-pill p-5 bg-transparent border-0" id="basic-addon2" style="font-weight: bold;">電話：</span>
            <input type="text" class="form-control border-primary rounded-pill" placeholder="電話" aria-label="Username" aria-describedby="basic-addon2" id="phoneInput" @blur="checkPhone">
        </div>
        <div id="phoneError" style="color: red;"></div>
        <div class="input-group mb-4 input-group-lg">
            <span class="input-group-text rounded-pill p-5 bg-transparent border-0" id="basic-addon3" style="font-weight: bold;">電子郵件：</span>
            <input type="text" class="form-control border-primary rounded-pill" placeholder="電子郵件" aria-label="Server" @blur="checkEmail" id="emailInput">
        </div>
        <div id="emailError" style="color: red;"></div>
        <div class="input-group mb-4 input-group-lg">
            <span class="input-group-text rounded-pill p-5 bg-transparent border-0" id="basic-addon1" style="font-weight: bold;">預計人數：</span>
            <input type="text" class="form-control border-primary rounded-pill" placeholder="人數" aria-label="Username" aria-describedby="basic-addon1" id="guestInput">
        </div>
        <div id="guestError" style="color: red;"></div>
        <div class="input-group  mb-4 input-group-lg">
            <span class="input-group-text rounded-pill p-5 bg-transparent border-0"  style="font-weight: bold;">其他備註：</span>
            <textarea class="form-control border-primary rounded-pill" aria-label="With textarea" placeholder="" id="otherInput"></textarea>
        </div>
        </div>
    </div>
    <div class="col"></div>
    </div>
</div>
<section id="facilities" class="pt-8 pb-16 text-center">
<div class="container">
    <div class="mb-8">
        <div class="container overflow-hidden">
                <div class="row gy-5">
                <div class="col-12">
                        <div><span class="text-uppercase h-sub-font fw-medium ls-2 d-block mb-4" style="font-size: 150%; font-weight: bold;">點餐內容</span>
                        </div>
                </div>
            <div class="col-12">
            <div>
                <button id="setMenu1" class="btn btn-primary rounded-pill" style="font-size: 120%; font-weight: bold;margin-right: 3%;" @click="setMenu(1)">超值精選</button>
                <button id="setMenu2" class="btn btn-primary rounded-pill" style="font-size: 120%; font-weight: bold;margin-right: 3%;"@click="setMenu(2)">主廚推薦</button>
                <button id="setMenu3" class="btn btn-primary rounded-pill" style="font-size: 120%; font-weight: bold;margin-right: 3%;"@click="setMenu(3)">甜點派對</button>
                <button id="setMenu4" class="btn btn-primary rounded-pill" style="font-size: 120%; font-weight: bold;margin-right: -3%;"@click="setMenu(4)">精緻饗宴</button>
            </div>
            </div>
            <div class="col-12">
            <div class="addMenu btn btn-primary rounded-pill justify-content-center" @click="addNewMenu" style="font-size: 110%; width: 20%; height: 100%; opacity: 0.7;">+</div>
        </div>
        <div class="col-12">
            <h2 class="text-uppercase h-special-font mb-3 text-body-emphasis">
                <div class="row">
                <div v-for="(menu, index) in menus" :key="menu.p" class="col">
                <div class="row p-1" style="margin-right: 10%;">
                <div class="col">
                <div class="btn btn-primary rounded-pill" style="font-size: 30%; opacity: 0.8;" @click="subNumber(index)">-</div>
                </div>
                <div class="col">
                    <div style="margin-top: 5%;font-size: 70%;opacity: 0.8;">{{ countOrder[index].number }}</div>
                </div>
                    <div class="col">
                    <div class="btn btn-primary rounded-pill" style="font-size: 20%; opacity: 0.8;" @click="addNumber(index)">+</div>
                    </div>
                    </div>
                <div :id="`order${index}`" class="p-2 btn btn-online-primary border-primary rounded-pill" style="width: 50%; height: 40% ; border: 4px dotted;">
                    <draggable v-model="menu.items" tag="div" group="meals" :animation="300" itemKey="menu.p" class="ordermeals text-uppercase ls-1 fw-semibold h-sub-font" @change="watchItem(index);" @click="removeMenu(index)" style="margin-top: 5%;font-size: 100%;">
                    <template #item="{ element: menu, index }">
                        <div style="padding: 3%;">{{ menu.p || '請拖曳餐點，點擊項目可以刪除' }}</div>
                    </template>
                    </draggable>
                </div>
                <i class="hicon hicon-thin-circle-arrow-left text-primary" style="font-size: 60%; margin-left: 10%;font-weight: bold;"></i>
                <div class="row">
                    <div class="col" style="margin-right: 15%;margin-top: 2%; font-size: 60%; text-align: center;" :id="`menu${index}`"></div>
                </div>
                </div>
                <div class="row">
        </div>
            </div>
            </h2>
        </div> 
        </div>
        </div>
    </div>
        <div class="row-5">
            <div class="col">
                <div v-if="showAreaB">
                    <template v-if="buttonsB.length === 0" >
                        <p class="text-uppercase h5 ls-1 fw-semibold h-sub-font rounded-pill">點擊類別項目進行篩選</p>
                    </template>
                <template v-else>
                    <button v-for="button in buttonsB" :key="button.id" @click="moveButtonToA(button);handleCategoryClick(0)" class="btn btn-primary text-uppercase h5 ls-1 fw-semibold h-sub-font rounded-pill">{{ button.name }}</button>
                </template>
                </div>
            </div>
            <div class="col">
                <div id="keywords" class="text-uppercase h5 ls-1 fw-semibold h-sub-font"></div>
                <button class="btn btn-secondary text-uppercase ls-1 fsm-1 h-sub-font rounded-pill" style="margin-left: 80%;"  @click="handlekeywordClick('')">清空關鍵字</button>
            </div>
        </div>
        <div class="row p-2">
            <div class="col">
                <div class="row">
                    <div class="col-7">
                        <div v-if="showAreaA" class="text-primary row">
                            <button v-for="button in buttonsA" :key="button.id" @click="moveButtonToB(button);handleCategoryClick(button.id)" class="btn btn-primary text-uppercase h6 ls-1 fw-semibold h-sub-font rounded-pill col-12">
                                {{ button.name }}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-10">
                <div class="row">
                    <draggable v-model="computedMenus" tag="div" :animation="300" class="row" group="meals" itemKey="computedMenus.p">
                    <template #item="{ element: menu, index }">
                        <div class="col-3">
                        <div class="text-primary p-5">
                            <Popper arrow placement="top" :content="menu.d" @click="handleMenuClick(menu.id);"
                            class="btn btn-primary text-uppercase fw-semibold h-sub-font text-body-secondary rounded-pill" style="font-size: 15px;" >
                            {{ menu.p }}
                            </Popper>
                        </div>
                        </div>
                    </template>
                    </draggable>
                    <div class="col-10">
                    <div id="menu" class="btn btn-primary fw-medium text-uppercase ls-1 h5 pt-4 pb-4 ps-8 pe-8 h-sub-font">聯繫廚師長<i class="hicon hicon-thin-circle-arrow-left"></i></div>
                </div>
                </div>
            </div>
            <div class="col-12">
                <button type="button" id="showModalBtn" class="btn btn-secondary fw-medium text-uppercase ls-1 h5 pt-4 pb-4 ps-8 pe-8 h-sub-font justify-content-center" style="margin-top: 5%; font-size: 180%; height: 60%;" @click="getinput">
                <span>完成預訂</span>
                <i class="hicon hicon-thin-circle-arrow-left"></i>
                </button>
                <div class="modal fade modal-dialog-scrollable modal-lg" id="myModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-xl modal-dialog-centered modal-dialog-scrollable">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="staticBackdropLabel" style="font-size: 190%;font-weight: bold;">訂單明細</h5>
                    </div>
                    <div class="modal-body"> 
                        <div class="row">
                        <div class="col-12 text-start p-2">
                            <span class="p-5" style="font-size: 130%;font-weight: bold;margin-left: 7%;">預約開始日期：{{ getBookstrdate + " " + getBookstrtime }}</span>
                            <span class="p-5" style="font-size: 130%;font-weight: bold;margin-left: 7.5%;">預約結束日期：{{ getBookenddate + " " + getBookendtime }}</span>
                        </div>
                        <div class="col-12 text-start p-2">
                            <span class="p-5" style="font-size: 130%;font-weight: bold;margin-left: 7%;">姓名：{{ getname }}</span>
                            <span class="p-5" style="font-size: 130%;font-weight: bold;margin-left: 32%;">電話：{{ getphone }}</span>
                        </div>
                        <div class="col-12 text-start p-2">
                            <span class="p-5" style="font-size: 130%;font-weight: bold;margin-left: 7%;">電子郵件：{{ getemail }}</span>
                            <span class="p-5" style="font-size: 130%;font-weight: bold;margin-left: 7%;">預計人數：{{ getguest }}</span>
                        </div>
                    </div>  
                        <table class="table">
                                <thead>
                                    <tr>
                                    <th scope="col">出餐順序</th>
                                    <th scope="col">餐點名稱</th>
                                    <th scope="col"></th>
                                    <th scope="col">數量</th>
                                    <th scope="col">價錢</th>
                                    </tr>
                                </thead>
                                <tbody  v-for="(menu, index) in menus" :key="menu.name">
                                    <tr>
                                    <td id="numMenuLevel">{{index+1}}</td>
                                    <td class="d-none" id="numMenuId">{{ordermeals[index].items[0].id}}</td>
                                    <td id="numMenuname">{{ordermeals[index].items[0].p}}</td>
                                    <td>X</td>
                                    <td id="numMenu"> {{countOrder[index].number}}</td>
                                    <td id="numPrice"> {{ordermeals[index].items[0].s * countOrder[index].number}}</td>
                                    </tr>
                                </tbody>
                        </table>
                    </div>
                    <div class="modal-footer">
                        <div class="h3">小計： {{subTotal}} 元</div>
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">關閉</button>
                        <button type="button" class="btn btn-primary"@click="sendAPI">確認</button>
                    </div>
                    </div>
                </div>
                </div>
        </div>
        </div>
    </div>
    </section>
</template>

<style scoped>

:deep(.popper) {
        background: #b99577;
        padding: 20px;
        border-radius: 20px;
        color: #fff;
        font-weight: bold;
        text-transform: uppercase;
    }

    :deep(.popper #arrow::before) {
        background: #b99577;
    }

    :deep(.popper:hover),
    :deep(.popper:hover > #arrow::before) {
        background: #b99577;
    }

</style>