import axios from 'axios'

export default async function handler(req, res) {
  const { airport } = req.query
  const airportCode = String(airport || '').toUpperCase()

  if (!/^[A-Z0-9]{3,4}$/.test(airportCode)) {
    return res.status(400).json({ error: 'Invalid airport code' })
  }

  const url = `https://minimumconnectiontime.com/api/airport/${airportCode}`

  try {
    const response = await axios.get(url)
    res.status(200).json(response.data)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Failed to fetch minimum connection time' })
  }
}
