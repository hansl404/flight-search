// reference: https://serpapi.com/google-flights-api

// initial test to reduce API calls, remove this later
const mock = {
    "search_metadata": {
      "id": "67be7ec3cbc42b9c9c43ad48",
      "status": "Success",
      "json_endpoint": "https://serpapi.com/searches/95e7610304efd6f1/67be7ec3cbc42b9c9c43ad48.json",
      "created_at": "2025-02-26 02:38:59 UTC",
      "processed_at": "2025-02-26 02:38:59 UTC",
      "google_flights_url": "https://www.google.com/travel/flights?hl=en&gl=us&curr=USD&tfs=CBwQAhoeEgoyMDI1LTAyLTI4agcIARIDSkZLcgcIARIDSUNOQgEBSAFwAZgBAg&tfu=EgIIAg",
      "raw_html_file": "https://serpapi.com/searches/95e7610304efd6f1/67be7ec3cbc42b9c9c43ad48.html",
      "prettify_html_file": "https://serpapi.com/searches/95e7610304efd6f1/67be7ec3cbc42b9c9c43ad48.prettify",
      "total_time_taken": 1.77
    },
    "search_parameters": {
      "engine": "google_flights",
      "hl": "en",
      "gl": "us",
      "type": "2",
      "departure_id": "JFK",
      "arrival_id": "ICN",
      "outbound_date": "2025-02-28",
      "currency": "USD",
      "sort_by": "2"
    },
    "other_flights": [
      {
        "flights": [
          {
            "departure_airport": {
              "name": "John F. Kennedy International Airport",
              "id": "JFK",
              "time": "2025-02-28 15:55"
            },
            "arrival_airport": {
              "name": "Toronto Pearson International Airport",
              "id": "YYZ",
              "time": "2025-02-28 17:39"
            },
            "duration": 104,
            "airplane": "Embraer 175",
            "airline": "Air Canada",
            "airline_logo": "https://www.gstatic.com/flights/airline_logos/70px/AC.png",
            "travel_class": "Economy",
            "flight_number": "AC 8555",
            "legroom": "31 in",
            "extensions": [
              "Average legroom (31 in)",
              "In-seat USB outlet",
              "Stream media to your device",
              "Carbon emissions estimate: 105 kg"
            ],
            "often_delayed_by_over_30_min": true
          },
          {
            "departure_airport": {
              "name": "Toronto Pearson International Airport",
              "id": "YYZ",
              "time": "2025-02-28 20:20"
            },
            "arrival_airport": {
              "name": "Vancouver International Airport",
              "id": "YVR",
              "time": "2025-02-28 22:15"
            },
            "duration": 295,
            "airplane": "Boeing 787",
            "airline": "Air Canada",
            "airline_logo": "https://www.gstatic.com/flights/airline_logos/70px/AC.png",
            "travel_class": "Economy",
            "flight_number": "AC 127",
            "legroom": "31 in",
            "extensions": [
              "Average legroom (31 in)",
              "Wi-Fi for a fee",
              "In-seat power & USB outlets",
              "On-demand video",
              "Carbon emissions estimate: 198 kg"
            ]
          },
          {
            "departure_airport": {
              "name": "Vancouver International Airport",
              "id": "YVR",
              "time": "2025-03-01 10:15"
            },
            "arrival_airport": {
              "name": "Incheon International Airport",
              "id": "ICN",
              "time": "2025-03-02 15:15"
            },
            "duration": 720,
            "airplane": "Boeing 787",
            "airline": "Air Canada",
            "airline_logo": "https://www.gstatic.com/flights/airline_logos/70px/AC.png",
            "travel_class": "Economy",
            "flight_number": "AC 63",
            "legroom": "31 in",
            "extensions": [
              "Average legroom (31 in)",
              "Wi-Fi for a fee",
              "In-seat power & USB outlets",
              "On-demand video",
              "Carbon emissions estimate: 438 kg"
            ]
          }
        ],
        "layovers": [
          {
            "duration": 161,
            "name": "Toronto Pearson International Airport",
            "id": "YYZ"
          },
          {
            "duration": 720,
            "name": "Vancouver International Airport",
            "id": "YVR",
            "overnight": true
          }
        ],
        "total_duration": 2000,
        "carbon_emissions": {
          "this_flight": 742000,
          "typical_for_this_route": 922000,
          "difference_percent": -20
        },
        "price": 686,
        "type": "One way",
        "airline_logo": "https://www.gstatic.com/flights/airline_logos/70px/AC.png",
        "booking_token": "WyJDalJJU1c1Rk5YVjNiV3hGZWpSQlFUTmxibWRDUnkwdExTMHRMUzB0TFhCcWRIb3hNMEZCUVVGQlIyVXRabk5SVFhGWk0ydEJFaEZCUXpnMU5UVjhRVU14TWpkOFFVTTJNeG9MQ0xXWEJCQUNHZ05WVTBRNEhIQzFsd1E9IixbWyJKRksiLCIyMDI1LTAyLTI4IiwiWVlaIixudWxsLCJBQyIsIjg1NTUiXSxbIllZWiIsIjIwMjUtMDItMjgiLCJZVlIiLG51bGwsIkFDIiwiMTI3Il0sWyJZVlIiLCIyMDI1LTAzLTAxIiwiSUNOIixudWxsLCJBQyIsIjYzIl1dXQ=="
      },
      {
        "flights": [
          {
            "departure_airport": {
              "name": "John F. Kennedy International Airport",
              "id": "JFK",
              "time": "2025-02-28 18:15"
            },
            "arrival_airport": {
              "name": "London Gatwick Airport",
              "id": "LGW",
              "time": "2025-03-01 06:00"
            },
            "duration": 405,
            "airline": "Norse Atlantic UK",
            "airline_logo": "https://www.gstatic.com/flights/airline_logos/70px/Z0.png",
            "travel_class": "Economy",
            "flight_number": "Z0 702",
            "legroom": "31 in",
            "extensions": [
              "Average legroom (31 in)",
              "In-seat power & USB outlets",
              "On-demand video",
              "Carbon emissions estimate: 326 kg"
            ],
            "overnight": true
          },
          {
            "departure_airport": {
              "name": "London Gatwick Airport",
              "id": "LGW",
              "time": "2025-03-01 12:00"
            },
            "arrival_airport": {
              "name": "Paris Charles de Gaulle Airport",
              "id": "CDG",
              "time": "2025-03-01 14:15"
            },
            "duration": 75,
            "airline": "easyJet",
            "airline_logo": "https://www.gstatic.com/flights/airline_logos/70px/U2.png",
            "travel_class": "Economy",
            "flight_number": "U2 8405",
            "legroom": "29 in",
            "extensions": [
              "Below average legroom (29 in)",
              "Carbon emissions estimate: 50 kg"
            ],
            "often_delayed_by_over_30_min": true
          },
          {
            "departure_airport": {
              "name": "Paris Charles de Gaulle Airport",
              "id": "CDG",
              "time": "2025-03-01 19:30"
            },
            "arrival_airport": {
              "name": "Incheon International Airport",
              "id": "ICN",
              "time": "2025-03-02 16:05"
            },
            "duration": 755,
            "airline": "T'Way Air",
            "airline_logo": "https://www.gstatic.com/flights/airline_logos/70px/TW.png",
            "travel_class": "Economy",
            "flight_number": "TW 402",
            "legroom": "32 in",
            "extensions": [
              "Above average legroom (32 in)",
              "In-seat USB outlet",
              "Carbon emissions estimate: 688 kg"
            ],
            "overnight": true
          }
        ],
        "layovers": [
          {
            "duration": 360,
            "name": "London Gatwick Airport",
            "id": "LGW"
          },
          {
            "duration": 315,
            "name": "Paris Charles de Gaulle Airport",
            "id": "CDG"
          }
        ],
        "total_duration": 1910,
        "carbon_emissions": {
          "this_flight": 1066000,
          "typical_for_this_route": 922000,
          "difference_percent": 16
        },
        "price": 795,
        "type": "One way",
        "airline_logo": "https://www.gstatic.com/flights/airline_logos/70px/multi.png",
        "booking_token": "WyJDalJJU1c1Rk5YVjNiV3hGZWpSQlFUTmxibWRDUnkwdExTMHRMUzB0TFhCcWRIb3hNMEZCUVVGQlIyVXRabk5SVFhGWk0ydEJFaEphTURjd01ueFZNamcwTURWOFZGYzBNRElhQ3dqLzdBUVFBaG9EVlZORU9CeHcvK3dFIixbWyJKRksiLCIyMDI1LTAyLTI4IiwiTEdXIixudWxsLCJaMCIsIjcwMiJdLFsiTEdXIiwiMjAyNS0wMy0wMSIsIkNERyIsbnVsbCwiVTIiLCI4NDA1Il0sWyJDREciLCIyMDI1LTAzLTAxIiwiSUNOIixudWxsLCJUVyIsIjQwMiJdXV0="
      },
      {
        "flights": [
          {
            "departure_airport": {
              "name": "John F. Kennedy International Airport",
              "id": "JFK",
              "time": "2025-02-28 20:55"
            },
            "arrival_airport": {
              "name": "Gnassingbé Eyadéma International Airport",
              "id": "LFW",
              "time": "2025-03-01 11:25"
            },
            "duration": 570,
            "airplane": "Boeing 787",
            "airline": "Ethiopian",
            "airline_logo": "https://www.gstatic.com/flights/airline_logos/70px/ET.png",
            "travel_class": "Economy",
            "flight_number": "ET 515",
            "legroom": "32 in",
            "extensions": [
              "Above average legroom (32 in)",
              "Wi-Fi for a fee",
              "In-seat USB outlet",
              "On-demand video",
              "Carbon emissions estimate: 571 kg"
            ],
            "overnight": true,
            "often_delayed_by_over_30_min": true
          },
          {
            "departure_airport": {
              "name": "Gnassingbé Eyadéma International Airport",
              "id": "LFW",
              "time": "2025-03-01 13:05"
            },
            "arrival_airport": {
              "name": "Bole Addis Ababa International Airport",
              "id": "ADD",
              "time": "2025-03-01 21:30"
            },
            "duration": 325,
            "airplane": "Boeing 787",
            "airline": "Ethiopian",
            "airline_logo": "https://www.gstatic.com/flights/airline_logos/70px/ET.png",
            "travel_class": "Economy",
            "flight_number": "ET 515",
            "legroom": "32 in",
            "extensions": [
              "Above average legroom (32 in)",
              "Wi-Fi for a fee",
              "In-seat USB outlet",
              "On-demand video",
              "Carbon emissions estimate: 258 kg"
            ]
          },
          {
            "departure_airport": {
              "name": "Bole Addis Ababa International Airport",
              "id": "ADD",
              "time": "2025-03-01 22:35"
            },
            "arrival_airport": {
              "name": "Incheon International Airport",
              "id": "ICN",
              "time": "2025-03-02 15:20"
            },
            "duration": 645,
            "airplane": "Boeing 787",
            "airline": "Ethiopian",
            "airline_logo": "https://www.gstatic.com/flights/airline_logos/70px/ET.png",
            "travel_class": "Economy",
            "flight_number": "ET 672",
            "legroom": "32 in",
            "extensions": [
              "Above average legroom (32 in)",
              "Wi-Fi for a fee",
              "In-seat USB outlet",
              "On-demand video",
              "Carbon emissions estimate: 534 kg"
            ],
            "overnight": true
          }
        ],
        "layovers": [
          {
            "duration": 100,
            "name": "Gnassingbé Eyadéma International Airport",
            "id": "LFW"
          },
          {
            "duration": 65,
            "name": "Bole Addis Ababa International Airport",
            "id": "ADD"
          }
        ],
        "total_duration": 1705,
        "carbon_emissions": {
          "this_flight": 1365000,
          "typical_for_this_route": 922000,
          "difference_percent": 48
        },
        "price": 808,
        "type": "One way",
        "airline_logo": "https://www.gstatic.com/flights/airline_logos/70px/ET.png",
        "booking_token": "WyJDalJJU1c1Rk5YVjNiV3hGZWpSQlFUTmxibWRDUnkwdExTMHRMUzB0TFhCcWRIb3hNMEZCUVVGQlIyVXRabk5SVFhGWk0ydEJFaEZGVkRVeE5YeEZWRFV4Tlh4RlZEWTNNaG9MQ1ByMkJCQUNHZ05WVTBRNEhIRDY5Z1E9IixbWyJKRksiLCIyMDI1LTAyLTI4IiwiTEZXIixudWxsLCJFVCIsIjUxNSJdLFsiTEZXIiwiMjAyNS0wMy0wMSIsIkFERCIsbnVsbCwiRVQiLCI1MTUiXSxbIkFERCIsIjIwMjUtMDMtMDEiLCJJQ04iLG51bGwsIkVUIiwiNjcyIl1dXQ=="
      },
      {
        "flights": [
          {
            "departure_airport": {
              "name": "John F. Kennedy International Airport",
              "id": "JFK",
              "time": "2025-02-28 09:45"
            },
            "arrival_airport": {
              "name": "Toronto Pearson International Airport",
              "id": "YYZ",
              "time": "2025-02-28 11:29"
            },
            "duration": 104,
            "airplane": "Embraer 175",
            "airline": "Air Canada",
            "airline_logo": "https://www.gstatic.com/flights/airline_logos/70px/AC.png",
            "travel_class": "Economy",
            "flight_number": "AC 8553",
            "ticket_also_sold_by": [
              "United"
            ],
            "legroom": "31 in",
            "extensions": [
              "Average legroom (31 in)",
              "In-seat USB outlet",
              "Stream media to your device",
              "Carbon emissions estimate: 105 kg"
            ]
          },
          {
            "departure_airport": {
              "name": "Toronto Pearson International Airport",
              "id": "YYZ",
              "time": "2025-02-28 13:00"
            },
            "arrival_airport": {
              "name": "Incheon International Airport",
              "id": "ICN",
              "time": "2025-03-01 18:25"
            },
            "duration": 925,
            "airplane": "Boeing 787",
            "airline": "Air Canada",
            "airline_logo": "https://www.gstatic.com/flights/airline_logos/70px/AC.png",
            "travel_class": "Economy",
            "flight_number": "AC 61",
            "legroom": "31 in",
            "extensions": [
              "Average legroom (31 in)",
              "Wi-Fi for a fee",
              "In-seat power & USB outlets",
              "On-demand video",
              "Carbon emissions estimate: 525 kg"
            ]
          }
        ],
        "layovers": [
          {
            "duration": 91,
            "name": "Toronto Pearson International Airport",
            "id": "YYZ"
          }
        ],
        "total_duration": 1120,
        "carbon_emissions": {
          "this_flight": 631000,
          "typical_for_this_route": 922000,
          "difference_percent": -32
        },
        "price": 852,
        "type": "One way",
        "airline_logo": "https://www.gstatic.com/flights/airline_logos/70px/AC.png",
        "booking_token": "WyJDalJJU1c1Rk5YVjNiV3hGZWpSQlFUTmxibWRDUnkwdExTMHRMUzB0TFhCcWRIb3hNMEZCUVVGQlIyVXRabk5SVFhGWk0ydEJFZ3RCUXpnMU5UTjhRVU0yTVJvTENJMlpCUkFDR2dOVlUwUTRISENObVFVPSIsW1siSkZLIiwiMjAyNS0wMi0yOCIsIllZWiIsbnVsbCwiQUMiLCI4NTUzIl0sWyJZWVoiLCIyMDI1LTAyLTI4IiwiSUNOIixudWxsLCJBQyIsIjYxIl1dXQ=="
      },
      {
        "flights": [
          {
            "departure_airport": {
              "name": "John F. Kennedy International Airport",
              "id": "JFK",
              "time": "2025-02-28 06:00"
            },
            "arrival_airport": {
              "name": "Boston Logan International Airport",
              "id": "BOS",
              "time": "2025-02-28 07:28"
            },
            "duration": 88,
            "airplane": "Embraer 175",
            "airline": "Delta",
            "airline_logo": "https://www.gstatic.com/flights/airline_logos/70px/DL.png",
            "travel_class": "Economy",
            "flight_number": "DL 5765",
            "ticket_also_sold_by": [
              "Korean Air"
            ],
            "legroom": "31 in",
            "extensions": [
              "Average legroom (31 in)",
              "Wi-Fi for a fee",
              "Carbon emissions estimate: 85 kg"
            ]
          },
          {
            "departure_airport": {
              "name": "Boston Logan International Airport",
              "id": "BOS",
              "time": "2025-02-28 11:00"
            },
            "arrival_airport": {
              "name": "Incheon International Airport",
              "id": "ICN",
              "time": "2025-03-01 16:30"
            },
            "duration": 930,
            "airplane": "Boeing 777",
            "airline": "Korean Air",
            "airline_logo": "https://www.gstatic.com/flights/airline_logos/70px/KE.png",
            "travel_class": "Economy",
            "flight_number": "KE 92",
            "ticket_also_sold_by": [
              "Delta"
            ],
            "legroom": "33 in",
            "extensions": [
              "Above average legroom (33 in)",
              "In-seat power & USB outlets",
              "On-demand video",
              "Carbon emissions estimate: 901 kg"
            ]
          }
        ],
        "layovers": [
          {
            "duration": 212,
            "name": "Boston Logan International Airport",
            "id": "BOS"
          }
        ],
        "total_duration": 1230,
        "carbon_emissions": {
          "this_flight": 987000,
          "typical_for_this_route": 922000,
          "difference_percent": 7
        },
        "price": 853,
        "type": "One way",
        "airline_logo": "https://www.gstatic.com/flights/airline_logos/70px/multi.png",
        "booking_token": "WyJDalJJU1c1Rk5YVjNiV3hGZWpSQlFUTmxibWRDUnkwdExTMHRMUzB0TFhCcWRIb3hNMEZCUVVGQlIyVXRabk5SVFhGWk0ydEJFZ3RFVERVM05qVjhTMFU1TWhvTENJS2FCUkFDR2dOVlUwUTRISENDbWdVPSIsW1siSkZLIiwiMjAyNS0wMi0yOCIsIkJPUyIsbnVsbCwiREwiLCI1NzY1Il0sWyJCT1MiLCIyMDI1LTAyLTI4IiwiSUNOIixudWxsLCJLRSIsIjkyIl1dXQ=="
      },
      {
        "flights": [
          {
            "departure_airport": {
              "name": "John F. Kennedy International Airport",
              "id": "JFK",
              "time": "2025-02-28 08:00"
            },
            "arrival_airport": {
              "name": "Chicago O'Hare International Airport",
              "id": "ORD",
              "time": "2025-02-28 09:55"
            },
            "duration": 175,
            "airplane": "Embraer 175",
            "airline": "Delta",
            "airline_logo": "https://www.gstatic.com/flights/airline_logos/70px/DL.png",
            "travel_class": "Economy",
            "flight_number": "DL 5705",
            "ticket_also_sold_by": [
              "Korean Air"
            ],
            "legroom": "31 in",
            "extensions": [
              "Average legroom (31 in)",
              "Wi-Fi for a fee",
              "Carbon emissions estimate: 167 kg"
            ]
          },
          {
            "departure_airport": {
              "name": "Chicago O'Hare International Airport",
              "id": "ORD",
              "time": "2025-02-28 11:25"
            },
            "arrival_airport": {
              "name": "Incheon International Airport",
              "id": "ICN",
              "time": "2025-03-01 17:15"
            },
            "duration": 890,
            "airplane": "Boeing 777",
            "airline": "Korean Air",
            "airline_logo": "https://www.gstatic.com/flights/airline_logos/70px/KE.png",
            "travel_class": "Economy",
            "flight_number": "KE 38",
            "ticket_also_sold_by": [
              "Delta"
            ],
            "legroom": "33 in",
            "extensions": [
              "Above average legroom (33 in)",
              "In-seat power & USB outlets",
              "On-demand video",
              "Carbon emissions estimate: 1007 kg"
            ]
          }
        ],
        "layovers": [
          {
            "duration": 90,
            "name": "Chicago O'Hare International Airport",
            "id": "ORD"
          }
        ],
        "total_duration": 1155,
        "carbon_emissions": {
          "this_flight": 1175000,
          "typical_for_this_route": 922000,
          "difference_percent": 27
        },
        "price": 853,
        "type": "One way",
        "airline_logo": "https://www.gstatic.com/flights/airline_logos/70px/multi.png",
        "booking_token": "WyJDalJJU1c1Rk5YVjNiV3hGZWpSQlFUTmxibWRDUnkwdExTMHRMUzB0TFhCcWRIb3hNMEZCUVVGQlIyVXRabk5SVFhGWk0ydEJFZ3RFVERVM01EVjhTMFV6T0JvTENJS2FCUkFDR2dOVlUwUTRISENDbWdVPSIsW1siSkZLIiwiMjAyNS0wMi0yOCIsIk9SRCIsbnVsbCwiREwiLCI1NzA1Il0sWyJPUkQiLCIyMDI1LTAyLTI4IiwiSUNOIixudWxsLCJLRSIsIjM4Il1dXQ=="
      },
      {
        "flights": [
          {
            "departure_airport": {
              "name": "John F. Kennedy International Airport",
              "id": "JFK",
              "time": "2025-02-28 12:00"
            },
            "arrival_airport": {
              "name": "Incheon International Airport",
              "id": "ICN",
              "time": "2025-03-01 17:45"
            },
            "duration": 945,
            "airplane": "Boeing 747",
            "airline": "Korean Air",
            "airline_logo": "https://www.gstatic.com/flights/airline_logos/70px/KE.png",
            "travel_class": "Economy",
            "flight_number": "KE 82",
            "ticket_also_sold_by": [
              "Delta"
            ],
            "legroom": "33 in",
            "extensions": [
              "Above average legroom (33 in)",
              "In-seat power & USB outlets",
              "On-demand video",
              "Carbon emissions estimate: 998 kg"
            ],
            "often_delayed_by_over_30_min": true
          }
        ],
        "total_duration": 945,
        "carbon_emissions": {
          "this_flight": 998000,
          "typical_for_this_route": 922000,
          "difference_percent": 8
        },
        "price": 864,
        "type": "One way",
        "airline_logo": "https://www.gstatic.com/flights/airline_logos/70px/KE.png",
        "booking_token": "WyJDalJJU1c1Rk5YVjNiV3hGZWpSQlFUTmxibWRDUnkwdExTMHRMUzB0TFhCcWRIb3hNMEZCUVVGQlIyVXRabk5SVFhGWk0ydEJFZ1JMUlRneUdnc0lzYUlGRUFJYUExVlRSRGdjY0xHaUJRPT0iLFtbIkpGSyIsIjIwMjUtMDItMjgiLCJJQ04iLG51bGwsIktFIiwiODIiXV1d"
      },
      {
        "flights": [
          {
            "departure_airport": {
              "name": "John F. Kennedy International Airport",
              "id": "JFK",
              "time": "2025-02-28 21:00"
            },
            "arrival_airport": {
              "name": "Boston Logan International Airport",
              "id": "BOS",
              "time": "2025-02-28 22:27"
            },
            "duration": 87,
            "airplane": "Airbus A220-100 Passenger",
            "airline": "Delta",
            "airline_logo": "https://www.gstatic.com/flights/airline_logos/70px/DL.png",
            "travel_class": "Economy",
            "flight_number": "DL 2639",
            "ticket_also_sold_by": [
              "Korean Air"
            ],
            "legroom": "31 in",
            "extensions": [
              "Average legroom (31 in)",
              "Free Wi-Fi",
              "In-seat power & USB outlets",
              "Live TV",
              "Carbon emissions estimate: 80 kg"
            ],
            "often_delayed_by_over_30_min": true
          },
          {
            "departure_airport": {
              "name": "Boston Logan International Airport",
              "id": "BOS",
              "time": "2025-03-01 11:00"
            },
            "arrival_airport": {
              "name": "Incheon International Airport",
              "id": "ICN",
              "time": "2025-03-02 16:30"
            },
            "duration": 930,
            "airplane": "Boeing 777",
            "airline": "Korean Air",
            "airline_logo": "https://www.gstatic.com/flights/airline_logos/70px/KE.png",
            "travel_class": "Economy",
            "flight_number": "KE 92",
            "ticket_also_sold_by": [
              "Delta"
            ],
            "legroom": "33 in",
            "extensions": [
              "Above average legroom (33 in)",
              "In-seat power & USB outlets",
              "On-demand video",
              "Carbon emissions estimate: 941 kg"
            ]
          }
        ],
        "layovers": [
          {
            "duration": 753,
            "name": "Boston Logan International Airport",
            "id": "BOS",
            "overnight": true
          }
        ],
        "total_duration": 1770,
        "carbon_emissions": {
          "this_flight": 1022000,
          "typical_for_this_route": 922000,
          "difference_percent": 11
        },
        "price": 865,
        "type": "One way",
        "airline_logo": "https://www.gstatic.com/flights/airline_logos/70px/multi.png",
        "booking_token": "WyJDalJJU1c1Rk5YVjNiV3hGZWpSQlFUTmxibWRDUnkwdExTMHRMUzB0TFhCcWRIb3hNMEZCUVVGQlIyVXRabk5SVFhGWk0ydEJFZ3RFVERJMk16bDhTMFU1TWhvTENLcWpCUkFDR2dOVlUwUTRISENxb3dVPSIsW1siSkZLIiwiMjAyNS0wMi0yOCIsIkJPUyIsbnVsbCwiREwiLCIyNjM5Il0sWyJCT1MiLCIyMDI1LTAzLTAxIiwiSUNOIixudWxsLCJLRSIsIjkyIl1dXQ=="
      },
      {
        "flights": [
          {
            "departure_airport": {
              "name": "John F. Kennedy International Airport",
              "id": "JFK",
              "time": "2025-02-28 13:40"
            },
            "arrival_airport": {
              "name": "Zayed International Airport",
              "id": "AUH",
              "time": "2025-03-01 11:25"
            },
            "duration": 765,
            "airplane": "Airbus A380",
            "airline": "Etihad",
            "airline_logo": "https://www.gstatic.com/flights/airline_logos/70px/EY.png",
            "travel_class": "Economy",
            "flight_number": "EY 2",
            "legroom": "31 in",
            "extensions": [
              "Average legroom (31 in)",
              "Wi-Fi for a fee",
              "In-seat power & USB outlets",
              "On-demand video",
              "Carbon emissions estimate: 878 kg"
            ],
            "overnight": true
          },
          {
            "departure_airport": {
              "name": "Zayed International Airport",
              "id": "AUH",
              "time": "2025-03-01 21:45"
            },
            "arrival_airport": {
              "name": "Incheon International Airport",
              "id": "ICN",
              "time": "2025-03-02 11:15"
            },
            "duration": 510,
            "airplane": "Boeing 787",
            "airline": "Etihad",
            "airline_logo": "https://www.gstatic.com/flights/airline_logos/70px/EY.png",
            "travel_class": "Economy",
            "flight_number": "EY 822",
            "legroom": "31 in",
            "extensions": [
              "Average legroom (31 in)",
              "Wi-Fi for a fee",
              "In-seat power & USB outlets",
              "On-demand video",
              "Carbon emissions estimate: 397 kg"
            ],
            "overnight": true
          }
        ],
        "layovers": [
          {
            "duration": 620,
            "name": "Zayed International Airport",
            "id": "AUH"
          }
        ],
        "total_duration": 1895,
        "carbon_emissions": {
          "this_flight": 1275000,
          "typical_for_this_route": 922000,
          "difference_percent": 38
        },
        "price": 876,
        "type": "One way",
        "airline_logo": "https://www.gstatic.com/flights/airline_logos/70px/EY.png",
        "booking_token": "WyJDalJJU1c1Rk5YVjNiV3hGZWpSQlFUTmxibWRDUnkwdExTMHRMUzB0TFhCcWRIb3hNMEZCUVVGQlIyVXRabk5SVFhGWk0ydEJFZ2xGV1RKOFJWazRNaklhQ3dpU3JBVVFBaG9EVlZORU9CeHdrcXdGIixbWyJKRksiLCIyMDI1LTAyLTI4IiwiQVVIIixudWxsLCJFWSIsIjIiXSxbIkFVSCIsIjIwMjUtMDMtMDEiLCJJQ04iLG51bGwsIkVZIiwiODIyIl1dXQ=="
      },
      {
        "flights": [
          {
            "departure_airport": {
              "name": "John F. Kennedy International Airport",
              "id": "JFK",
              "time": "2025-02-28 00:50"
            },
            "arrival_airport": {
              "name": "Incheon International Airport",
              "id": "ICN",
              "time": "2025-03-01 06:30"
            },
            "duration": 940,
            "airplane": "Boeing 747",
            "airline": "Korean Air",
            "airline_logo": "https://www.gstatic.com/flights/airline_logos/70px/KE.png",
            "travel_class": "Economy",
            "flight_number": "KE 86",
            "ticket_also_sold_by": [
              "Delta"
            ],
            "legroom": "33 in",
            "extensions": [
              "Above average legroom (33 in)",
              "In-seat power & USB outlets",
              "On-demand video",
              "Carbon emissions estimate: 998 kg"
            ],
            "overnight": true
          }
        ],
        "total_duration": 940,
        "carbon_emissions": {
          "this_flight": 998000,
          "typical_for_this_route": 922000,
          "difference_percent": 8
        },
        "price": 1163,
        "type": "One way",
        "airline_logo": "https://www.gstatic.com/flights/airline_logos/70px/KE.png",
        "booking_token": "WyJDalJJU1c1Rk5YVjNiV3hGZWpSQlFUTmxibWRDUnkwdExTMHRMUzB0TFhCcWRIb3hNMEZCUVVGQlIyVXRabk5SVFhGWk0ydEJFZ1JMUlRnMkdnc0l6SXdIRUFJYUExVlRSRGdjY015TUJ3PT0iLFtbIkpGSyIsIjIwMjUtMDItMjgiLCJJQ04iLG51bGwsIktFIiwiODYiXV1d"
      }
    ],
    "price_insights": {
      "lowest_price": 686,
      "price_level": "high",
      "typical_price_range": [
        465,
        570
      ],
      "price_history": [
        [
          1735275600,
          493
        ],
        [
          1735362000,
          493
        ],
        [
          1735448400,
          493
        ],
        [
          1735534800,
          493
        ],
        [
          1735621200,
          525
        ],
        [
          1735707600,
          533
        ],
        [
          1735794000,
          534
        ],
        [
          1735880400,
          534
        ],
        [
          1735966800,
          534
        ],
        [
          1736053200,
          534
        ],
        [
          1736139600,
          506
        ],
        [
          1736226000,
          494
        ],
        [
          1736312400,
          534
        ],
        [
          1736398800,
          494
        ],
        [
          1736485200,
          494
        ],
        [
          1736571600,
          494
        ],
        [
          1736658000,
          494
        ],
        [
          1736744400,
          494
        ],
        [
          1736830800,
          494
        ],
        [
          1736917200,
          494
        ],
        [
          1737003600,
          594
        ],
        [
          1737090000,
          594
        ],
        [
          1737176400,
          592
        ],
        [
          1737262800,
          645
        ],
        [
          1737349200,
          620
        ],
        [
          1737435600,
          618
        ],
        [
          1737522000,
          526
        ],
        [
          1737608400,
          526
        ],
        [
          1737694800,
          526
        ],
        [
          1737781200,
          534
        ],
        [
          1737867600,
          534
        ],
        [
          1737954000,
          505
        ],
        [
          1738040400,
          534
        ],
        [
          1738126800,
          506
        ],
        [
          1738213200,
          506
        ],
        [
          1738299600,
          506
        ],
        [
          1738386000,
          567
        ],
        [
          1738472400,
          569
        ],
        [
          1738558800,
          534
        ],
        [
          1738645200,
          618
        ],
        [
          1738731600,
          655
        ],
        [
          1738818000,
          655
        ],
        [
          1738904400,
          658
        ],
        [
          1738990800,
          618
        ],
        [
          1739077200,
          618
        ],
        [
          1739163600,
          674
        ],
        [
          1739250000,
          631
        ],
        [
          1739336400,
          594
        ],
        [
          1739422800,
          647
        ],
        [
          1739509200,
          596
        ],
        [
          1739595600,
          627
        ],
        [
          1739682000,
          627
        ],
        [
          1739768400,
          647
        ],
        [
          1739854800,
          662
        ],
        [
          1739941200,
          648
        ],
        [
          1740027600,
          590
        ],
        [
          1740114000,
          686
        ],
        [
          1740200400,
          686
        ],
        [
          1740286800,
          686
        ],
        [
          1740373200,
          686
        ],
        [
          1740459600,
          686
        ]
      ]
    },
    "airports": [
      {
        "departure": [
          {
            "airport": {
              "id": "JFK",
              "name": "John F. Kennedy International Airport"
            },
            "city": "New York",
            "country": "United States",
            "country_code": "US",
            "image": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRa1dwH1NZQk4dsbPiyA9Vrq2RX75jXSZ-OkHn7NkLHl-11HercqDXoZ4p2cDxJkH6vca2degawrCzHEQ",
            "thumbnail": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQEaUa9NsdPWGpAUGkTApkZDT_4M6_6V8wTcC0v1b1wJAJX-BuMSiipXbsoznGgcI1xLOc5QiTcR_xovexgjdOz0gqQe0tRQ9h0bUkZ07Q"
          }
        ],
        "arrival": [
          {
            "airport": {
              "id": "ICN",
              "name": "Incheon International Airport"
            },
            "city": "Seoul",
            "country": "South Korea",
            "country_code": "KR",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaeVwigGtqKE3WHRHlXdsogk_5ZpMVDw4LeWvbjUbezo_88sViW8V2x7FhQlWlIeoYrrNajK9btPW_8w",
            "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxR7y_Va8i68eRlNWn4Omq2FHwgniQAe29Wb-NPNbNQCBFLvSQpBXOtZw5ZcbOagsrS83GufEhdkmk7mppoRZWU9enYxup7h1WZdBl7v4"
          }
        ]
      }
    ]
  }

