import wx from './wxlib/jweixin';

const wxJSSDK = {
  version:'1.2.0', //  版本号
  appName: '', // 使用当前库的开发者，可以配置应用名字
  isReady: false, // 是否初始化完毕
  access_token: '', // 令牌
  ticket: '', // 微信临时票据
  config: {
    debug: true,
    appId: 'wxf5efd4c17206a586', // 公众号ID
    timestamp: Math.ceil(new Date().getTime() / 1000).toString(), // 时间戳
    nonceStr: 'pictorial_wxJSSDk', // 生成签名的随机串
    signature: '', // 签名
    jsApiList: [
      'onMenuShareTimeline', // 分享到朋友圈
      'onMenuShareAppMessage', // 分享给朋友
      'onMenuShareQQ', // 分享到QQ
      'onMenuShareQZone', // 分享到QQ空间
    ], // 需要使用的微信接口
  },

  init() { // 初始化
    if (!wx) {
      console.log('请检查是否引入微信JS');
      return false;
    }

    let that = this;
    this.wx_get_token((data) => {
      
    });
  },


};