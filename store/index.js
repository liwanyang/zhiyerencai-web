import VueI18n from "vue-i18n"

export const state = () => ({
  locales: ['zh', 'en'],
  locale: 'zh',
  device: 'pc', // pc m
  screenWidth: 0,
  userLogin: '登录/注册',
  bookList: {},
  bookItem: {},
  isAutoLogin: false
})

export const actions = {}

export const mutations = {
  // 设置语言
  SET_LANG(state, locale) {
    if (state.locales.indexOf(locale) !== -1) {
      state.locale = locale
    }
  },
  // 设备
  SET_DEVICE(state, dev) {
    state.device = dev
  },
  // 设备宽度
  SET_SCREENWIDTH(state, w) {
    state.screenWidth = w
  },
  SET_USERLOGIN(state, name) {
    state.userLogin = name
  },
  CLEAR_USERLOGIN(state) {
    state.userLogin = "登录/注册";
  },
  SET_AUTO_LOGIN(state) {
   state.isAutoLogin = true;
  },
  SET_BOOK_LIST(state, data) {
    const {
      level,
      book
    } = data;
    if (state.bookList[level]) {
      state.bookList[level] = state.bookList[level].concat(book);
    } else {
      state.bookList[level] = book;
    }
    
  },
  RESTE_BOOK_LIST(state) {
    state.bookList = [];
  },
  UPDATE_BOOK_LIST(state, data) {
    state.bookList = data;
  },
  SET_BOOK_ITEM(state,data) {
    state.bookItem = data;
  },
  RESET_BOOK_ITEM(state) {
    state.bookItem = {};
  }
}
