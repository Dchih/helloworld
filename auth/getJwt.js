const jwt = require('jsonwebtoken');

const SECRET_KEY = 'Aa.123456';

module.exports = async (req, res, next) => {
  const { user_name, password } = req.params;
  if(!user_name || !password) {
    res.status(401).json({message: '请填写用户名'})
  }
}
