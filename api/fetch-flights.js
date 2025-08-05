import axios from 'axios'

export default async function handler(req, res) {
  const { start, end, date, gl, hl, currency, type, sort_by, include_airlines } = req.query;
  const apiKey = process.env.apiKey;

  if (!apiKey) {
    return res.status(500).json({ error: "Missing SERPAPI_KEY" });
  }

  const url = `https://serpapi.com/search.json?engine=google_flights&departure_id=${start}&arrival_id=${end}&gl=${gl}&hl=${hl}&currency=${currency}&outbound_date=${date}&type=${type}&sort_by=${sort_by}&include_airlines=${include_airlines}&api_key=${apiKey}`;

  try {
    const response = await axios.get(url);
    res.status(200).json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch flights" });
  }
}