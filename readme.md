Clearcost Flights - A customizable flight search that scrapes the Google Flights API and automatically displays true cost after credit card cash back and airline points + faster/simpler UI for filtering airlines

<img width="1778" alt="Image" src="https://github.com/user-attachments/assets/9083e30e-50f1-40c3-940f-fdc0d8022037" />

<img width="1757" alt="Image" src="https://github.com/user-attachments/assets/cf41ce1a-5601-47ec-87e4-5922c242280a" />

<img width="1754" alt="Image" src="https://github.com/user-attachments/assets/81bcb66b-9c4e-45eb-9832-9a913d87bd33" />

**How to Use:**
- Insert API key at `server.js` file. Get API key at https://serpapi.com/
- Customize airlines, airports, point values, credit card cashback in `script.js` file.
- First open server.js
- Run `npm start`
- Open index.html in any browser

[View Deployed App](https://clearcost.vercel.app/)

**Notes:**
- Flights are all one-way
- Flight prices are all for economy class (or basic economy), and sorted in order of cheapest price first
- Don't recommend including Chinese airlines because this uses Google Flights API, and Chinese airlines should be booked through trip.com, not Google Flights
- Stats tab includes airline points earned, value of those points, cost of flight after factoring in cashback and points, and extra cost per hour compared to cheapest flight
- Please use your own API key, as the free tier is limited to 250 calls per month
- To save on number of API calls, the search will return all flights for that destination, and all filtering is done on frontend
- Most of the flights are relevant to trans-Pacific airlines, but can add more airlines by going to the data object in `script.js` and adding IATA code to the `include_airlines` string, as well as adding the HTML component if you want to add filter functionality.
- For the Extra Cost/Hour feature to work properly, need to click on the cheapest flight every time you filter (since the cost doesn't load until clicking the box for now).

**Points:**
- Points are merely estimations subject to change.
- To adjust which airline points accured, modify the pointData function in script.js to assign the point value to the corresponding airline (UA,KE,AA,etc.)
- Adjust values of each airline currency in the global `data` object.
- If there are multiple flights on partner airlines, this will have the most inaccuracy. It just assumes the starting airline is the currency you will accumulate (for example, Alaska -> Air Premia assumes all points accured will be Alaska, even if it is not within same alliance)
- Miles flown is not entirely correct, because each airline counts miles slightly differently. The Korean miles one is accurate because there is an object specific for how Korean Air counts mileage, but the others are rough estimates.
- It is assumed points will be occured in lowest realistic booking class. For example, assuming every flight on Air Canada earns 50% miles. In reality, this will vary differently by flight, but there was no way to scrape booking class, so there are only estimates.
- Most airlines have 0 accural, even within airline alliance, because most points don't transfer. For example, China Airlines is in same alliance as Korean Air, but Korean Air often doesn't count points earned on China Airlines flights.
- But some will have accural, like United will count almost all Air Canada flights with 50% mile flown.

**Next Steps:**
- The extra cost per hour calculation is a bit wonky on some results. Working to address this bug next.
- Currently working to add ability to modify cashback and CPP variables on the frontend.