// Data stuff
const data = {
    cpp: {"KE": 1.7,"UA": 1.3,"AS": 1.4,"AA": 1.3,"B6": 1.3},
    korean_miles: {"JFK":6865,"DFW":6824,"SEA":5196,"LAX":5973,"ORD":6538,"BOS":6808,"ATL":7132,"HKG":1295,"TPE":914,"PVG":525,"SIN":2883,"NRT":758,"HND":758,"ITM":525,"SZX":1281,"CAN":1269},
    nyc_miles: {"SFO":2565,"SEA":2402,"LAX":2454,"DFW":1372,"RDU":427,"ATL":745,"ORD":717,"MSP":1017,"MIA":1091},
    airports: ['JFK','LGA','EWR','BOS','PHL','BWI','IAD','DCA','RDU','CLT','ATL','MIA','FLL','MCO','DFW','IAH','ORD','DEN','MSP','CLE','LAS','LAX','SFO','OAK','PHX','DTW','SLC','SEA','HND','NRT','ITM','ICN','GMP','PEK','PVG','SHA','CAN','SZX','CKG','TSA','TPE','HKG','SIN','KLL'],
    airline_codes: {"Korean Air":"KE", "Asiana Airlines":"OZ", "Delta":"DE","China Airlines":"CI","United":"UA","ANA":"NH","Singapore Airlines":"SQ","EVA Air":"BR","American":"AA","JAL":"JL","Alaska":"AL","Cathay Pacific":"CX","JetBlue":"B6","Spirit":"NK","Frontier":"F9","Scoot":"TR","Jeju Air":"7C","T'Way Air":"TW","Air Premia":"YP","STARLUX Airlines":"JX", "Jin Air":"LJ"},
    cashback: 3,
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
    let flight_segment = 4.8
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
function pointData(airline,start,end,price) {
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
    } else {
        return {points:0,points_val:0}
    }
    return {points, points_val}
}

