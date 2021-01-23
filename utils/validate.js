export function validateEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(email)
}
/* 大小写字母和数字*/
export function validatAlphabets(str) {
  const reg = /^(?:(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])).{8,15}$/
  return reg.test(str)
}

