
# Quality Scenarios – Weather Now

## 1. Introduction

Weather Now is a web application that allows users to search for current weather information by entering a city name. The application uses the Open-Meteo API to retrieve weather data.

The main quality attribute of this project is Availability. The application should remain usable and provide clear feedback when something goes wrong.

## 2. Quality Attribute: Availability

Availability means that users can access and use the application when they need it.

Weather Now depends on an external API to retrieve weather information. If the API is unavailable or a request fails, the application should handle the problem without crashing.

## 3. Quality Scenarios

### Scenario 1: Successful Weather Search

- Source: User
- Stimulus: The user enters a valid city name.
- Environment: The application is running normally.
- Response: The system retrieves weather information from Open-Meteo.
- Response Measure: The application displays the city name, temperature, weather conditions, humidity, wind speed, and tomorrow's forecast.

### Scenario 2: Invalid City Name

- Source: User
- Stimulus: The user enters a city name that does not exist.
- Environment: The application is running normally.
- Response: The system displays a friendly error message.
- Response Measure: The user sees "City not found. Please try another city."

### Scenario 3: API Failure

- Source: External weather API
- Stimulus: The API becomes unavailable or returns an error.
- Environment: The user is searching for weather information.
- Response: The application catches the error and displays a friendly message.
- Response Measure: The application does not crash, and the user can try searching again.

### Scenario 4: Loading Weather Data

- Source: User
- Stimulus: The user submits a weather search.
- Environment: The application is waiting for an API response.
- Response: The application displays a loading message.
- Response Measure: The user receives feedback while the system retrieves weather information.

## 4. Testing Results

The following tests were performed:

| Test | Expected Result | Status |
|---|---|---|
| Search Bangkok | Display weather information | Passed |
| Search Washington D.C. | Display weather information | Passed |
| Search invalid city | Display friendly error | Passed |

API failure and loading behavior are included as required scenarios and should be tested separately.

## 5. Conclusion

Availability is important for Weather Now because the application depends on an external weather service.

By handling invalid city names, API errors, and loading states, the application can provide a better user experience.

The main goal is to make sure users receive clear feedback instead of seeing a blank page or application crash.
