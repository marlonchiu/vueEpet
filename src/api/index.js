
/*包含发送ajax请求的代码*/
/*定义发送axios的函数得到promise对象*/

import axios from 'axios'
export const RESULT_OK = 0

// 请求分类的接口
export function reqCategory() {
  return axios.get('/api/category')
}

// 请求首页的接口
export function reqFirstPage() {
  return axios.get('/api/firstPage')
}
