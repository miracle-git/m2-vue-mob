import {
  Button, DropdownMenu, DropdownItem, Tabbar, TabbarItem, NumberKeyboard, CellGroup, Cell
} from 'vant'
import locale from 'm2-mobui/lib/locale'
import zh from 'vant/lib/locale/lang/zh-CN'
import en from 'vant/lib/locale/lang/en-US'

export default {
  components: [
    Button,
    DropdownMenu,
    DropdownItem,
    Tabbar,
    TabbarItem,
    NumberKeyboard,
    CellGroup,
    Cell
  ],
  locale,
  langs: {
    zh,
    en
  }
}
