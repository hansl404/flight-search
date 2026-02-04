// reference: https://serpapi.com/google-flights-api

// Data stuff and customization
const data = {
    cpp: {"KE":1.7,"UA":1.3,"AS":1.3,"AA":1.4,"B6":1.3,"CX":1.3},
    korean_miles: {"JFK":6865,"DFW":6824,"SEA":5196,"LAX":5973,"ORD":6538,"BOS":6808,"ATL":7132,"HKG":1295,"TPE":914,"PVG":525,"SIN":2883,"NRT":758,"HND":758,"ITM":525,"KIX":525,"SZX":1281,"CAN":1269},
    cathay_miles: {"CAN":300,"TPE":300,"CKG":300,"SZX":300,"ICN":800,"HND":800,"NRT":800,"SIN":800,"KUL":800,"PVG":800,"SHA":800,"PKX":800,"PEK":800,"KIX":800,"LAX":2500,"SFO":2500,"SEA":2500,"ORD":3000,"IAD":3000,"JFK":3000,"DFW":3000,"BOS":3000},
    cashback: 3,  // percent cash back from credit card
    include_airlines: "KE,OZ,YP,DL,UA,AA,AS,HA,WN,AC,BR,CI,JX,CX,JL,NH,VN,SQ,TR,MM,TW,7C,LJ,B6,NK,F9"
}

// let result = mock  // store result of API call here once to minimize calls
let result = {}

const get_curr_loc_btn = document.getElementById('get-curr-loc-btn')
const start_input = document.getElementById('start')
const end_input = document.getElementById('end')
const date_input = document.getElementById('date')
const search_btn = document.getElementById('search-btn')
const results = document.getElementById('results')
const airlines = document.getElementById('airlines')
const airline_buttons = document.querySelectorAll('#airlines button')
const bigbutton = document.getElementById('bigbutton')
const bigbuttonmsg = document.getElementById('bigbuttonmsg')

const highlighted = {}
airline_buttons.forEach(button => {
    highlighted[button.id] = true
    button.addEventListener('click', () => {
        if (button.id == 'SKYTEAM' || button.id == 'STAR_ALLIANCE' || button.id == 'ONEWORLD' || button.id == 'NONALLIANCE') {
            refreshAllianceFilter(button.id)
        } else {
            highlighted[button.id] = !highlighted[button.id]
            refreshFilter(button.id)
        }
    })
})

// Helper functions
const basefare = (price) => {
    let security = 5.6
    let flight_segment = 5.3
    let pec = 4.5
    let tax = (price - security - flight_segment - pec) * 0.075
    return price - tax - security - flight_segment - pec
}

const foundCurrentLocation = position => {
    console.log(position.coords.latitude)
    console.log(position.coords.longitude)
}

const notFoundCurrentLocation = () => {
    console.log('Failed to find current location')
}

get_curr_loc_btn.onclick = () => {
    navigator.geolocation.getCurrentPosition(foundCurrentLocation, notFoundCurrentLocation)
}

const getDist = async(to,from) => {
    const url = `https://airportgap.com/api/airports/distance?from=${from}&to=${to}`
    try {
        const response = await fetch(url, {method: 'POST'})
        const data = await response.json()
        return Math.floor(data.data.attributes.miles)
    } catch (error) {
        console.log(error)
    }
}

const refreshFilter = (airline) => {
    let toggled_airline = document.getElementById(airline)
    if (highlighted[airline]) {
        toggled_airline.classList.remove('airline-filter-out')
    } else {
        toggled_airline.classList.add('airline-filter-out')
    }
    let exclude = Object.keys(highlighted).filter(key => !highlighted[key])

    const filteredData = {
        ...result,
        other_flights: result.other_flights.filter(flightGroup => 
            !flightGroup.flights.some(flight => 
                exclude.some(prefix => flight.flight_number.startsWith(prefix))
            )
        )
    }
    generateList(filteredData)
}

