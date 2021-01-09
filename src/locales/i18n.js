import { getI18nLocale } from 'm2-vue'
import { vant, m2 } from 'plugins'
import lang from './lang'

export default getI18nLocale(lang, vant.locale, m2.locale)
