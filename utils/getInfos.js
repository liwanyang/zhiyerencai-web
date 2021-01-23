export const getId = (selector) => {
  return document.getElementById(selector)
}
export const getTag = (tagName) => {
  return document.getElementsByTagName(tagName)
}
export const getSelector = (Selector) => {
  return document.querySelector(Selector)
}

export const client = () => {
  return {
    width: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth || 0,
    height: window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight || 0
  }
}
export const getImgBase64 = (url, callback, outputFormat) => {
  var canvas = document.createElement('CANVAS')
  ctx = canvas.getContext('2d')
  img = new Image();
  img.crossOrigin = 'Anonymous'
  img.onload = function(){
    canvas.height = img.height
    canvas.width = img.width
    ctx.drawImage(img,0,0)
    var dataURL = canvas.toDataURL(outputFormat || 'image/png');
    callback.call(this, dataURL);
    canvas = null;
  };
  img.src = url;
}
// cookie 操作
//设置cookie
export const setCookie = (NameOfCookie, value, expiredays) => {
  var ExpireDate = new Date()
  ExpireDate.setTime(ExpireDate.getTime() + (expiredays * 24 * 3600 * 1000))
  // document.cookie = NameOfCookie + "=" + escape(value) + ((expiredays === null) ? "": "; expires=" + ExpireDate.toGMTString())
  document.cookie = NameOfCookie + "=" + value + ((expiredays === null) ? "": "; expires=" + ExpireDate.toGMTString())
}
//获取cookie值
export const getCookie = (NameOfCookie) => {
  if (document.cookie.length > 0) {
    var begin = document.cookie.indexOf(NameOfCookie + "=")
    if (begin !== -1) {
      begin += NameOfCookie.length + 1
      var end = document.cookie.indexOf(";", begin)
      if (end === -1) end = document.cookie.length
      return unescape(document.cookie.substring(begin, end))
    }
  }
  return null
}
//删除cookie
export const delCookie = (NameOfCookie) => {
  if (getCookie(NameOfCookie)) {
    document.cookie = NameOfCookie + "=" + "; expires=Thu, 01-Jan-70 00:00:01 GMT"
  }
}
