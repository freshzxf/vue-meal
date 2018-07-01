<template>
  <div class="pr">
    <flexbox class="gradient" :gutter="0" wrap="wrap" align="center" justify="center">
      <flexbox-item
        class="show-item"
        :span="1/3"
        v-for="(item, index) in datas">
        <router-link
          style="color: #fff"
          :to="item.link">

          <countup :end-val="item.data" :duration="2" :decimals="2" class="data"></countup>

          <div class="text">{{item.text}}</div>

        </router-link>
      </flexbox-item>
    </flexbox>
    <!--水纹-->
    <div class="water"><div class="water-c"><div class="water-1"></div><div class="water-2"></div></div></div>
  </div>
</template>

<script>
  import {Flexbox, FlexboxItem, Countup} from 'vux'

  export default {
    props: ['datas', 'title'],
    components: {
      Flexbox,
      FlexboxItem,
      Countup
    }
  }
</script>
<style scoped>
  .gradient{
    background: linear-gradient(0deg, #2992FC, #21C0FC);
    padding: 15px 5px;
    text-align: center;
  }
  .show-item {
    color: #fff;
    margin-bottom: 30px;
  }
  .data{
    font-weight: bold;
    font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif;
    letter-spacing: 1px;
  }
  .text {
    margin-top: 5px;
    font-size: 14px;
  }
  /*water*/
  @keyframes wave-animation-1{0%{background-position:0 top}100%{background-position:600px top}}@keyframes wave-animation-2{0%{background-position:0 top}100%{background-position:600px top}}
  .water{position:absolute;left:0;bottom:-12px;height:30px;width:100%;z-index:1;}
  .water-c{position:relative;}
  .water-1,.water-2{position:absolute;width:100%;height:30px}
  .water-1{background:url('/static/img/water-1.svg') repeat-x;background-size:600px;-webkit-animation:wave-animation-1 3.5s infinite linear;animation:wave-animation-1 3.5s infinite linear}
  .water-2{top:5px;background:url('/static/img/water-2.svg') repeat-x;background-size:600px;-webkit-animation:wave-animation-2 6s infinite linear;animation:wave-animation-2 6s infinite linear}
</style>
