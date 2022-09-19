import wx from 'weixin-js-sdk'
const jsApiList = [
    'checkJsApi',
    'onMenuShareTimeline',
    'onMenuShareAppMessage',
    'onMenuShareQQ',
    'onMenuShareWeibo',
    'onMenuShareQZone',
]
export function wxShare(type, url, cityId, data = {}) {
    var ua = window.navigator.userAgent.toLowerCase();
    console.log('wx', wx)
        //判断是不是微信
    if (ua.match(/MicroMessenger/i) == 'micromessenger') {
        apiStore.get('/v1/share/getSignature', { url: url, type: type, city_id: cityId }).then(res => {
            console.log('res--->', res.data, url)
            const { appId, nonceStr, signature, timestamp, des, img_url, title } = res.data
                //通过微信config接口注入配置
            wx.config({
                debug: false, //默认为false 为true的时候是调试模式，会打印出日志
                appId: appId,
                timestamp: timestamp,
                nonceStr: nonceStr,
                signature: signature,
                jsApiList: jsApiList,
            });
            const share_config = {
                share: {
                    title: title, // 这是分享展示卡片的标题
                    desc: des, // 这是分享展示的摘要
                    link: url, // 这里是分享的网址
                    imgUrl: img_url, // 这里是需要展示的图标
                    success: function(rr) {
                        ` 分享成功回调 可以在这儿加 alert 打印 便于调试`
                        console.log('成功' + JSON.stringify(rr))
                    },
                    cancel: function(tt) {
                        ` 分享失败回调 可以在这儿加 alert 打印 便于调试`
                        console.log('失败' + JSON.stringify(tt));
                    }
                }
            };
            // config
            wx.ready(function() {
                wx.onMenuShareAppMessage(share_config.share); // 微信好友
                wx.onMenuShareTimeline(share_config.share); // 微信朋友圈
                wx.onMenuShareQQ(share_config.share); // QQ
                // wx.updateAppMessageShareData(window.share_config.share);
                // wx.updateTimelineShareData(window.share_config.share);
            });
            wx.error(function(res) {
                console.log('wx ---share', res)
            });
        }).catch(err => {
            console.log(err)
        })
    } else {
        console.log('不是微信访问')
    }

}