const refreshAllianceFilter = (alliance) => {
    let alliance_airlines = document.getElementById(`${alliance}-row`).children
    if (highlighted[alliance]) { // currently on, toggle off
        for (let airline of alliance_airlines) {  
            highlighted[airline.id] = false
            airline.classList.add('airline-filter-out')
        }
    } else {  // currently off, toggle on
        for (let airline of alliance_airlines) {
            highlighted[airline.id] = true
            airline.classList.remove('airline-filter-out')
        }
    }
    let exclude = Object.keys(highlighted).filter(key => !highlighted[key])
    const filteredData = {
        ...result,
        other_flights: result.other_flights.filter(flightGroup => 
            !flightGroup.flights.some(flight => 
                exclude.some(prefix => flight.flight_number.startsWith(prefix))
            )
        )
    }
    generateList(filteredData)
}

// calculate points
function pointData(airline,start,end,price,miles=0) {
    let points = 0  // points earned (not counting which airline yet)
    let points_val = 0
    if (airline == 'Korean Air' || airline == 'Asiana Airlines') {  // Asiana exists until merger
        if (start != 'ICN' && end != 'ICN') {  // layover in Seoul
            points = data.korean_miles[start] + data.korean_miles[end]
        } else if (end == 'ICN' && start in data.korean_miles) {   // ? -> ICN
            points = data.korean_miles[start]
        } else if (start == 'ICN' && end in data.korean_miles) {  // ICN -> ?
            points = data.korean_miles[end]
        } else {
            points = 0
        }
        points_val = points * data.cpp.KE
    } else if (airline == 'United') {
        points = basefare(price) * 5
        points_val = points * data.cpp.UA
    } else if (airline == 'American') {
        points = basefare(price) * 2  // assuming basic economy
        points_val = points * data.cpp.AA
    } else if (airline == 'Air Canada') {
        points = miles * 0.5
        points_val = points * data.cpp.UA
    } else if (airline == 'Alaska') {
        points = miles * 0.3
        points_val = points * data.cpp.AS
    } else if (airline == 'JAL') {
        points = miles * 0.3
        points_val = points * data.cpp.AA
    } else if (airline == 'Cathay Pacific') {
        if (start != 'HKG' && end != 'HKG') {  // layover in HK
            points = data.cathay_miles[start] + data.cathay_miles[end]
        } else if (end == 'HKG' && start in data.cathay_miles) {   // ? -> HKG
            points = data.cathay_miles[start]
        } else if (start == 'HKG' && end in data.cathay_miles) {  // HKG -> ?
            points = data.cathay_miles[end]
        } else {
            points = 0
        }
        points_val = points * data.cpp.CX
    }
    else {
        return {points:0,points_val:0}
    }
    return {points, points_val}
}

