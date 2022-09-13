import { Component } from '@angular/core'
import { GeoLocationService } from './@core/services/geo-location.service'
import { MockWeatherService } from './@core/services/mock/mock-weather.service'
import WeatherService from './@core/services/weather.service'
import Geo from './@core/util/geo'
import IconMapping from './@core/util/icon-mapping'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [WeatherService, MockWeatherService, GeoLocationService]
})
export class AppComponent {
  /*UI State*/
  title = 'weather widget'
  unitType: 'Imperial' | 'Metric' = 'Metric'
  searchMode: boolean = false
  //---
  selectedDate: Date = new Date()
  selectedLocation: object | any = {
    Key: '347625',
    EnglishName: 'Los Angeles',
    Country: { EnglishName: 'United States' }
  }

  /*Data - static*/
  weatherData: any | null = null
  forecast: Array<object | any> | any = []
  conditionIcon: string | undefined

  /*
  truthy : location list from API
  undefined : currently nothing to search
  null | empty array : queried but no results*/
  locationQuery: any

  constructor(private weather: WeatherService, private weatherM: MockWeatherService, private geo: GeoLocationService) {
    this.refreshAll()
  }

  refreshAll() {
    this.weather.getCurrentCondition(this.selectedLocation.Key).subscribe(weatherData => {
      this.weatherData = weatherData
      this.conditionIcon = IconMapping.getIconURIByCode(weatherData[0]['WeatherIcon'])
    })

    this.weather.getForecast(this.selectedLocation?.Key || '347625').subscribe(forecast => {
      this.forecast = forecast.DailyForecasts;
      console.log(forecast)
    })

    //this.weatherM.getForecast(this.selectedLocation.Key).subscribe(forecast => { this.forecast = forecast.DailyForecasts; console.log(forecast) })

  }

  getCurrentLocationWeather() {
    Geo.fetchUserLocation(position => {
      this.geo.getLocationByCoordinates(position['lat'], position['lng']).subscribe(locationDetails => {
        this.selectedLocation = locationDetails
        this.refreshAll()
      })
    })
  }

  searchLocation(target: any) {
    if (target.value) {
      this.searchMode = true
      this.geo.getLocationsByFullName(target.value).subscribe((locationDetails: any) => this.locationQuery = locationDetails)
    } else {
      //if the searchbox is cleared
      this.searchMode = false
      this.locationQuery = []
    }
  }

  selectLocation(queryIndex: number) {
    this.selectedLocation = this.locationQuery[queryIndex]
    this.refreshAll()
    this.locationQuery = []
    this.searchMode = false
  }

  setMeasurementSys(selectedSys: 'Imperial' | 'Metric') {
    this.unitType = selectedSys
  }

  switchMode(input: any) {
    console.log(input.value)
    if (input?.value) this.searchMode = true
    else this.searchMode = false
  }

}