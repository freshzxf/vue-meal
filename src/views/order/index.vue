<template>
  <div class="z-page">
    <x-header :left-options="{backText: ''}" title="食材订购">
      <span slot="right" class="iconfont icon-search_light f26" @click="drawerVisibility = !drawerVisibility"></span>
    </x-header>


    <drawer
      :show.sync="drawerVisibility"
      :show-mode="showModeValue"
      :placement="showPlacementValue">

      <div slot="drawer">
        <filter-box
          :typeFilter="typeFilter"
        ></filter-box>
      </div>

      <div class="mine-head-wrap">
        <img :src="userInfo.logo"/>
        <div class="mine-info">
          <span class="name">{{userInfo.name}}</span>
          <span class="hello">, hello</span>
        </div>
        <router-link
          class="setting zui-icon zui-icon-setting"
          :to="{
					name: 'mySetting'
				}">
        </router-link>
      </div>
      <div class="mine-order-wrap">
        <cell
          class="mine-order-all"
          :title="orderTag.all.text"
          :value="'查看全部'"
          :link="{
					name: 'orderList',
					query: {tag:orderTag.all.tag}
				}">
        </cell>

        <flexbox :gutter="0">
          <flexbox-item>
            <router-link
              class="mine-order-item"
              :to="{
							name: 'orderList',
							query: {tag: orderTag.pay.tag}
						}">
              <badge class="badge" text="2"></badge>
              <span :class="orderTag.pay.icon"></span>
              <div>{{orderTag.pay.text}}</div>
            </router-link>
          </flexbox-item>
          <flexbox-item>
            <router-link
              class="mine-order-item"
              :to="{
							name: 'orderList',
							query: {tag: orderTag.send.tag}
						}">
              <badge class="badge" text="1"></badge>
              <span :class="orderTag.send.icon"></span>
              <div>{{orderTag.send.text}}</div>
            </router-link>
          </flexbox-item>
          <flexbox-item>
            <router-link
              class="mine-order-item"
              :to="{
							name: 'orderList',
							query: {tag: orderTag.get.tag}
						}">
              <badge class="badge" text="10"></badge>
              <span :class="orderTag.get.icon"></span>
              <div>{{orderTag.get.text}}</div>
            </router-link>
          </flexbox-item>
          <flexbox-item>
            <router-link
              class="mine-order-item"
              :to="{
							name: 'orderList',
							query: {tag: orderTag.comment.tag}
						}">
              <badge class="badge" text="9"></badge>
              <span :class="orderTag.comment.icon"></span>
              <div>{{orderTag.comment.text}}</div>
            </router-link>
          </flexbox-item>
          <flexbox-item>
            <router-link
              class="mine-order-item"
              :to="{
							name: 'orderList',
							query: {tag: orderTag.sole.tag}
						}">
              <badge class="badge" text="6"></badge>
              <span :class="orderTag.sole.icon"></span>
              <div>{{orderTag.sole.text}}</div>
            </router-link>
          </flexbox-item>
        </flexbox>
      </div>
      <group>
        <cell
          class="z-cell-item"
          :title="'我的收藏'"
          :link="{
					name: 'myLike'
				}">
        </cell>
        <cell
          class="z-cell-item"
          :title="'我的优惠券'"
          :link="{
					name: 'myCoupon'
				}">
        </cell>
        <cell
          class="z-cell-item"
          :title="'收货地址'"
          :link="{
					name: 'myAddress'
				}">
        </cell>
        <cell
          class="z-cell-item"
          :title="'我要开馆'"
          is-link>
        </cell>
      </group>
      <!-- rourer-view 作为默认插槽内容 -->
      <!--<div>
        <router-view></router-view>
      </div>-->
    </drawer>
  </div>
</template>
<script>
  import {userInfo} from '../../data/data.js'
  import FilterBox from '../../components/FilterBox'
  import {Badge, Cell, Group, Flexbox, FlexboxItem, XHeader, Drawer} from 'vux'

  require('./index.less')

  export default {
    components: {
      Badge,
      Group,
      Cell,
      FlexboxItem,
      Flexbox,
      XHeader,
      Drawer,
      FilterBox
    },
    data() {
      return {
        userInfo: userInfo,
        orderTag: {
          all: {
            tag: 'all',
            text: '我的订单',
            icon: ''
          },
          pay: {
            tag: 'pay',
            text: '待付款',
            icon: 'zui-icon zui-icon-payment'
          },
          send: {
            tag: 'send',
            text: '待发货',
            icon: 'zui-icon zui-icon-shipped'
          },
          get: {
            tag: 'get',
            text: '待收货',
            icon: 'zui-icon zui-icon-the-receipt'
          },
          comment: {
            tag: 'comment',
            text: '待评价',
            icon: 'zui-icon zui-icon-comment'
          },
          sole: {
            tag: 'sole',
            text: '售后/退款',
            icon: 'zui-icon zui-icon-KEFU'
          }
        },
        drawerVisibility: false,
        showMode: 'overlay',
        showModeValue: 'overlay',
        showPlacement: 'right',
        showPlacementValue: 'right',
        typeFilter: [{key: 1, value: '全部'}, {key: 2, value: '早餐'}, {key: 3, value: '中餐'}, {key: 4, value: '晚餐'}]
      }
    },
    methods: {
      onClickMore() {
        this.showMenu = true
      }
    }
  }
</script>
