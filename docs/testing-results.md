
# Testing Results – Weather Now

## 1. Introduction

This document describes the testing performed on the Weather Now application.

The purpose of testing is to verify that users can search for weather information and that the application responds correctly to different situations.

## 2. Test Environment

- Application: Weather Now
- Frontend: React and JavaScript
- Weather Provider: Open-Meteo API
- Hosting Platform: Vercel
- Browser: Microsoft Edge
- Deployment: Production

## 3. Functional Testing

### Test Case 1: Search for Bangkok

- Input: Bangkok
- Expected Result: Display weather information for the selected location.
- Actual Result: The application displayed the location, temperature, weather conditions, humidity, wind speed, and tomorrow's forecast.
- Status: Passed

### Test Case 2: Search for Washington

- Input: Washington
- Expected Result: Display weather information for Washington D.C.
- Actual Result: The application displayed Washington D.C., United States, with current weather information and tomorrow's forecast.
- Status: Passed

### Test Case 3: Search for an Invalid City

- Input: asdasdasd
- Expected Result: Display a friendly error message.
- Actual Result: The application displayed "City not found. Please try another city."
- Status: Passed

## 4. User Interface Testing

The application was tested to verify that:

- The search input is visible.
- The Search button works.
- Weather information is displayed clearly.
- The weather card is readable.
- The application provides feedback when a city cannot be found.

Result: Passed based on the tested scenarios.

## 5. Availability Testing

The application includes error handling using try-catch.

When a city cannot be found, the application displays a friendly error message instead of showing an empty result.

The application also includes a loading message while waiting for weather information.

A complete external API outage test has not yet been performed.

## 6. Testing Summary

| Test Case | Result |
|---|---|
| Bangkok weather search | Passed |
| Washington weather search | Passed |
| Invalid city handling | Passed |
| Weather information display | Passed |
| Tomorrow's forecast display | Passed |

## 7. Conclusion

The testing results show that the main features of Weather Now are working as expected in the tested environment.

Users can search for cities, view current weather conditions, and check tomorrow's forecast.

The application also handles invalid city names by displaying a friendly error message.

Further testing with an unavailable weather API would help verify the application's availability under failure conditions.
