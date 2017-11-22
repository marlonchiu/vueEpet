// 使用mockjs来模拟地区数据接口
import Mock from 'mockjs'
import chinaArea from './china_area.json'

Mock.mock('/api/province', {data:chinaArea.provinces})
Mock.mock('/api/cities', {data:chinaArea.cities})
Mock.mock('/api/counties', {data:chinaArea.counties})
