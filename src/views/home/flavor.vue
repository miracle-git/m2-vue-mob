<template>
  <div class="home-flavor">
    <p class="btn-group">
      <van-dropdown-menu :active-color="activeColor" class="dropdown-menu">
        <van-dropdown-item v-model="lang" :title="$t('app.button.lang')" :options="langs" @change="handleSwitchLang"/>
        <van-dropdown-item v-model="theme" :title="$t('app.button.theme')" :options="themes" @change="handleSwitchTheme"/>
      </van-dropdown-menu>
    </p>
    <p class="detail">
      <a href="https://github.com/miracle-git/m2" target="_blank">
        {{$t('app.message.click')}}
      </a>
      {{$t('app.message.learn')}}
    </p>
  </div>
</template>

<script>
  import { changeLang, changeTheme } from 'm2-vue'

  export default {
    name: 'home-flavor',
    data() {
      return {
        lang: '',
        theme: '',
        activeColor: '#3464e0',
        langs: [
          { text: this.$t('app.lang.zh'), value: 'zh-cn' },
          { text: this.$t('app.lang.en'), value: 'en-us' }
        ],
        themes: [
          { text: this.$t('app.theme.blue'), value: 'skyblue' },
          { text: this.$t('app.theme.green'), value: 'grassgreen' }
        ]
      }
    },
    methods: {
      // 切换语言
      handleSwitchLang(lang) {
        // 如果需要第三方站点配置多语言时才开启
        // changeLang(this, lang, 'M2APP')
        changeLang(this, lang)
      },
      // 切换主题
      handleSwitchTheme(theme) {
        this.activeColor = theme === 'skyblue' ? '#3464e0' : '#009688'
        changeTheme(this, theme)
      }
    }
  }
</script>