// create the popup
function openPopup(flight) {

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
    let airline_txt = flight.flights[0].arrival_airport.time.split(" ")[0]  // "3/15/2024 - American Airlines, American Airlines
    let layovers = null
    if (flight.layovers) {
        layovers = flight.layovers
    }

    let {points, points_val} = pointData(flight.flights[0].airline, flight.flights[0].departure_airport.id, flight.flights[flight.flights.length-1].arrival_airport.id, flight.price)
    let true_cost = (flight.price*(1-data.cashback/100)) - points_val/100
   
    let cost_diff_from_cheapest = true_cost - data.cheapest_price
    let time_diff_from_cheapest = (data.cheapest_duration - flight.total_duration)/60
    let cost_per_hr = parseFloat(cost_diff_from_cheapest / (time_diff_from_cheapest)).toFixed(2)
    if (cost_per_hr < 0) {
        cost_per_hr = 0
    }

    console.log(data.cheapest_price)

    let stats_title = document.createElement('div')
    let stats_points = document.createElement('div')
    let stats_points_value = document.createElement('div')
    let stats_true_cost = document.createElement('div')
    let stats_cost_per_hr = document.createElement('div')

    flight.flights.forEach((leg,i) => {
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
    })

    title.appendChild(logo)
    let titleText = document.createElement('div')
    titleText.innerHTML = airline_txt
    titleText.innerHTML += ' $' + flight.price
    title.appendChild(titleText)

    stats_title.innerHTML = 'Stats'
    stats_title.setAttribute('style', 'font-size: 24px;')
    stats_title.setAttribute('style', 'margin-bottom: 1em;')
    stats.appendChild(stats_title)
    stats_points.innerHTML = `Points Earned: ${parseInt(points)}`
    stats.appendChild(stats_points)
    stats_points_value.innerHTML = `Points Value: $${parseInt(points_val/100)}`
    stats.appendChild(stats_points_value)
    stats_true_cost.innerHTML = `True Cost: $${parseFloat(true_cost).toFixed(2)}`
    stats.appendChild(stats_true_cost)
    stats_cost_per_hr.innerHTML = `Extra Cost/Hour: $${cost_per_hr}`
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
    bigbutton.style.display = 'none'
    const start = start_input.value
    const end = end_input.value
    const date = date_input.value
    const gl = 'us'
    const hl = 'en'  // ko for korean
    const currency= 'USD'
    const type = 2  // 1 for round-trip, 2 for one-way, 3 for multi-city
    const sort_by = 2  // 1 for best, 2 for price, 3 for departure time, 4 for arrival time, 5 for duration
    
    if (!start || !end || !date) {
        console.error('start location, end location, or date is invalid')
        bigbuttonmsg.innerHTML = 'Please enter valid start location, end location, and date'
    } else {
        airlines.style.display = 'block'
        const url = `http://localhost:3000/api/search?start=${start}&end=${end}&date=${date}&gl=${gl}&hl=${hl}&currency=${currency}&type=${type}&sort_by=${sort_by}`
        console.log(url)
        try {
            // comment this to toggle API
            const response = await fetch(url)
            if (!response.ok) {
                throw new Error(`HTTP Error: Status: ${response.status}`)
            }
            const data = await response.json()
            console.log(data)
            result = data
            console.log(result)
            
            // result = mock  // delete this
            generateList(result)
        } catch (error) {
            console.error('Search failed')
        }
    }
}

bigbutton.addEventListener('click', search)
search_btn.addEventListener('click', search)

generateList = (flightdata) => {
    console.log(flightdata)
    results.innerHTML = ''

    // TODO: Fix the cost per hour thing being broken when filtering out the cheapest flight
    data.cheapest_duration = flightdata.other_flights[0].total_duration
    data.cheapest_price = flightdata.other_flights[0].price
    let search_info = document.createElement('div')
    let sit = `Results for flights from ${flightdata.search_parameters.departure_id} to ${flightdata.search_parameters.arrival_id} on ${flightdata.search_parameters.outbound_date}`
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


