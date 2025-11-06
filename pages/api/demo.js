export default function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, company, message } = req.body || {}
    if (!name || !email) return res.status(400).json({ ok: false, message: 'Faltan campos' })
    console.log('Lead demo:', { name, email, company })
    return res.status(200).json({ ok: true })
  }
  res.status(405).end()
}
