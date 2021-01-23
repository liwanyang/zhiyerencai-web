import Vue from 'vue'
// 注册全局过滤器

const formatThousand = function (str) {
  let re = /\d{1,3}(?=(\d{3})+$)/g
  let n1 = n.replace(/^(\d+)((\.\d+)?)$/, function (s, s1, s2) {
    return s1.replace(re, '$&,') + s2
  })
  return n1
}
const trim = function (str) {
  return str.replace(/(^\s*)(\s*$)/g, '')
}

export default {
  trim,
  formatThousand
}


