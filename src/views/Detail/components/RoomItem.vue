<script setup>
import { ref } from 'vue';
import { onMounted } from 'vue';
import { useCartStore } from '@/stores/cartStore';

const cartStore = useCartStore();

const props = defineProps({
  roomItem: {
    type: Object,
    default: () => { }
  },
});

const addToCartSuccess = ref(false);

const checkCart = () => {
  const { checkInDate, checkOutDate, rooms, id } = props.roomItem;

  for (const room of rooms) {
    const roomId = room.roomId;
    const uid = `${checkInDate},${checkOutDate},${roomId},${id}`;
    if (!cartStore.cartList.some(ci => ci.uid == uid)) {
      return { uid, roomId };
    }
  }

  return false;
}

const addCart = () => {
  const { uid, roomId } = checkCart();

  if (uid) {
    const { id, name, picture, checkInDate, checkOutDate, price, remark, info } = props.roomItem;

    const cartObj = {
      uid: uid,
      selected: true,
      typeId: id,
      roomId: roomId,
      name: name,
      picture: picture,
      checkInDate: checkInDate,
      checkOutDate: checkOutDate,
      info: info,
      price: price,
      count: 1,
      remark,
    };

    cartStore.addCart(cartObj);
    addToCartSuccess.value = true;
    // alert('已成功添加到購物車！');
  } else {
   alert('數量不足無法加入購物車');
  }
}

</script>

<template>
  <!-- Group -->
  <div class="d-flex ms-lg-8">
    <!-- <div v-if="props.roomItem" class="ms-6 flex-grow-1 lh-lg" data-cues="fadeIn"> -->
    <div v-if="props.roomItem" class="ms-6 flex-grow-1 lh-lg">
      <!-- <h3 class="h5 text-uppercase h-sub-font ls-1"> Featured Facilities </h3> -->
      <div class="row g-0 g-md-5">
        <div class="col-lg-6 col-md-12">
          <div class="row">
            <div class="col-7">
              <div class="card card-overlay-bottom text-bg-dark border-0 mb-5">
                <img ref="image" :src="roomItem.picture" class="card-img" alt="">
                <div class="card-img-overlay pt-8">
                  <h3 class="card-title mb-0 fsm-1 text-uppercase fw-medium h-sub-font ls-1">{{ roomItem.name }}</h3>
                </div>
              </div>
            </div>
            <div class="col-5">
              <i class="hicon hicon-lg me-1 text-primary hicon-ticket-service"></i>
              <span class="me-1">商品資訊</span>
              <!-- <div v-for="(ele,index) in item.info.split(',')" :class="{'mt-lg-2': index == 0}">{{ ele }}</div> -->
              <div>{{ roomItem.desc }}</div>
            </div>
          </div>
        </div>
        <div class="col-lg-3" style="display: none">
          <div class="row justify-content-center">
            <div class="col-lg-12 col-6 d-lg-flex justify-content-center">
              <!-- <div class="d-flex justify-content-center"> -->
              <i class="hicon hicon-lg me-1 text-primary hicon-casino"></i>
              <span class="me-1">剩餘房間</span>
              <!-- </div> -->
            </div>
            <div class="col-lg-9 col-6 text-center">
              <div v-for="room in roomItem.rooms">{{ room.roomId }}</div>
            </div>
          </div>
        </div>
        <div class="col-lg-1">
          <div class="row">
            <div class="col-lg-12 col-6 text-center">
              <i class="hicon hicon-lg me-1 text-primary hicon-spas"></i>
              <span class="me-1">剩餘房間</span>
            </div>
            <div class="col-lg-12 col-6 text-center mt-lg-10">
              <div>{{ roomItem.rooms.length  }}</div>
            </div>
          </div>
        </div>
        <!-- <div class="col-lg-1">
          <div class="row">
            <div class="col-lg-12 col-6 text-center">
              <i class="hicon hicon-lg me-1 text-primary hicon-spas"></i>
              <span class="me-1">數量</span>
            </div>
            <div class="col-lg-12 col-6 text-center mt-lg-10">
              <div>{{ roomItem.stock }}</div>
            </div>
          </div>
        </div> -->
        <div class="col-lg-1">
          <div class="row">
            <div class="col-lg-12 col-6 text-center">
              <i class="hicon hicon-lg me-1 text-primary hicon-spas"></i>
              <span class="me-1">總金額</span>
            </div>
            <div class="col-lg-12 col-6 text-center mt-lg-10">
              <div>{{ roomItem.price }}</div>
            </div>
          </div>
        </div>
        <div class="col-lg-2">
          <div class="row">
            <div class="col-lg-12 col-6 text-center">
              <i class="hicon hicon-lg me-1 text-primary hicon-spas"></i>
              <span class="me-1">操作</span>
            </div>
            <div class="col-lg-12 col-6 text-center mt-lg-10">
              <input class="btn btn-primary btn-sm" type="button" value="加入購物車" @click="addCart" />
            </div>
            <!-- <span v-if="addToCartSuccess" class="alert alert-success" role="alert">
              已成功添加到購物車！
            </span> -->
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- /Group -->
  <hr class="mt-2">

</template>