<style scoped>
</style>
<template>
  <tabbar >
    <!--:selected="index == 0 ? true : false"-->
    <tabbar-item
      v-for="(item,index) in bottomBar"
      :link="item.link"
      :key="index">

      <!--非选中状态插槽icon-->
			<span
        slot="icon"
        class="iconfont f20"
        :class="item.iconCls">
			</span>
      <!--选中状态插槽icon-active-->
			<span
        slot="icon-active"
        class="iconfont f20"
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
          },{
            name: '客服',
            iconCls: 'icon-community_light',
            iconActiveCls: 'icon-community_fill_light',
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
