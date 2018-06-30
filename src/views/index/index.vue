<template>
  <div class="z-page">

    <view-box class="z-content">

      <div class="life-index-banner">
        <swiper
          :list="mealBanner">
        </swiper>
      </div>

      <menu-box
        :cats="mealMenu"
        :title="'日常业务'">
      </menu-box>

    </view-box>

  </div>
</template>
<script>
  // banner和shop是单独从home.js的store中获取的值，这里之所以分开获取数据，是为了测试两种获取数据的方式
  import {mealMenu} from '../../data/data.js'

  import MenuBox from '../../components/MenuBox.vue'
  import SaleFloor from '../../components/SaleFloor.vue'
  import Recommend from '../../components/Recommend.vue'
  import ScrollerBox from '../../components/ScrollerBox.vue'
  import GoodGrid from '../../components/GoodGrid.vue'
  import {Swiper, SwiperItem, Popup, ViewBox} from 'vux'

  require('./index.less')
  require('../../assets/svg/iconfont')

  // import { mapGetters } from 'vuex';
  export default {
    components: {
      Popup,
      MenuBox,
      SaleFloor,
      Recommend,
      GoodGrid,
      Swiper,
      SwiperItem,
      ScrollerBox,
      ViewBox
    },
    data() {
      return {
        mealMenu: mealMenu
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
