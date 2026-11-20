
# 🌤️ Weather Now

A simple and user-friendly weather application that allows users to check current weather conditions and tomorrow's forecast by entering a city name.

## Project Overview

Weather Now is a web application developed using React and JavaScript. It retrieves weather information from the Open-Meteo API and displays the results in a clean and responsive interface.

## Live Demo

https://weather-now-kappa-five.vercel.app

## Features

- Search for weather by city name
- Display current temperature in Fahrenheit
- Show current weather conditions
- Display feels-like temperature
- Show humidity and wind speed
- Provide tomorrow's weather forecast
- Display a loading message while retrieving data
- Show friendly error messages for invalid cities or failed requests

## Technologies Used

- React
- JavaScript
- HTML
- CSS
- Open-Meteo API
- Vercel
- GitHub

## System Architecture

1. User enters a city name.
2. Geocoding API finds the city's coordinates.
3. Open-Meteo Weather API retrieves weather information.
4. React displays the weather results.
5. Error handling manages unsuccessful requests.

## Documentation

Project documentation is available in the `docs` folder:

- [Quality Scenarios](docs/quality-scenarios.md)
- [Architecture Decisions](docs/architecture-decisions.md)
- [Testing Results](docs/testing-results.md)

## Testing

The application has been tested with:

| Test Case | Result |
|---|---|
| Bangkok weather search | Passed |
| Washington D.C. weather search | Passed |
| Invalid city search | Passed |

External API outage testing is documented as a remaining validation task.

## Availability

The application uses error handling to manage invalid city names and unsuccessful API requests. Loading and error messages help users understand the application's current status.

## Author

Akarawat Saengthong

