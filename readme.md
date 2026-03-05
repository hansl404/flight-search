Clearcost Flights - A customizable flight search that scrapes the Google Flights API and automatically displays true cost after credit card cash back and airline points + faster/simpler UI for filtering airlines. At the moment, optimized for Korean Airlines, Cathay Pacific, and U.S. airlines.

[View Deployed App Prototype](https://clearcost.vercel.app/)

<img width="1778" alt="Image" src="https://github.com/user-attachments/assets/9083e30e-50f1-40c3-940f-fdc0d8022037" />

<img width="1757" alt="Image" src="https://github.com/user-attachments/assets/cf41ce1a-5601-47ec-87e4-5922c242280a" />

<img width="1754" alt="Image" src="https://github.com/user-attachments/assets/81bcb66b-9c4e-45eb-9832-9a913d87bd33" />

**How to Customize:**
- Fork this repo
- Get API key at https://serpapi.com/ and put the key into the environment variables on Vercel before deploying
- Customize airlines, airports, point values, credit card cashback in the `data` object of the `script.js` file.
- To test locally, need to create a `server.js` file for proxy

**Notes:**
- Flights are all one-way for now
- Flight prices are all for economy class (or basic economy), and sorted in order of cheapest ticket price first (not the "true" cost which is calculated later)
- Don't recommend including Chinese airlines because this uses Google Flights API, and Chinese airlines should be booked through trip.com, not Google Flights
- The "Extra Cost/Hour" stat is only for comparing a more expensive and shorter flight than the ticket with the cheapest base ticket price. If a flight both costs more and takes longer, this will show as $0 extra cost per hour (be careful to avoid!)
- Please use your own API key, as the free tier is limited to 250 calls per month
- To save on number of API calls, the search will return all flights for that destination, and all filtering is done on frontend
- **To add more airlines:** Go to the `data` object in `script.js` and adding IATA code to the `include_airlines` string. If you want to add filter functionality for that newly added airline, go to `index.html`, and check the "airlines" div. Add the airline, following the HTML format. There is no JavaScript needed to be modified, since the script will automatically add filter functionality for that new airline based on the IATA name.

**Points:**
- As of March 2026, miles can no longer be earned when flying basic economy on U.S. airlines (except Alaska and JetBlue). For this reason, **the points earned portion of the calculation has become mostly negligible for now** (until manual points are introduced to this app later).
- Korean Air and Cathay Pacific points earned should still be fairly accurate, since they used fixed award charts (hard-coded in this app).
- Default point values are listed in the `data` object. However, they can now be modified in the frontend via "Point Values".
- If there are multiple flights on partner airlines, this will have the most inaccuracy. It just assumes the starting airline is the currency you will accumulate (for example, Alaska -> Air Premia assumes all points accured will be Alaska, even if it is not within same alliance)
- It is assumed points will be occured in lowest realistic booking class. For example, assuming every flight on Air Canada earns 50% miles. In reality, this will vary differently by flight, but there was no way to scrape booking class, so there are only estimates.
- But some will have accural, like United will count almost all Air Canada flights with 50% mile flown.

**Next Steps:**
- Flying out of Gimpo Airport with Korean Air will break the points calculation at the moment (due to Korean Air miles calculations assuming Incheon Airport is the start/layover/end). Working to include Gimpo Airport next.
- Currently working to let users manually input miles earned for more accurate calculations.
- Trying to figure out a way to support more airlines without cluttering the UI. The ones listed are the ones I personally fly on, so feel free to customize with the instructions listed above.