// create the popup
async function openPopup(flight) {

    // Create overlay (fullscreen background)
    const overlay = document.createElement("div");
    overlay.classList.add("popup-overlay");

    // Create popup box
    const popupBox = document.createElement("div");

    // top part
    const title = document.createElement('div')
    title.classList.add('title')
    const itinerary = document.createElement('div')
    itinerary.classList.add('itinerary')
    const stats = document.createElement('div')

    // populate data
    const logo = document.createElement('img')
    logo.src = flight.airline_logo
    logo.classList.add('flight-logo')
    let airline_txt = flight.flights[0].departure_airport.time.split(" ")[0]  // "3/15/2024 - American Airlines, American Airlines
    let layovers = null
    if (flight.layovers) {
        layovers = flight.layovers
    }
    let dist_flown = 0

    let stats_title = document.createElement('div')
    let stats_points = document.createElement('div')
    let stats_points_value = document.createElement('div')
    let stats_true_cost = document.createElement('div')
    let stats_cost_per_hr = document.createElement('div')
    let stats_dist_flown = document.createElement('div')

    for (const [i,leg] of flight.flights.entries()) {
        airline_txt += ' ' + leg.airline + ' '
        flight_stats = {}
        let itineraryItem = document.createElement('div')
        itineraryItem.classList.add('itinerary-item')
        flight_stats.airline = leg.airline
        flight_stats.start_airport = leg.departure_airport.id
        flight_stats.end_airport = leg.arrival_airport.id
        flight_stats.depart_time = leg.departure_airport.time.split(" ")[1]
        flight_stats.arrive_time = leg.arrival_airport.time.split(" ")[1]
        flight_stats.duration = Math.floor(leg.duration/60) + ' hours ' + leg.duration % 60 + ' min'
        flight_stats.logo = leg.airline_logo
        let layoverString = '' 
        if (layovers && i < layovers.length) {
            let layoverAirport = layovers[i].name
            let layoverTime = Math.floor(layovers[i].duration/60) + ' hours ' + layovers[i].duration%60 + ' min'
            layoverString = `----- ${layoverTime} layover in ${layoverAirport} ${layovers[i].overnight ? '(⚠️ Overnight)' : ''} -----`
        }
        let itineraryItemLogo = document.createElement('img')
        itineraryItemLogo.src = flight_stats.logo
        itineraryItemLogo.classList.add('flight-logo')
        let itineraryItemText = document.createElement('div')
        itineraryItemText.innerHTML = `${flight_stats.depart_time} (${flight_stats.start_airport}) - ${flight_stats.arrive_time} (${flight_stats.end_airport}) (${flight_stats.duration})`
        itineraryItem.appendChild(itineraryItemLogo)
        itineraryItem.appendChild(itineraryItemText)
        itinerary.appendChild(itineraryItem)
        
        layoverItem = document.createElement('div')
        layoverItem.classList.add('layover-item')
        layoverItem.innerHTML = layoverString
        itinerary.appendChild(layoverItem)

        let miles = await getDist(leg.departure_airport.id,leg.arrival_airport.id)
        // console.log(miles)
        dist_flown += miles
    }

    // population of data dependent on points/dist
    // console.log(dist_flown)
    let {points, points_val} = pointData(flight.flights[0].airline, flight.flights[0].departure_airport.id, flight.flights[flight.flights.length-1].arrival_airport.id, flight.price,dist_flown)
    let true_cost = parseFloat((flight.price*(1-data.cashback/100)) - points_val/100).toFixed(2)
    if (true_cost < data.cheapest_price) {
      data.cheapest_price = parseFloat(true_cost).toFixed(2)
      console.log(data)
    }
    let cost_diff_from_cheapest = true_cost - data.cheapest_price
    let time_diff_from_cheapest = (data.cheapest_duration - flight.total_duration)/60
    let cost_per_hr = parseFloat(cost_diff_from_cheapest / time_diff_from_cheapest).toFixed(2)
    if (true_cost == data.cheapest_price || true_cost == Infinity || data.cheapest_price > true_cost) {
      cost_per_hr = 0
    }
    
    console.log('true cost of this flight ' + true_cost)
    console.log('cheapest flight true cost ' + data.cheapest_price)

    title.appendChild(logo)
    let titleText = document.createElement('div')
    titleText.innerHTML = airline_txt
    titleText.innerHTML += ' $' + flight.price
    title.appendChild(titleText)

    stats_title.innerHTML = 'Stats'
    stats_title.setAttribute('style', 'font-size: 24px;')
    stats_title.setAttribute('style', 'margin-bottom: 1em;')
    stats.appendChild(stats_title)
    stats.appendChild(stats_dist_flown)
    stats_dist_flown.innerHTML = `Miles Flown: ${dist_flown}`
    stats_points.innerHTML = `Points Earned: ${parseInt(points)}`
    stats.appendChild(stats_points)
    stats_points_value.innerHTML = `Points Value: $${parseInt(points_val/100)}`
    stats.appendChild(stats_points_value)
    stats_true_cost.innerHTML = `True Cost: $${parseFloat(true_cost).toFixed(2)}`
    stats.appendChild(stats_true_cost)
    if (cost_per_hr < 0) {
      stats_cost_per_hr.innerHTML = `Extra Cost/Hour: $${cost_per_hr}`
      stats_cost_per_hr.style.color = 'red'
    } else {
      stats_cost_per_hr.innerHTML = `Extra Cost/Hour: $${cost_per_hr}`
    }
    // stats_cost_per_hr.innerHTML = `Extra Cost/Hour: $${cost_per_hr}`
    stats.appendChild(stats_cost_per_hr)
    stats.classList.add('stats')


    popupBox.classList.add("popup-box");
    popupBox.appendChild(title);
    const box_content = document.createElement('div')
    box_content.classList.add('box-content')
    box_content.appendChild(itinerary)
    box_content.appendChild(stats)
    popupBox.appendChild(box_content)


    // Prevent closing when clicking inside the box
    popupBox.addEventListener("click", (event) => event.stopPropagation());

    // Append popup box to overlay
    overlay.appendChild(popupBox);
    document.body.appendChild(overlay);

    // Close popup when clicking outside the box
    overlay.addEventListener("click", () => overlay.remove());
}

