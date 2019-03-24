const ResponseService = require('./../../../services/Response')
exports.createResponse = async (req, res) => {
  const result = await ResponseService.createResponse(req.body, req.params.id)
  return res.status(200).json({ status: 'success', payload: result })
}

exports.fetchResponses = async (req, res) => {
  const result = await ResponseService.fetchQuizResponse(req.params.id)
  return res.status(200).json({ status: 'success', payload: result })
}

exports.fetchAllResponses = async (req, res) => {
  const result = await ResponseService.fetchAllResponse()
  return res.status(200).json({ status: 'success', payload: result })
}
