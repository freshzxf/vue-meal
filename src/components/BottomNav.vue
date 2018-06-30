<style scoped>
  .iconfont{font-size: 22px;padding-bottom: 5px}
</style>
<template>
  <tabbar >
    <tabbar-item
      v-for="(item,index) in bottomBar"
      :link="item.link"
      :key="index"
      :selected="index == 0 ? true : false">

      <!--非选中状态插槽icon-->
			<span
        slot="icon"
        class="iconfont"
        :class="item.iconCls">
			</span>
      <!--选中状态插槽icon-active-->
			<span
        slot="icon-active"
        class="iconfont"
        :class="item.iconActiveCls">
			</span>

      <label
        slot="label">
				{{item.name}}
			</label>
    </tabbar-item>
  </tabbar>
</template>
<script>
  import {Tabbar, TabbarItem} from 'vux'

  export default {
    components: {
      Tabbar,
      TabbarItem
    },
    props: [],
    data() {
      return {
        bottomBar: [
          {
            name: '首页',
            iconCls: 'icon-home_light',
            iconActiveCls: 'icon-home_fill_light',
            link: 'index'
          },
          {
            name: '我的',
            iconCls: 'icon-my_light',
            iconActiveCls: 'icon-my_fill_light',
            link: 'mine'
          }
        ]
      }
    },
    computed: {
    },
    methods: {
    }
  }
</script>
