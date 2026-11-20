
# Architecture Decisions – Weather Now

## 1. System Overview

Weather Now is a web application developed using React and JavaScript. It allows users to search for weather information by entering a city name.

The application retrieves location information and weather data from the Open-Meteo API. The results are displayed through a simple and user-friendly interface.

## 2. Technology Selection

### React
React was selected to build the user interface. It allows the application to update weather information dynamically without reloading the entire page.

### JavaScript
JavaScript handles user interactions, API requests, and weather data processing.

### CSS
CSS is used to create the visual design, including the background, search form, and weather information card.

### Open-Meteo API
Open-Meteo provides free weather data without requiring an API key for this project.

### Vercel
Vercel is used to deploy the application and make it accessible through a public website URL.

## 3. System Architecture

The application follows a simple client-side architecture.

The main components are:

1. User Interface – Allows users to enter a city name and view weather information.
2. Geocoding API – Converts the city name into geographic coordinates.
3. Weather API – Retrieves current weather conditions and forecast information.
4. Error Handling – Handles failed requests and invalid city names.
5. Vercel Hosting – Hosts the application online.

## 4. Data Flow

The application follows these steps:

1. The user enters a city name.
2. React sends a request to the Open-Meteo Geocoding API.
3. The API returns the city's geographic coordinates.
4. The application sends another request to the Open-Meteo Weather API.
5. The API returns current weather and forecast data.
6. React displays the results to the user.

## 5. Availability Design

Availability is the main architectural quality attribute of this project.

The application uses try-catch error handling to manage API request failures.

If a city cannot be found, the application displays a friendly message.

If the weather service is unavailable, the application displays an error message instead of crashing.

A loading message is also displayed while the application waits for API responses.

## 6. Design Decisions and Trade-offs

The project uses a client-side architecture because it is simple to develop and does not require a separate backend server.

Using Open-Meteo reduces development complexity because an API key is not required.

However, the application depends on an external weather service. If the API becomes unavailable, users may temporarily be unable to retrieve weather information.

The current version does not include cached weather data or an alternative weather provider.

## 7. Conclusion

The architecture of Weather Now focuses on simplicity, usability, and availability.

React provides a responsive user interface, while Open-Meteo provides weather information.

Error handling helps the application respond to unexpected problems and improves the overall user experience.
