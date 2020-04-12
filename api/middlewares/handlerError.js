export default function (err, req, res, next) {
  if (err) {
    return res.status(500).json({ error: 'Erro interno no servidor' })
  }
}
