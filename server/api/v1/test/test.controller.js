exports.index = function (req, res) {
  return res.status(200).json({ status: 'success', payload: 'Hello World' })
}