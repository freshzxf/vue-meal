// shop
export const shop = {
  logo: '/static/img/life-index-logo.png',
  title: '极物商城',
  shareInfo: {
    title: '长按二维码分享',
    qrcode: '/static/img/good-default.jpg'
  }
}

// 首页菜单
export const mealMenu = [
  {
    // img: '/static/img/chaju.png',
    svg: '#icon-xigua',
    text: '食材订购',
    link: 'order'
  },
  {
    svg: '#icon-jiezi',
    text: '食材签收',
    link: 'accept'
  },
  {
    // img: '/static/img/chuanping.png',
    svg: '#icon-pingguo',
    text: '食材出库',
    link: 'ingredientsOut'
  },
  {
    // img: '/static/img/huaqi.png',
    svg: '#icon-guamian',
    text: '营养出餐',
    link: 'mealsOut'
  },
  {
    // img: '/static/img/canju.png',
    svg: '#icon-lizhi',
    text: '盘存统计',
    link: 'statistics'
  },
  {
    // img: '/static/img/chaju.png',
    svg: '#icon-li',
    text: '食材订购',
    link: 'order'
  },
  {
    svg: '#icon-mangguo',
    text: '食材签收',
    link: 'accept'
  },
  {
    // img: '/static/img/chuanping.png',
    svg: '#icon-mihoutao',
    text: '食材出库',
    link: 'ingredientsOut'
  },
  {
    // img: '/static/img/huaqi.png',
    svg: '#icon-mogu',
    text: '营养出餐',
    link: 'mealsOut'
  },
  {
    // img: '/static/img/canju.png',
    svg: '#icon-yangcong',
    text: '结算统计',
    link: 'statistics'
  }
]

export const userInfo = {
  logo: '/static/img/avatar1.png',
  name: 'freshzxf'
}

// address list
export const userAddress = [
  {
    id: 1,
    isDefault: 0,
    name: '老王',
    tel: '13684833901',
    address: '广东广州海珠区广州大道中338号'
  },
  {
    id: 2,
    isDefault: 0,
    name: '老王1',
    tel: '13684833901',
    address: '广东广州海珠区广州大道中338号'
  },
  {
    id: 3,
    isDefault: 0,
    name: '老王2',
    tel: '13684833901',
    address: '广东广州海珠区广州大道中338号'
  },
  {
    id: 4,
    isDefault: 0,
    name: '老王3',
    tel: '13684833901',
    address: '广东广州海珠区广州大道中338号'
  }
]

// like list
export const myLikes = [
  {
    id: 1,
    img: '/static/img/good-default.jpg',
    title: '原木打造原木打造原木打造原木打造原木打造原木打造原木打造原木打造原木打造原木打造原木打造原木打造原木打造',
    subInfo: '已售8888件',
    price: '200.00'
  },
  {
    id: 2,
    img: '/static/img/good-default.jpg',
    title: '原木打造原木打造原木打造原木打造原木打造原木打造原木打造原木打造原木打造原木打造原木打造原木打造原木打造',
    subInfo: '已售8888件',
    price: '200.00'
  }
]

