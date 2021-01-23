// 线上环境
const hostname = 'api.bambooreading.com/v1/'
// const hostport = '80'

// export const server = 'http://' + hostname + ':' + hostport
export const server = 'https://' + hostname

// console.info('服务器地址:', server)

export const user = {
  // 区号api
  sms_code_list: 'user/sms_code_list',
  // 登录
  user_login: 'user/login',
  // 手机验证码
  phone_code: 'user/send_phone_code',
  // 邮箱验证码
  email_code: 'user/send_email_code',
  // 手机注册
  phone_register: 'user/phone_register',
  // 邮箱注册
  email_register: 'user/register',
  // 手机重置
  phone_reset: 'user/phone_reset_password',
  // 邮箱重置
  email_reset: 'user/reset_password',
  // 告诉后台成功
  add_activity_order: 'pay/add_activity_order',
  // 获取等级列表；
  get_grade_list: "grade/list ",
  // 用户是否是会员；
  get_vip: "user/is_vip",
  // 获取绘本列表；
  get_book_list: "book/list",
  // 获取绘本详情；
  get_book_detail: "book/book_pages",
  // pc下单(获取小程序二维码)；
  get_pc_order: "wechat/subscribe_pc",
  // 订单支付结果查询；
  get_pay_result: "wechat/pay_result",
}
