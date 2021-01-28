module.exports = (err, req, res, next) => {
  console.log('in heree');
  res.status(err.status || 500).json({ message: err.message });
};
