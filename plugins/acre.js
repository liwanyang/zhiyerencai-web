import Vue from 'vue'
// import acre from '~/components/acre-block'
// import navbar from '~/components/navbar'
// import foote from '~/components/foote'
import filters from '~/filters/index.js'
import VueClipboard from 'vue-clipboard2'
import "babel-polyfill";
import {
  Icon,
  Row,
  Col,
  Button,
  Select,
  Option,
  Input,
  Form,
  Message,
  FormItem,
  Dialog,
  Loading,
  Tooltip,
  Dropdown,
  DropdownItem,
  DropdownMenu

} from 'element-ui'
Vue.use(Icon);
Vue.use(Row);
Vue.use(Col);
Vue.use(Button);
Vue.use(Select);
Vue.use(Option);
Vue.use(Input);
Vue.use(Form);

Vue.use(FormItem);
Vue.use(Dialog);
Vue.use(Loading);
Vue.use(Tooltip);
Vue.use(Dropdown);
Vue.use(DropdownItem);
Vue.use(DropdownMenu);

// 拷贝插件
Vue.use(VueClipboard)
// Vue.use(ElementUI)
// 全局组件
// Vue.component("acre", acre)
// Vue.component("nav-bar", navbar)
Vue.prototype.$message = Message;
// Vue.component("foote", foote)


// 全局过滤
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})
// 全局监听
const bus = new Vue()
Vue.prototype.$bus = bus;
// 设置全局变量判断是否为移动端；
console.log("process.browser::", process.browser);
if (process.browser){
  Vue.prototype.IS_MOBILE = (function () {
    if (window.navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)) {
      return true; // 移动端
    } else {
      return false; // PC端
    }
  })();
}
