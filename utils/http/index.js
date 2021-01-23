import XHR from './xhr.js'
import { server } from '@/constant/api.js'
import * as TYPE from '~/utils/getInfos.js'

function json_to_get(str) {
  var sstr = JSON.stringify(str)
  sstr = sstr.replace(/\t/g, "");
  sstr = sstr.replace(/\"/g, "").replace("{", "").replace("}", "")
  sstr = sstr.replace(",", "&").replace(":", "=");
  sstr = sstr.replace(/\"/g, "").replace(/{/g, "").replace(/}/g, "")
  sstr = sstr.replace(/,/g, "&").replace(/:/g, "=");
  return sstr
}
function get_to_json(sstr) {
  sstr = sstr.replace(/&/g, '","').replace(/=/g, '":"');
  sstr = '{"' + sstr + '"}';
  return sstr
}

const http = {
  async post(url, params) {
    // console.log('请求地址：', url)
    // console.log('请求参数：', params)
    try {
      // TYPE.getId('loding').style.display = 'block'
      const res = await XHR.post(url, params)
      // TYPE.getId('loding').style.display = 'none'
      const data = res.data
      const tranCode = data.code
      const tranBody = data.data
      if (tranCode === 1) {
        // console.info('交易成功：', tranBody)
        return {
          code: tranCode,
          data: tranBody,
          msg: data.msg
        }
      } else if (tranCode === 0) {
        // console.info('交易失败', tranBody)
        return {
          code: tranCode,
          msg: data.msg
        }
      }
    } catch (error) {
      // TYPE.getId('loding').style.display = 'none'
      console.error('请求异常：', error)
    }
  },

  async get(url, data) {
    // console.log('请求地址：', url)
    // console.log('请求参数：', data)
    let params = json_to_get(data)
    let getURL = server + url + '?' + params
    try {
      // TYPE.getId('loding').style.display = 'block'
      const res = await XHR.get(getURL)
      // TYPE.getId('loding').style.display = 'none'
      const data = res.data
      const tranCode = data.status
      const tranBody = data.data
      if (tranCode === 1) {
        // console.info('交易成功：', tranBody)
        return {
          code: '1',
          data: tranBody
        }
      } else if (tranCode === 0) {
        console.info('交易失败')
        return {
          code: '0'
          // data: tranBody
        }
      }
    } catch (error) {
      console.error('请求异常：', error)
      // TYPE.getId('loding').style.display = 'none'
    }
  }
}

export default http
