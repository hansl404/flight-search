import express from 'express'
import axios from 'axios'
import cors from 'cors'

const app = express()
const port = 3000

app.use(express.json())
app.use(cors())


app.get('/api/search', async (req,res) => {
    const {start,end,gl,hl,currency,date,type,sort_by} = req.query
    console.log(start)

    const apiKey = 'Please add your own API key from https://serpapi.com/'
    
    const url = `https://serpapi.com/search.json?engine=google_flights&departure_id=${start}&arrival_id=${end}&gl=${gl}&hl=${hl}&currency=${currency}&outbound_date=${date}&type=${type}&sort_by=${sort_by}&api_key=${apiKey}`
    console.log(url)
    
    try {
        const response = await axios.get(url)
        res.json(response.data)
    } catch (error) {
        console.error(error)
        res.status(500).json({error: 'Failed to fetch data'})
    }
})

// start the server
app.listen(port, () => {
    console.log(`server running port ${port}`)
})