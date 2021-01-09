import {
  RouterView, Container, SvgIcon, Link, Loading, Toast
} from 'm2-mobui'
import locale from 'm2-mobui/lib/locale'
import zh from 'm2-mobui/lib/locale/lang/zh-CN'
import en from 'm2-mobui/lib/locale/lang/en-US'

export default {
  components: [
    RouterView,
    Container,
    SvgIcon,
    Link
  ],
  install(Vue) {
    Vue.prototype.$m2 = {}
    Vue.prototype.$m2.loading = Loading
    Vue.prototype.$m2.loading.hide = Loading.hide
    Vue.prototype.$m2.toast = Toast
  },
  locale,
  langs: {
    zh,
    en
  }
}
