import axios from 'axios'

export default async function handler(req, res) {
  const { start, end, date } = req.query;
  const apiKey = process.env.SERPAPI_KEY;

  if (!apiKey) {
    return res.status(500).json({ error: "Missing SERPAPI_KEY" });
  }

  const url = `https://serpapi.com/search.json?engine=google_flights&departure_id=${start}&arrival_id=${end}&outbound_date=${date}&api_key=${apiKey}`;

  try {
    const response = await axios.get(url);
    res.status(200).json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch flights" });
  }
}