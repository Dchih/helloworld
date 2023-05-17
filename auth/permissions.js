const User = require('../models/auth/user');
const Role = require('../models/auth/role');
const Permission = require('../models/auth/permission');

/**
 * 权限检查逻辑：
 * 1，
 * @param {Request} req 
 * @param {Response} res 
 * @param {Function} next 
 */
module.exports = async (req, res, next) => {
  const { user_id } = req.query;
  if(!user_id) {
    return res.status(403).json({message: '参数错误： id必传'});
  }
  try {
    const users = await User.find({});
    
  } catch(error) {

  }
}