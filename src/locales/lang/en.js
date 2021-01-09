import { mergeLangs } from 'm2-vue'
import { vant, m2 } from 'plugins'

export default mergeLangs({
  alias: 'en-us',
  app: {
    tabs: {
      home: 'Home',
      profile: 'Profile'
    },
    message: {
      hello: 'Hello, M2 MobUI',
      welcome: 'Welcome to build your first app',
      click: 'Click here',
      learn: 'learn more'
    },
    lang: {
      zh: 'Chinese',
      en: 'English'
    },
    theme: {
      blue: 'Sky Blue',
      green: 'Grass Green'
    },
    button: {
      lang: 'Switch Language',
      theme: 'Switch Theme'
    }
  }
  // 如果需要第三方站点配置多语言时才开启
  // ...window.M2APP_HOME
}, vant.langs.en, m2.langs.en)
