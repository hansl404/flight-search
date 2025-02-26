Customize airlines, airports, point values, credit card cashback in scriptjs

Insert API key at server.js

Notes:
- Flights are all one-way
- Flight prices are all for economy class (or basic economy), and sorted in order of cheapest price first
- Does not include Chinese airlines because this uses Google Flights API, and Chinese airlines should be booked through trip.com, not Google Flights
- Stats tab includes airline points earned, value of those points, cost of flight after factoring in cashback and points, and extra cost per hour compared to cheapest flight
- Please use your own API key, as the free tier is limited to 100 calls per month
- To save on number of API calls, the search will return all flights for that destination, and all filtering is done on frontend