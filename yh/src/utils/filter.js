// 定义全局指令

// 金额显示，由单位 分 转换成 ￥0.00 元
const formatPrice = value => {
    let price = parseInt(value) || 0
    return (price / 100).toFixed(2)
}

// 手机号码隐藏部分
const formatPhone = phone => {
    return phone.replace(/^(\d{3})\d{4}(\d{4})$/, '$1****$2')
}

export default {
    formatPrice,
    formatPhone
}