const search = async() => {
    let start = start_input.value.toUpperCase()
    let end = end_input.value.toUpperCase()
    let date = date_input.value
    const gl = 'us'
    const hl = 'en'  // ko for korean
    const currency= 'USD'
    const type = 2  // 1 for round-trip, 2 for one-way, 3 for multi-city
    const sort_by = 2  // 1 for best, 2 for price, 3 for departure time, 4 for arrival time, 5 for duration
    
    // supported airlines for this app
    const include_airlines_url = encodeURIComponent(data.include_airlines)
    // console.log(include_airlines_url)
    
    if (!start || !end || !date) {
        console.error('start location, end location, or date is invalid')
        bigbuttonmsg.innerHTML = 'Please enter valid start location, end location, and date'
    } else {
        // general area codes (get all airports in this area)
        if (start === 'NYC') {
            start = '/m/02_286'
        } else if (start == 'SEL' || start == 'SEOUL') {
            start = '/m/0hsqf'
        } else if (start == 'TYO' || start == 'TOKYO') {
            start = '/m/07dfk'
        } else if (start == 'WAS' || start == 'DC') {
            start = '/m/0rh6k'
        } else if (start == 'BJS' || start == 'BEIJING') {
            start = '/m/01914'
        } else if (start == 'CHI' || start == 'CHICAGO') {
            start = '/m/01_d4'
        } else if (start == 'Shanghai') {
            start = '/m/06wjf'
        } else if (start == 'Taipei') {
            start = '/m/0ftkx'
        }

        if (end === 'NYC') {
            end = '/m/02_286'
        } else if (end == 'SEL' || end == 'SEOUL') {
            end = '/m/0hsqf'
        } else if (end == 'TYO' || end == 'TOKYO') {
            end = '/m/07dfk'
        } else if (end == 'WAS' || end == 'DC') {
            end = '/m/0rh6k'
        } else if (end == 'BJS' || end == 'BEIJING') {
            end = '/m/01914'
        } else if (end == 'CHI' || end == 'CHICAGO') {
            end = '/m/01_d4'
        } else if (end == 'Shanghai') {
            end = '/m/06wjf'
        } else if (end == 'Taipei') {
            end = '/m/0ftkx'
        }
        console.log(start)
        console.log(end)

        // for the distance calculation in stats, do at the end
        // getDist(start,end).then(dist => console.log(dist))

        bigbutton.style.display = 'none'
        airlines.style.display = 'block'
        const url = `/api/fetch-flights?start=${start}&end=${end}&date=${date}&gl=${gl}&hl=${hl}&currency=${currency}&type=${type}&sort_by=${sort_by}&include_airlines=${include_airlines_url}`

        try {
            const response = await fetch(url)
            if (!response.ok) {
                throw new Error(`HTTP Error: Status: ${response.status}`)
            }
            const data = await response.json()
            console.log(data)
            result = data
            console.log(result)
            
            generateList(result)
        } catch (error) {
            console.error('Search failed')
        }
    }
}

