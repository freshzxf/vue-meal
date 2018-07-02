<style>
  .box {
    padding: 0 15px;
    width: 204px;
  }

  .demo1-item {
    display: table;
    width: auto;
    margin: 8px 5px;
    padding: 5px 10px;
    border-radius: 3px;
    font-size: 14px;
    background-color: #efeff4;
  }

  .demo1-item-selected {
    background-color: #FF61AD;
    color: #fff;
  }

  .calendar {
  }
</style>

<template>
  <div class="box">
    <!--历史记录-->
    <div style="margin: 15px 5px 5px" class="f14 gray">餐别筛选 <i class="iconfont icon-right"></i></div>
    <checker v-model="checkedVal" default-item-class="demo1-item" radio-required
             selected-item-class="demo1-item-selected">
      <checker-item v-for="(item, index) in typeFilter" :value="item" :key="index">{{item.value}}</checker-item>
    </checker>

    <!--起始日期-->
    <div style="margin: 15px 5px 5px" class="f14 gray">起始日期 <i class="iconfont icon-right"></i></div>
    <calendar :readonly="readonly" v-model="startCal" :title="title" placeholder="按起始日期筛选" @on-show="log('show')"
              @on-hide="log('hide')"></calendar>

    <!--截止日期-->
    <div style="margin: 15px 5px 5px" class="f14 gray">截止日期 <i class="iconfont icon-right"></i></div>
    <calendar :readonly="readonly" v-model="endCal" :title="title" placeholder="按截止日期筛选"
              @on-show="log('show')" @on-hide="log('hide')"></calendar>

    <x-button type="primary">执行筛选</x-button>
    <x-button type="warn">恢复默认</x-button>
  </div>
</template>

<script>
  import {Checker, CheckerItem, Calendar, XButton} from 'vux'

  export default {
    props: ['typeFilter'],
    components: {
      Checker,
      CheckerItem,
      Calendar,
      XButton
    },
    data() {
      return {
        checkedVal: {'key': 1, 'value': '全部'},
        readonly: false,
        startCal: '',
        endCal: '',
        title: ''
      }
    },
    methods: {
      log(str) {
        console.log(str)
      },
      onChange(val) {
        console.log('on change', val)
      }
    }
  }
</script>
