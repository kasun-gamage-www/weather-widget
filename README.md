# Weather Widget by Anupama

This is a simple web application made with Angular that display the weather condition and forecasts at any location on earth.
Users can choose between Metric and Imperial measurement systems to display the data. (All displayed units are based on the selected system)

Data is obtained via the AccuWeather API

Default location is set to Los Angeles, United States.

A live demo of the latest build can be accessed via [Vercel](https://weather-widget-lilac.vercel.app).

# Project Setup for Testing

1. Clone this repo with `git clone https://github.com/kasun-gamage-www/weather-widget.git`.

2. Make sure Node.js(v16+ recommended), NPM and AngularCLI(v14+) are installed on the machine.

3. Navigate to the root directory of the repo (weather-widget by default).

4. Issue the `npm install` command (or another package manager such as yarn) to install the dependencies.

5. Issue the `npm start` command or `ng serve` to serve.

6. Navigate to `localhost:4200` on a browser of your preference.

# Limitations and Future Enhacements

Codebase
* This application is strongly coupled with the accuweather API, this should ideally be abstracted out with the adapter pattern (combined with adapter or adapter factory to be able to dynamically change the API provider).
* Error handling capabilities are limited and should be improved.
* API Key should be removed from the sourcecode and be obtained dynamically either via a proxy or be configured alongside the CI/CD pipeline.
* All icons to be locally stored as assets.
* Unit tests to be added.
* The application is too simple to be modularized and could be split into modules with expansion.

Features
* Currently the user can view the weather conditions for the current day and for 5 days into the future. This is a limiation set by the free plan of the API provider. This can be expanded to enable users to view weather conditions of past days and for more than 5 days into the future.
* Currently the data is obtained solely via AccuWeather API. User can be given the option to dynamically pick the provider.
* Users could be given the ability to pick the preffered unit system and the precision for each indicator separately.
* Only the day time forecasts are shown. This can be alternated with a timer(switch every 10,000ms or so) or by a button to switch between day and night forecasts.
* Loading screen to be added.

Mobile Support
* The UI of the application is responsive and is compatible with most device screens. This could be upgraded to a PWA in future.