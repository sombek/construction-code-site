import 'bootstrap/dist/js/bootstrap.bundle.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import Vue from 'vue'
import app from './app.vue'
import router from './router'
Vue.config.productionTip = false

new Vue({
    render: h => h(app),
    router
}).$mount('#app')
router.afterEach((to, from) => {
    //document.title = to.meta.title;    
});
