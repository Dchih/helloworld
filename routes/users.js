var express = require('express');
var router = express.Router();
const path = require('path');
const fs = require('fs');
const User = require('../models/animals').User;
const author = require('../models/business/author');
const book = require('../models/business/book');
const bookInstance = require('../models/business/bookInstance');
const gener = require('../models/business/gener');
const authorizations = require('../auth/authorizations');

router.use(authorizations);
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/square', (req, res, next) => {
  const user = {
    user_id: req.query.user_id,
    age: null,
    name: req.query.name,
    code: 1,
    msg: 'string',
  }
  const users = [];
  users.push(user);
  res.send(users);
})

router.get('/file', (req, res, next) => {
  const filePath = path.join(__dirname, '../files/process.png');
  fs.readFile(filePath, (err, data) => {
    if(err) {
      console.log('文件读取失败');
      res.status(500).send('文件读取失败1');
      return
    }
    res.send(data);
  })
})

router.get('/db', async (req, res, next) => {
  const { user_id } = req.query;
  try {
    const users = await User.find({id: user_id});
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({error: error.message})
  }
})

router.post('/db/:id', async(req, res, next) => {
  const { id } = req.params;
  if(!id) {
    res.status(404).json({message: 'id 缺失, 请检查参数'});
    return
  }
  const data = new User({
    id,
    ...req.body,
  })
  try {
    const result = await data.save();
    res.status(201).json({message: '数据新增成功', code: 1, result: result})
  } catch(err) {
    res.status(500).json({message: `数据库写入错误`, code: 0});
  }
})

module.exports = router;
