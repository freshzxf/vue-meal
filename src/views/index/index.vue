<template>
  <div class="z-page">

    <view-box class="z-content">

      <div class="life-index-banner">
        <swiper
          :list="mealBanner">
        </swiper>
      </div>

      <cat-box
        :cats="shopCat"
        :title="'日常业务'">
      </cat-box>

      <divider class="unit">{{unit}}</divider>

    </view-box>

  </div>
</template>
<script>
  // banner和shop是单独从home.js的store中获取的值，这里之所以分开获取数据，是为了测试两种获取数据的方式
  import {shopCat} from '../../data/data.js'

  import CatBox from '../../components/catBox.vue'
  import SaleFloor from '../../components/SaleFloor.vue'
  import Recommend from '../../components/Recommend.vue'
  import ScrollerBox from '../../components/ScrollerBox.vue'
  import GoodGrid from '../../components/GoodGrid.vue'
  import {Swiper, SwiperItem, Popup, ViewBox, Divider} from 'vux'

  require('./index.less')
  require('../../assets/svg/iconfont')

  // import { mapGetters } from 'vuex';
  export default {
    components: {
      Popup,
      CatBox,
      SaleFloor,
      Recommend,
      GoodGrid,
      Swiper,
      SwiperItem,
      ScrollerBox,
      ViewBox,
      Divider
    },
    data() {
      return {
        shopCat: shopCat,
        unit: '资源县羊场中学'
      }
    },
    created() {
      this.initMealBanner()
    },
    computed: {
      mealBanner() {
        return this.$store.state.home.mealBanner
      }
    },
    methods: {
      initMealBanner() {
        this.$store.dispatch('initMealBanner')
      }
    }
  }
</script>