// order list
export const myOrders = [
  {
    id: 'a',
    name: '由極物商城发货',
    state: 'needService',
    sum: 998,
    good: [
      {
        img: '/static/img/good-default.jpg',
        title: '原木打造原木打造原木打造原木打造原木打造原木打造原木打造原木打造原木打造原木打造原木打造原木打造原木打造',
        subInfo: ['颜色:蓝色', '颜色:蓝色', '颜色:蓝色'],
        price: '200.00',
        num: '3'
      },
      {
        img: '/static/img/good-default.jpg',
        title: '原木打造原木打造原木打造原木打造原木打造原木打造原木打造原木打造原木打造原木打造原木打造原木打造原木打造',
        subInfo: ['颜色:蓝色', '颜色:蓝色', '颜色:蓝色'],
        price: '200.00',
        num: '1'
      }
    ]
  },
  {
    id: 'a',
    name: '由極物商城发货',
    state: 'needPay',
    sum: 998,
    good: [
      {
        img: '/static/img/good-default.jpg',
        title: '原木打造原木打造原木打造原木打造原木打造原木打造原木打造原木打造原木打造原木打造原木打造原木打造原木打造',
        subInfo: ['颜色:蓝色', '颜色:蓝色', '颜色:蓝色'],
        price: '200.00',
        num: '3'
      },
      {
        img: '/static/img/good-default.jpg',
        title: '原木打造原木打造原木打造原木打造原木打造原木打造原木打造原木打造原木打造原木打造原木打造原木打造原木打造',
        subInfo: ['颜色:蓝色', '颜色:蓝色', '颜色:蓝色'],
        price: '200.00',
        num: '1'
      }
    ]
  },
  {
    id: 'a',
    name: '由極物商城发货',
    state: 'needSend',
    sum: 998,
    good: [
      {
        img: '/static/img/good-default.jpg',
        title: '原木打造原木打造原木打造原木打造原木打造原木打造原木打造原木打造原木打造原木打造原木打造原木打造原木打造',
        subInfo: ['颜色:蓝色', '颜色:蓝色', '颜色:蓝色'],
        price: '200.00',
        num: '3'
      },
      {
        img: '/static/img/good-default.jpg',
        title: '原木打造原木打造原木打造原木打造原木打造原木打造原木打造原木打造原木打造原木打造原木打造原木打造原木打造',
        subInfo: ['颜色:蓝色', '颜色:蓝色', '颜色:蓝色'],
        price: '200.00',
        num: '1'
      }
    ]
  },
  {
    id: 'a',
    name: '由極物商城发货',
    state: 'needGet',
    sum: 998,
    good: [
      {
        img: '/static/img/good-default.jpg',
        title: '原木打造原木打造原木打造原木打造原木打造原木打造原木打造原木打造原木打造原木打造原木打造原木打造原木打造',
        subInfo: ['颜色:蓝色', '颜色:蓝色', '颜色:蓝色'],
        price: '200.00',
        num: '3'
      },
      {
        img: '/static/img/good-default.jpg',
        title: '原木打造原木打造原木打造原木打造原木打造原木打造原木打造原木打造原木打造原木打造原木打造原木打造原木打造',
        subInfo: ['颜色:蓝色', '颜色:蓝色', '颜色:蓝色'],
        price: '200.00',
        num: '1'
      }
    ]
  },
  {
    id: 'a',
    name: '由極物商城发货',
    state: 'needComment',
    sum: 998,
    good: [
      {
        img: '/static/img/good-default.jpg',
        title: '原木打造原木打造原木打造原木打造原木打造原木打造原木打造原木打造原木打造原木打造原木打造原木打造原木打造',
        subInfo: ['颜色:蓝色', '颜色:蓝色', '颜色:蓝色'],
        price: '200.00',
        num: '3'
      },
      {
        img: '/static/img/good-default.jpg',
        title: '原木打造原木打造原木打造原木打造原木打造原木打造原木打造原木打造原木打造原木打造原木打造原木打造原木打造',
        subInfo: ['颜色:蓝色', '颜色:蓝色', '颜色:蓝色'],
        price: '200.00',
        num: '1'
      }
    ]
  }
]

// order detail
export const myOrder = {
  id: '173434831258434',
  name: '由極物商城发货',
  state: 0,
  sum: '599',
  pay: '399',
  coupon: '200',
  bill: '我是发票信息',
  guestMsg: '我是留言信息我是留言信息我是留言信息我是留言信息我是留言信息我是留言信息我是留言信息我是留言信息',
  orderNum: '122334565677',
  createdAt: '2017-03-07 16:09:02',
  address: {
    name: '张飞',
    tel: '1200000000',
    address: '放大范德萨会计法撒旦发生打发手动阀第四发股份大噶的风格'
  },
  good: [
    {
      img: '/static/img/good-default.jpg',
      title: '原木打造原木打造原木打造原木打造原木打造原木打造原木打造原木打造原木打造原木打造原木打造原木打造原木打造',
      subInfo: ['颜色:蓝色', '颜色:蓝色', '颜色:蓝色'],
      price: '200.00',
      num: '3'
    },
    {
      img: '/static/img/good-default.jpg',
      title: '原木打造原木打造原木打造原木打造原木打造原木打造原木打造原木打造原木打造原木打造原木打造原木打造原木打造',
      subInfo: ['颜色:蓝色', '颜色:蓝色', '颜色:蓝色'],
      price: '200.00',
      num: '1'
    }
  ]
}

// user setting
export const userSettings = {
  logo: '/static/img/mine-logo-default.png',
  account: 'xxx',
  nikeName: 'Jar',
  pwd: '',
  tell: '1200000000'
}
