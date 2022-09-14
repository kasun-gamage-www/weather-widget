import { Component, ElementRef, Input, Renderer2, ViewChild } from '@angular/core'
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
  @ViewChild('searchBox') searchBox!: ElementRef<HTMLInputElement>
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

  constructor(private weather: WeatherService, private geo: GeoLocationService, private renderer: Renderer2) {
    this.refreshAll()
  }

  refreshAll(): void {
    this.weather.getCurrentCondition(this.selectedLocation.Key).subscribe((weatherData: WeatherData) => {
      this.weatherData = weatherData
      this.conditionIcon = IconMapping.getIconURIByCode(weatherData.WeatherIcon)
    })
    this.weather.getForecast(this.selectedLocation?.Key || 347625).subscribe((forecast: Array<ForecastData>) => {
      this.forecast = forecast
    })
  }

  getCurrentLocationWeather(): void {
    Geo.fetchUserLocation(position => {
      this.geo.getLocationByCoordinates(position).subscribe((locationDetails: WGeoLocation) => {
        this.selectedLocation = locationDetails
        this.refreshAll()
      })
    })
  }

  searchLocation(): void {
    if (this.searchBox.nativeElement.value) {
      this.geo.getLocationsByFullName(this.searchBox.nativeElement.value).subscribe((locationDetails: any) => this.locationQuery = locationDetails)
      this.searchMode = true
    } else {//if the searchbox is cleared
      this.searchMode = false
      this.locationQuery = undefined
    }
  }

  selectLocation(queryIndex: number): void {
    this.selectedLocation = this.locationQuery[queryIndex]
    this.refreshAll()
    this.locationQuery = undefined
    this.searchMode = false
    this.renderer.setProperty(this.searchBox.nativeElement, 'value', '')
  }

  setMeasurementSys(selectedSys: MeasurementSystem): void {
    this.unitType = selectedSys
  }

  switchMode(): void {
    if (this.searchBox.nativeElement.value) this.searchMode = true
    else {
      this.searchMode = false
      this.locationQuery = undefined
    }
  }

}