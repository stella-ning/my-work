//格式化日期
Date.prototype.Format = function(format) {
    format = format == null ? "yyyy-MM-dd hh:mm:ss" : format;
    if (this == 'Invalid Date' || this.getTime() < 1) {
        return "无";
    }
    var o = {
        "M+": this.getMonth() + 1,
        "d+": this.getDate(),
        "h+": this.getHours(),
        "m+": this.getMinutes(),
        "s+": this.getSeconds(),
        "q+": Math.floor((this.getMonth() + 3) / 3),
        "S": this.getMilliseconds()
    }
    if (/(y+)/.test(format)) {
        format = format.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    }
    // $.each((o), function(k) {
    // 	if(new RegExp("(" + k + ")").test(format)) {
    // 		format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
    // 	}
    // });
    for (var k in o) {
        if (new RegExp("(" + k + ")").test(format)) {
            format = format.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
        }
    }
    return format;
};

//微信兼容代码
global.WxCompat = {
    // 解决微信document.title无效的问题
    wxSetTitle: function(title) {
        document.title = title;
        var mobile = navigator.userAgent.toLowerCase();
        if (/iphone|ipad|ipod/.test(mobile)) {
            var iframe = document.createElement('iframe');
            iframe.style.visibility = 'hidden';
            //iframe.setAttribute('src', 'loading.png');
            var iframeCallback = function() {
                setTimeout(function() {
                    iframe.removeEventListener('load', iframeCallback);
                    document.body.removeChild(iframe);
                }, 0);
            };
            iframe.addEventListener('load', iframeCallback);
            document.body.appendChild(iframe);
        }
    },
    //判断软件来源
    isWeixinOrAlipay: function() {
        var ua = window.navigator.userAgent.toLowerCase();
        //判断是不是微信
        if (ua.match(/MicroMessenger/i) == 'micromessenger') {
            return "WeiXIN";
        }
        //判断是不是支付宝
        if (ua.match(/AlipayClient/i) == 'alipayclient') {
            return "Alipay";
        }
        //哪个都不是
        return false;
    },
    //是否微信打开
    isWeixinClient: function() {
        var ua = window.navigator.userAgent.toLowerCase();
        //判断是不是微信
        if (ua.match(/MicroMessenger/i) == 'micromessenger') {
            return true;
        }
        //哪个都不是
        return false;
    },

    //防止微信的回弹
    antiSroll(isAnti) {
        //弹出选择框的时候，防止微信上拉的回弹
        var handler = function(e) {
            if (isAnti) {
                e.preventDefault(); //阻止默认的处理方式(阻止下拉滑动的效果)
            }
        }
        document.body.addEventListener('touchmove', handler, { passive: false });
    }
};

//判断是用户端
global.getWebClient = function() {
    var u = navigator.userAgent;
    var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
    var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
    if (isAndroid) return 'android';
    if (isiOS) return 'ios';
    return 'web';
}

global.isAndroidClient = function() {
    var u = navigator.userAgent;
    var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
    var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
    if (isAndroid) return true;
    return false;
}
global.isIOSClient = function() {
    var u = navigator.userAgent;
    var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
    var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
    if (isiOS) return true;
    return false;
}

//存在hash的页面，用这个方法移除最后一个元素的'/'
global.getUrlArgs = function(key) {
    key = key || 'channel'
    var value = getQueryStringArgs()[key] || '';
    return value.replace('/', '');
}

//获得url字符串参数
global.getQueryStringArgs = function(url) {
        // 取得查询字符串并去掉开头的问号
        var qs = location.search.length > 0 ? location.search.substring(1) : "";
        if (!isNull(url)) {
            qs = url.substring(url.indexOf('?') + '?'.length);
        }
        var args = {};
        // 取得每一项
        var items = qs.length ? qs.split("&") : [];
        var item = null,
            name = null,
            value = null;
        // 逐个将每一项新增到args对象中
        for (var i = 0; i < items.length; i++) {
            item = items[i].split("=");
            name = decodeURIComponent(item[0]);
            value = decodeURIComponent(item[1]);
            if (name.length) {
                args[name] = value;
            }
        }
        return args;
    }
    //获取url参数
global.getUrlParam = function(paramName) {
        var reg = new RegExp("(^|&)" + paramName + "=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        if (r != null) return unescape(r[2]);
        return null;
    }
    //JS数字位数不够，前面位数补零
global.formatZero = function(num, len) {
    if (String(num).length > len) return num;
    return (Array(len).join(0) + num).slice(-len);
}