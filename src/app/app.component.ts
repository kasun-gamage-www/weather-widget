import { Component } from '@angular/core'
import { GeoLocationService } from './@core/services/geo-location.service'
import WeatherService from './@core/services/weather.service'
import Geo from './@core/util/geo'
import IconMapping from './@core/util/icon-mapping'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [WeatherService, GeoLocationService]
})
export class AppComponent {
  /*UI State*/
  title = 'weather widget'
  unitType: 'Imperial' | 'Metric' = 'Metric'
  searchMode: boolean = false
  //---
  selectedDate: Date = new Date()
  selectedLocation: object | any = {
    Key: '311399',
    EnglishName: 'Colombo',
    Country: { EnglishName: 'Sri Lanka' }
  }

  /*Data - static*/
  weatherData: any | null = null
  //forecastDays = [...Array(5).keys()]
  forecast: Array<object | any> | any = [...Array(5).keys()]
  conditionIcon: string | undefined

  locationQuery: any

  constructor(private weather: WeatherService, private geo: GeoLocationService) {
    this.refreshAll()
  }
  
  refreshAll(){
    this.weather.getCurrentCondition(this.selectedLocation.Key).subscribe(weatherData => {
      console.log(weatherData)
      this.weatherData = weatherData
      this.conditionIcon = IconMapping.getIconURIByCode(weatherData[0]['WeatherIcon'])
    })

    this.weather.getForecast(this.selectedLocation.Key).subscribe(forecast => {
      this.forecast = forecast.DailyForecasts
    })

  }

  getCurrentLocationWeather() {
    Geo.fetchUserLocation(position => {
      this.geo.getLocationByCoordinates(position['lat'], position['lng']).subscribe(locationDetails => {
        this.selectedLocation = locationDetails
        console.log(this.selectedLocation)
      })
    })
  }

  searchLocation(target: any) {
    if (target.value) {
      this.searchMode = true
      this.geo.getLocationsByFullName(target.value).subscribe((locationDetails: any) => {
        console.log(locationDetails)
        this.selectedLocation = locationDetails[0]
        this.locationQuery = locationDetails
      }, error => {
        console.log(error)
      })
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

  setMeasurementSys(selectedSys : 'Imperial' | 'Metric'){
    this.unitType = selectedSys
  }

}