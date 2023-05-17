module.exports = (req, res, next) => {
  const { user_id } = req.query;
  const id = user_id ? parseInt(user_id): -1
  if(id && id === 1) {
    return res.status(401).json({ message: '权限不足' });
  }
  next();
}