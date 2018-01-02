/*
 * @Author: 张浩然
 * @Date: 2017-10-19 22:29:46
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2018-01-02 16:10:11
 */

/**
 * @returns 返回当前的环境 目前有app wechat
 */
function infoMore() {
  const browser = {
    versions() {
      const u = navigator.userAgent.toLowerCase();
      // const app = navigator.appVersion.toLowerCase();
      return {
        weixin: u.match(/MicroMessenger/i) === "micromessenger", //微信内
        qq: u.match(/QQ/i) === "qq", //qq内
        trident: u.indexOf("Trident") > -1, //IE内核
        presto: u.indexOf("Presto") > -1, //opera内核
        webKit: u.indexOf("AppleWebKit") > -1, //苹果、谷歌内核
        gecko: u.indexOf("Gecko") > -1 && u.indexOf("KHTML") === -1, //火狐内核
        mobile: !!u.match(/AppleWebKit.*Mobile.*/), //是否为移动终端
        ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
        android: u.indexOf("Android") > -1 || u.indexOf("Linux") > -1, //android终端或者uc浏览器
        iPhone: u.indexOf("iPhone") > -1 || u.indexOf("Mac") > -1, //是否为iPhone或者QQHD浏览器
        iPad: u.indexOf("iPad") > -1, //是否iPad
        webApp: u.indexOf("Safari") === -1, //是否web应该程序，没有头部与底部
      };
    },
    // language: (navigator.browserLanguage || navigator.language).toLowerCase()
  };
  let res;
  if (navigator.userAgent.match(/(iPhone|iPod|Android|ios)/i)) {
    if (browser.versions().android && browser.versions().webKit) {
      res = "app";
    }
    if (browser.versions().qq) {
      res = 'qq'
    }
    if (
      browser.versions().ios ||
      browser.versions().iPhone ||
      browser.versions().iPad
    ) {
      res = "app";
    }
    if (browser.versions().weixin) {
      res = "wechat";
    }
    if (browser.versions().weixin && browser.versions().android) {
      //微信安卓
      res = "wechat";
    }
    if (
      (browser.versions().weixin && browser.versions().ios) ||
      browser.versions().iPhone ||
      browser.versions().iPad
    ) {
      //微信IOS
      res = "wechat";
    }
  } else {
    res = 'pc'
  }
  return res
}

export default infoMore