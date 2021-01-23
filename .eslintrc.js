module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/essential'
  ],
  // required to lint *.vue files
  plugins: [
    // 'vue',
    // 'js'
  ],
  // add your custom rules here
  rules: {
    // "off" 或 0 - 关闭规则
    // "warn" 或 1 - 开启规则，使用警告级别的错误：warn (不会导致程序退出),
    // "error" 或 2 - 开启规则，使用错误级别的错误：error (当被触发的时候，程序会退出)

    /* 规则如下 */
    "extends": "eslint:recommended",
    "no-extra-semi": 0, // 禁止不必要的分号
    "brace-style": [0, "1tbs", { "allowSingleLine": true }], // if while function 后面的{必须与if在同一行
    "linebreak-style": [0, "unix"], // 强制使用一致的换行风格
    "no-multiple-empty-lines": [0, { "max": 1 }],// 空行最多不能超过1行
    "indent": [0, 0], //缩进风格
    "strict": 0, //使用严格模式
    'eqeqeq': 0, // 严等
    'comma-dangle': 1 // 严等
  }
}
