<template>
  <div class="z-page" style="background-color:#fff;">
    <view-box class="z-content">

      <!--顶部数据显示-->
      <head-show
        :datas="headShow">
      </head-show>

      <!--菜单组件-->
      <menu-box
        :datas="mealMenu">
      </menu-box>

    </view-box>
  </div>
</template>
<script>
  import {headShow, mealMenu} from '../../data/data.js'
  import HeadShow from '../../components/HeadShow.vue'
  import MenuBox from '../../components/MenuBox.vue'
  import {ViewBox} from 'vux'

  // 首页less
  require('./index.less')
  // svg菜单图标
  require('../../assets/svg/iconfont')

  export default {
    components: {
      HeadShow,
      MenuBox,
      ViewBox
    },
    data() {
      return {
        headShow: headShow,
        mealMenu: mealMenu
      }
    },
    created() {},
    computed: {},
    methods: {}
  }
</script>
