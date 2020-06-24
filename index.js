
const express = require('express')
const fs = require('fs')
const path = require('path')

const app = express()

app.all('*',function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.get('/api/data', (req, res) => {

  fs.readFile(path.join(__dirname, 'data.json'), 'utf8', (err, data) => {
    if (err) throw err
    console.log(data)
    res.send(data)
  })
})
app.listen(8066, () => {
  console.log(`当前服务器启动成功 http://127.0.0.1:8066/api/data`)
})
