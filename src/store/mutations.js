import {RECEIVE_CATEGORY, RECEIVE_FIRSTPAGE} from './mutations_types'
export default {
  [RECEIVE_CATEGORY](state, {category}){
    state.category = category
  },
  [RECEIVE_FIRSTPAGE](state, {firstPage}){
    state.firstPage = firstPage
  }
}
