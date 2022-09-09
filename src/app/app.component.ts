import { Component } from '@angular/core'
import { WeatherService } from './@core/services/weather.service'
import Geo from './@core/util/geo'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [WeatherService]
})
export class AppComponent {
  /*UI State*/
  title = 'weather-widget'
  tempratureUnit: '°C' | '°F' = '°C'
  /*Data - static*/
  forecastDays = [...Array(5).keys()]

  constructor(private weather: WeatherService) {
    weather.getCurrentCondition(null).subscribe(weatherData => {
      console.log(weatherData)
    })

    Geo.fetchUserLocation(position => {
      console.log(position)
    })
  }

  getCurrentLocationWeather() {
    Geo.fetchUserLocation(position => {
      console.log(position)
    })
  }

}
