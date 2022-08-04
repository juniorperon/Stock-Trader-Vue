import Vue from 'vue'
import Axios from 'axios'

Vue.use({
    install(Vue) {
        Vue.prototype.$http = Axios.create({
            baseURL: 'https://stock-trader-jr-default-rtdb.firebaseio.com/'
        })
    }
})