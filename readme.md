Clearcost Flights - A customizable flight search that scrapes the Google Flights API and automatically displays true cost after credit card cash back and airline points + faster/simpler UI for filtering airlines. At the moment, optimized for Korean Airlines, Cathay Pacific, and U.S. airlines.

[View Deployed App Prototype](https://clearcost.vercel.app/)

<img width="1497" height="754" alt="Image" src="https://github.com/user-attachments/assets/7a2867f2-d1e1-4feb-84b0-e76e07a5da06" />

<img width="1505" height="760" alt="Image" src="https://github.com/user-attachments/assets/29fc83c0-911e-4153-bec9-481723a162ed" />

<img width="1499" height="759" alt="Image" src="https://github.com/user-attachments/assets/c499fa55-f3f3-49f4-b106-f8cb7b969c8f" />

**How to Customize:**
- Fork this repo
- Get API key at https://serpapi.com/ and put the key into the environment variables on Vercel before deploying
- Customize airlines, airports, point values, credit card cashback in the `data` object of the `script.js` file.
- To test locally, need to create a `server.js` file for proxy
- **To add more airlines:** Go to the `data` object in `script.js` and adding IATA code to the `include_airlines` string. If you want to add filter functionality for that newly added airline, go to `index.html`, and check the "airlines" div. Add the airline, following the HTML format. There is no JavaScript needed to be modified, since the script will automatically add filter functionality for that new airline based on the IATA name.

**Notes:**
- Flights are all one-way for now
- Only the following points are supported for now: Korean Air, Cathay Pacific, Delta Airlines, United Airlines, American Airlines, Alaska Airlines
- Flight prices are all for economy class (or basic economy), and sorted in order of cheapest ticket price first (not the "true" cost which is calculated later)
- Don't recommend including Chinese airlines because this uses Google Flights API, and Chinese airlines should be booked through trip.com, not Google Flights
- The "Extra Cost/Hour" stat is only for comparing a more expensive and shorter flight than the ticket with the cheapest base ticket price. **Warning:** If a flight both costs more and takes longer, this will show as $0 extra cost per hour

**Points:**
- Point calculations are merely estimations, so could it be inaccurate. Most of the time, it will assume 0 points earned (because the fares displayed are basic economy). However, you can manually input miles earned, along with the mileage program (among the 6 supported airline currencies), to get a different "true cost" calculation.
- Korean Air and Cathay Pacific points earned should still be fairly accurate, since they used fixed award charts (hard-coded in this app).
- Default point values are listed in the `data` object. However, they can now be modified in the frontend via "Point Values".
- If there are multiple flights on partner airlines, this will have the most inaccuracy. It just assumes the starting airline is the currency you will accumulate (for example, Alaska -> Air Premia assumes all points accured will be Alaska, even if it is not within same alliance)
- It is assumed points will be occured in lowest realistic booking class. For example, assuming every flight on Air Canada earns 50% miles. In reality, this will vary differently by flight, but there was no way to scrape booking class, so there are only estimates.
- But some will have accural, like United will count almost all Air Canada flights with 50% mile flown.

**Next Steps:**
- Flying out of Gimpo Airport with Korean Air will break the points calculation at the moment (due to Korean Air miles calculations assuming Incheon Airport is the start/layover/end). Working to include Gimpo Airport next.
- Trying to figure out a way to support more airlines without cluttering the UI. The ones listed are the ones I personally fly on, so feel free to customize with the instructions listed above.
