import { Component } from '@angular/core'
import { MockWeatherService } from './@core/services/mock/mock-weather.service'
import WeatherService from './@core/services/weather.service'
import Geo from './@core/util/geo'
import IconMapping from './@core/util/icon-mapping'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [WeatherService, MockWeatherService]
})
export class AppComponent {
  /*UI State*/
  title = 'weather widget'
  tempratureUnit: '°C' | '°F' = '°C'
  //---
  selectedDate: Date = new Date()
  selectedLocation: string = ''

  /*Data - static*/
  weatherData: any | null = null
  forecastDays = [...Array(5).keys()]
  forecast: Array<object | any> | any = [...Array(5).keys()]
  conditionIcon: string | undefined

  constructor(private weather: WeatherService, private weatherMock: MockWeatherService) {
    weatherMock.getCurrentCondition(null).subscribe(weatherData => {
      console.log(weatherData)
      this.weatherData = weatherData
      this.conditionIcon = IconMapping.getIconURIByCode(weatherData[0]['WeatherIcon'])
    })

    weatherMock.getForecast('').subscribe(forecast => {
      this.forecast = forecast.DailyForecasts
      console.log(this.forecast)
      //   this.conditionIcon = IconMapping.getIconURIByCode(weatherData[0]['WeatherIcon'])
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