bigbutton.addEventListener('click', search)
search_btn.addEventListener('click', search)

let getAreaCode = (input) => {
    if (input == '/m/02_286') {
        return 'NYC (LGA,JFK,EWR)'
    } else if (input == '/m/0hsqf') {
        return 'Seoul (ICN,GMP)'
    } else if (input == '/m/07dfk') {
        return 'Tokyo (HND,NRT)'
    } else if (input == '/m/0rh6k') {
        return 'Washington DC (DCA,IAD,BWI)'
    } else if (input == '/m/01914') {
        return 'Beijing (PEK,PKX)'
    } else if (input == '/m/01_d4') {
        return 'Chicago (ORD,MDW)'
    } else if (input == '/m/06wjf') {
        return 'Shanghai (PVG,SHA)'
    } else if (input == '/m/0ftkx') {
        return 'Taipei (TPE,TSA)'
    } else {
        return input
    }
}

generateList = (flightdata) => {
    results.innerHTML = ''
    console.log(flightdata.other_flights[0])

    data.cheapest_duration = flightdata.other_flights[0].total_duration
    data.cheapest_price = flightdata.other_flights[0].price
    console.log(data)
    let search_info = document.createElement('div')
    let area_dept = flightdata.search_parameters.departure_id
    let area_arr = flightdata.search_parameters.arrival_id
    let sit = `Results for flights from ${getAreaCode(flightdata.search_parameters.departure_id)} to ${getAreaCode(flightdata.search_parameters.arrival_id)} on ${flightdata.search_parameters.outbound_date}`
    search_info.innerHTML = sit
    results.appendChild(search_info)

    flightdata.other_flights.forEach(flight => {

        let flight_container = document.createElement('div')
        flight_container.classList.add('flight-container')

        flight_container.addEventListener('click', () => openPopup(flight))

        let logo = document.createElement('img')
        logo.src = flight.airline_logo
        logo.classList.add('flight-logo')

        let airlines = document.createElement('div')
        let airline_txt = ''
        let unique_airlines = new Set()
        flight.flights.forEach(flight => {
            unique_airlines.add(flight.airline)
        })
        for (const airline of unique_airlines) {
            airline_txt += airline + ' '
        }
        airlines.innerHTML = airline_txt

        let price = document.createElement('div')
        price.innerHTML = `$${flight.price}`

        let times = document.createElement('div')
        let starttime = flight.flights[0].departure_airport.time
        let startDT = new Date(starttime.replace(" ", "T"))
        let endtime = flight.flights[flight.flights.length-1].arrival_airport.time
        let endDT = new Date(endtime.replace(" ", "T"))
        let diff = endDT - startDT
        let dayDiff = parseInt(diff / (1000 * 60 * 60 * 24))
        times.innerHTML = `${starttime.split(" ")[1]} - ${endtime.split(" ")[1]}`
        if (dayDiff != 0) {
            if (dayDiff > 0) {
                times.innerHTML += ` (+${dayDiff})`
            } else {
                times.innerHTML += ` (-${dayDiff})`
            }
        }
        
        let duration = document.createElement('div')
        duration.innerHTML = Math.floor(flight.total_duration/60) + ' hours ' + flight.total_duration%60 + ' min'

        let layovers = document.createElement('div')
        layovers.innerHTML = ''
        if (flight.layovers) {
            layovers.innerHTML = `Layover(s): ${flight.layovers.length}`
            if (flight.layovers.length == 1) {
                layovers.style.color = '#ffa500'
            } else {
                layovers.style.color = '#ff3131'
            }
        } else {
            layovers.innerHTML = 'Direct Flight'
            layovers.style.color = '#228b22'
        }

        flight_container.appendChild(logo)
        flight_container.appendChild(airlines)
        flight_container.appendChild(price)
        flight_container.appendChild(times)
        flight_container.appendChild(duration)
        flight_container.appendChild(layovers)

        results.appendChild(flight_container)
    })

}


