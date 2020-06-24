const cheerio = require('cheerio2')
const fs = require('fs')
const path = require('path')
const superagent = require('superagent');
const url = `https://ncov.dxy.cn/ncovh5/view/pneumonia`
superagent
  .get(url)
  .then(res => {
    const $ = cheerio.load(res.text) 
    var $getListByCountryTypeService1 = $('#getListByCountryTypeService1').html()
    var $getAreaStat = $('#getAreaStat').html()
    var $getStatisticsService = $('#getStatisticsService').html()
 
    var dataObj = {}
    eval($getListByCountryTypeService1.replace(/window/g, 'dataObj'))
    eval($getAreaStat.replace(/window/g, 'dataObj'))
    eval($getStatisticsService.replace(/window/g, 'dataObj'))
  
    fs.writeFile(path.join(__dirname, 'data.json'), JSON.stringify(dataObj), err => {
      if (err) throw err
      console.log('数据写入成功')
    })
  })
  .catch(err => {
    throw err
  })