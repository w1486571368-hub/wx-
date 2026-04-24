// 云函数入口文件
const cloud = require('wx-server-sdk')
cloud.init({ env: cloud.DYNAMIC_CURRENT_ENV })
const db = cloud.database()

// 云函数入口函数
exports.main = async (event, context) => {
  try {
    // 不做任何筛选，直接返回所有菜品
    const res = await db.collection('goods').get()
    return {
      code: 0,
      data: res.data
    }
  } catch (e) {
    console.error(e)
    return {
      code: -1,
      msg: '获取失败'
    }
  }
}