# Weather Widget by Anupama

This is a simple web application made with Angular that display the weather condtion and forecasts at any location on earth.

Data is obtained via the AccuWeather API

Users can choose between Metric and Imperial measurement systems to display the data. (Once a measurement system is selected all units will change to that system)

# Project Setup

1. Clone this repo

2. Make sure Node.js(v18+), NPM and AngularCLI are installed locally on your machine

3. Navigate to the root directory of the repo

4. Use `npm install` (or a different package manager such as yarn) to install the dependencies.

5. Isse the `npm start` command or "ng serve"

6. Navigate to `localhost:4200` on a browser of your preference.

# Limitations and future enhacements

Codebase
* The Application is strongly coupled with the accuweather API, this should ideally be abstracted out with the adapter pattern (combined with adapter or adapter factory to be able to dynamically change the API provider).
* Error handling is limited and should be improved
* API Key should be removed from the codebase and be obtained dynamically either via a proxy or be configured alongside the CI/CD pipeline

Features
* Currently the user can view the weather conditions for the current day and for 5 days into the future. This is a limiation set by the free plan of the API provider. This can be expanded to enable users to view weather conditions of past days and for more than 5 days into the future.
* Currently the data is obtained solely via AccuWeather API. User can be given the option to dynamically pick the provider.
* Users could be given the ability to pick the preffered unit system for each indicator separately.

