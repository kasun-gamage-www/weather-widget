import { Component } from '@angular/core'
import { MockWeatherService } from './@core/services/mock/mock-weather.service'
import WeatherService from './@core/services/weather.service'
import Geo from './@core/util/geo'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [MockWeatherService]
})
export class AppComponent {
  /*UI State*/
  title = 'weather-widget'
  tempratureUnit: '°C' | '°F' = '°C'
  //---
  selectedDate: Date = new Date()
  selectedLocation: string = ''

  /*Data - static*/
  weatherData: any | null = null
  forecastDays = [...Array(5).keys()]

  constructor(private weather: MockWeatherService) {
    weather.getCurrentCondition(null).subscribe(weatherData => {
      console.log(weatherData)
      this.weatherData = weatherData
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