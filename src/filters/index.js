/*定义时间的过滤器 date-fns*/
import Vue from 'vue'
import {format} from 'date-fns/format'

Vue.filter('date-string', function (value, format) {
  return format(value, format || 'HH:mm:ss')
})
