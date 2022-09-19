import Vue from 'vue'
import Clipboard from 'clipboard'
import { resolveObject } from 'url';

// 文本复制
// function copySuccess() {
//     Vue.prototype.$message({
//         type: 'success',
//         message: '复制文本成功',
//         duration: 1500
//     })
// }

// function copyFail() {
//     Vue.prototype.$message({
//         message: '该浏览器不支持自动复制',
//         type: 'warning'
//     })
// }

export default function copyText(text, e) {

    return new Promise((resolve, reject) => {
        const clipboard = new Clipboard(e.target, {
            text: () => `￥${text}￥`
        })
        clipboard.on('success', () => {
            // 释放内存
            clipboard.destroy()
            resolve()
        })
        clipboard.on('error', () => {
                // 不支持复制
                //clipboardError()
                // 释放内存
                clipboard.destroy()
                reject()
            })
            // 解决第一次点击不生效的问题，如果没有，第一次点击会不生效
        clipboard.onClick(e)
    })

}