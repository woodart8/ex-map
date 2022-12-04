const express = require('express')
const router = express.Router()
const { pool } = require('../db')

const keyword = {
  'culture': 0,
  'technology': 0,
  'space': 0,
  'history': 0,
  'children': 0,
  'philosophy': 0,
  'etc': 0
}

let points = []

let favorite = ''
let center = {}

const findVisitExList = async(id) => {
  const queryForVisitExList = `SELECT visit_ex FROM visit WHERE visit_user = ?`

  try {
    const connection = await pool.getConnection(async conn => conn)
    const [visitList] = await connection.query(queryForVisitExList, id)
    connection.release()
    return visitList    
  } catch(err) {
    console.log('findVisitExList() ERROR!')
    console.log(err)
  }

}

const updateKeyword = async(key) => {
  const keyArr = Object.keys(keyword)
  for(let i = 0; i < keyArr.length; i++) {
    if(keyArr[i] == key) {
      keyword[keyArr[i]] += 1
      break
    }
  }
}

const updateKeynPoint = async(visitList) => {
  const queryForKeynPoint = `SELECT ex_keyword, ex_gpsx, ex_gpsy FROM exhibition WHERE ex_id = ?`
  
  try {
    const connection = await pool.getConnection(async conn => conn)
    
    for(let i = 0; i < visitList.length; i++) {
      const [keyAndPoints] = await connection.query(queryForKeynPoint, visitList[i].visit_ex)
      await updateKeyword(keyAndPoints[0].ex_keyword)
      const tempArr = new Array(keyAndPoints[0].ex_gpsx, keyAndPoints[0].ex_gpsy)
      points.push(tempArr)
    }
    connection.release()
    return { success: true }

  } catch(err) {
    console.log('updateKeynPoint() ERROR!')
    console.log(err)
  }

}

const findFavorite = async() => {
  let arr = Object.values(keyword)
  let max = Math.max(...arr)
  const selected = Object.keys(keyword).filter((key) => {
    return keyword[key] == max;
  })
  favorite = selected
}

const findCenter = async() => {
  let area = 0;
  let cx = 0, cy = 0;

  for(let i = 0; i < points.length; i++) {
    let j = (i + 1) % points.length;

    let pt1 = points[i]
    let pt2 = points[j]

    let x1 = pt1[0]
    let x2 = pt2[0]
    let y1 = pt1[1]
    let y2 = pt2[1]

    area += x1 * y2
    area -= y1 * x2

    cx += ((x1 + x2) * ((x1 * y2) - (x2 * y1)))
    cy += ((y1 + y2) * ((x1 * y2) - (x2 * y1)))
  }

  area /= 2
  area = Math.abs(area)

  cx = cx / (6.0 * area)
  cy = cy / (6.0 * area)

  center = {
    x: Math.abs(cx),
    y: Math.abs(cy)
  }
}

const findInterestedExList = async(visitArr) => {
  const visitIDs = []
  for(key in visitArr) {
    visitIDs.push(visitArr[key].visit_ex)
  }

  const queryForExList = 'SELECT ex_id, ex_title, ex_gpsx, ex_gpsy FROM exhibition WHERE ex_keyword = ?'

  try {
    const connection = await pool.getConnection(async conn => conn)
    const [interestedExList] = await connection.query(queryForExList, favorite)

    for(let i = 0; i<interestedExList.length; i++) {
      if(visitIDs.includes(interestedExList[i].ex_id)){
        interestedExList.splice(i, 1);
        i--;
      }
    }
    connection.release()
    return interestedExList

  } catch(err) {
    console.log('findInterestedExList() ERROR!')
    console.log(err)
  }

}

const findNearest = async(list) => {
  let minDistance = Number.MAX_SAFE_INTEGER
  let title = ''

  for(let i = 0; i<list.length; i++) {
    const dist = Math.sqrt(Math.pow(center.x - list[i].ex_gpsx, 2) + Math.pow(center.y - list[i].ex_gpsy, 2))
    if(dist < minDistance){
      minDistance = dist
      title = list[i].ex_title
    }
  }

  return title
}

const recommendExhibition = async(req) => {
  const id = req.body.id

  const visitArr = await findVisitExList(id)
  await updateKeynPoint(visitArr)
  await findFavorite()
  await findCenter()
  const interested = await findInterestedExList(visitArr)
  const recommendedTitle = await findNearest(interested)
  return { ex_title: recommendedTitle, ex_keyword: favorite[0] }
}

router.post('/', async (req, res) => {
  let recommendRes = await recommendExhibition(req)
  res.send(recommendRes)
})

module.exports = router