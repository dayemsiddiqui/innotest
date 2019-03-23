const ResponseService = require('./../../../services/Response')
exports.createResponse = async (req, res) => {
  const result = await ResponseService.createResponse(req.body, req.params.id)
  return res.status(200).json({ status: 'success', payload: result })
}
