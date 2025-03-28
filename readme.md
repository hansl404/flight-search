Customize airlines, airports, point values, credit card cashback in scriptjs

Insert API key at server.js. Get API key at https://serpapi.com/

Free tier includes 100 calls/month

<img width="1778" alt="Image" src="https://github.com/user-attachments/assets/9083e30e-50f1-40c3-940f-fdc0d8022037" />

<img width="1757" alt="Image" src="https://github.com/user-attachments/assets/cf41ce1a-5601-47ec-87e4-5922c242280a" />

<img width="1749" alt="Image" src="https://github.com/user-attachments/assets/23fae552-cef6-446a-921f-872255bed88b" />

**How to Use:**
- First open server.js
- Run `npm start`
- Open index.html in any browser
- Type in airport code


**Notes:**
- Flights are all one-way
- Flight prices are all for economy class (or basic economy), and sorted in order of cheapest price first
- Don't recommend including Chinese airlines because this uses Google Flights API, and Chinese airlines should be booked through trip.com, not Google Flights
- Stats tab includes airline points earned, value of those points, cost of flight after factoring in cashback and points, and extra cost per hour compared to cheapest flight
- Please use your own API key, as the free tier is limited to 100 calls per month
- To save on number of API calls, the search will return all flights for that destination, and all filtering is done on frontend

**Points:**
- Points are merely estimations subject to change.
- To adjust which airline points accured, modify the pointData function in script.js to assign the point value to the corresponding airline (UA,KE,AA,etc.)
- Adjust values of each airline currency in the global `data` object.
- If there are multiple flights on partner airlines, this will have the most inaccuracy. It just assumes the starting airline is the currency you will accumulate (for example, Alaska -> Air Premia assumes all points accured will be Alaska, even if it is not within same alliance)
- Miles flown is not entirely correct, because each airline counts miles slightly differently. The Korean miles one is accurate because there is an object specific for how Korean Air counts mileage, but the others are rough estimates.
- It is assumed points will be occured in lowest realistic booking class. For example, assuming every flight on Air Canada earns 50% miles. In reality, this will vary differently by flight, but there was no way to scrape booking class, so there are only estimates.
- Most airlines have 0 accural, even within airline alliance, because most points don't transfer. For example, China Airlines is in same alliance as Korean Air, but Korean Air often doesn't count points earned on China Airlines flights.
- But some will have accural, like United will count almost all Air Canada flights with 50% mile flown.
