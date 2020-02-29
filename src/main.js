import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import echarts from 'echarts'
import common from '@/assets/js/common'
import '@/assets/styles/base.css'
Vue.config.productionTip = false
Vue.prototype.$echarts = echarts
Vue.prototype.$drawCir = common.drawCir
//echarts文字大小自适应
Vue.prototype.$ConversionPx = (px) => {
    let curFontSize = parseFloat(document.documentElement.style.fontSize)
    return curFontSize*px
}

Vue.prototype.$lazy = async function(callback, ms = 500) {
    console.log('lazy before')
    await sleep(ms)
    console.log('lazy after')
    callback && callback()
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

new Vue({
    router,
    store,
    render: h => h(App),
    beforeCreate() {
        // 屏幕自适应单位设置
        (function (w) {
            let d = w.document
            let doc = d.documentElement
            let n = 4096
            let s = n / 100
            let o = 'orientationchange' in w ? 'orientationchange' : 'resize'
            let a = function () {
                let w = doc.clientWidth || 1960
                w > 4096 && (w = 4096)
                if(w>=960){
                   doc.style.fontSize ='16px'
                   console.log(doc.style.fontSize);
                }else{
                   doc.style.fontSize = w / s + 'px'
                   console.log('sssssss'+doc.style.fontSize);
                }
                
            }
            d.addEventListener && (d.addEventListener(o, a, !1), d.addEventListener('DOMContentLoaded', a, !1))
        })(window)
    }
}).$mount('#app')