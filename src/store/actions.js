import {reqCategory, reqFirstPage,RESULT_OK} from '../api'
import {RECEIVE_CATEGORY, RECEIVE_FIRSTPAGE} from './mutations_types'

// 暴露获取数据的方法
export default {
  // 获取分类信息的方法
  getCategory({commit}){
    // 发送ajax请求
    reqCategory().then(response => {
      const result = response.data
      if(result.code === RESULT_OK){
        const category = result.data
        // 提交mutation请求（数据必须用一个大括号包起来）
        commit(RECEIVE_CATEGORY, {category})
      }
    })
  },

  // 获取首页信息的方法
  getFirstPage({commit}){
    // 发送ajax请求
    reqFirstPage().then(response => {
      const result = response.data
      if(result.code === RESULT_OK){
        const firstPage = result.data
        // 提交mutation请求
        commit(RECEIVE_FIRSTPAGE, {firstPage})
      }
    })
  },
}
