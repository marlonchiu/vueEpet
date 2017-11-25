// 使用mockjs来模拟地区数据接口
import Mock from 'mockjs'
import chinaArea from './china_area.json'
import petData from './pet_data.json'

Mock.mock('/api/province', {data: chinaArea.provinces})
Mock.mock('/api/cities', {data: chinaArea.cities})
Mock.mock('/api/counties', {data: chinaArea.counties})

// 映射数据接口
Mock.mock('/api/firstPage', {
  code: 0,
  data: petData.firstPage
})
Mock.mock('/api/category', {
  code: 0,
  data: petData.category
})
