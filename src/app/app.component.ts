import { Component } from '@angular/core'
import { ForecastData } from './@core/models/forecast-data'
import { WeatherData } from './@core/models/weather-data'
import { GeoLocationService } from './@core/services/geo-location.service'
import WeatherService from './@core/services/weather.service'
import Geo from './@core/util/geo'
import IconMapping from './@core/util/icon-mapping'
import { MeasurementSystem } from './@types/measurement-type'
import { WGeoLocation } from './@types/w-geo-location'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [WeatherService, GeoLocationService]
})
export class AppComponent {
  /*UI State*/
  unitType: MeasurementSystem = 'Metric'
  searchMode: boolean = false
  //======
  selectedDate: Date = new Date()
  selectedLocation: WGeoLocation = {
    Key: 347625,
    EnglishName: 'Los Angeles',
    Country: { EnglishName: 'United States' }
  }
  /*Data - static*/
  weatherData: WeatherData | undefined
  forecast: Array<ForecastData> | undefined = []
  conditionIcon: string | undefined

  /*
  truthy : location list from API
  undefined : currently nothing to search
  null | empty array : queried but no results*/
  locationQuery: any

  constructor(private weather: WeatherService, private geo: GeoLocationService) {
    this.refreshAll()
  }

  refreshAll() {
    this.weather.getCurrentCondition(this.selectedLocation.Key).subscribe((weatherData: WeatherData) => {
      this.weatherData = weatherData
      this.conditionIcon = IconMapping.getIconURIByCode(weatherData.WeatherIcon)
    })

    this.weather.getForecast(this.selectedLocation?.Key || 347625).subscribe((forecast: Array<ForecastData>) => {
      this.forecast = forecast
    })

  }

  getCurrentLocationWeather() {
    Geo.fetchUserLocation(position => {
      this.geo.getLocationByCoordinates(position['lat'], position['lng']).subscribe((locationDetails: WGeoLocation) => {
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
      this.locationQuery = undefined
    }
  }

  selectLocation(queryIndex: number) {
    this.selectedLocation = this.locationQuery[queryIndex]
    this.refreshAll()
    this.locationQuery = undefined
    this.searchMode = false
  }

  setMeasurementSys(selectedSys: 'Imperial' | 'Metric') {
    this.unitType = selectedSys
  }

  switchMode(input: any) {
    if (input?.value) this.searchMode = true
    else {
      this.searchMode = false
      this.locationQuery = undefined
    }
  }

}