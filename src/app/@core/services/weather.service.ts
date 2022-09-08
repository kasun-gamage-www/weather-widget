import { Injectable } from '@angular/core'
import { HttpClient, HttpParams } from '@angular/common/http'
import { retry } from 'rxjs/operators'

@Injectable()
export class WeatherService {

  constructor(private http: HttpClient) { }

  //concrete implementation with AccuWeather. To be abstracted later
  getCurrentCondition(location: any) {
    return this.http.get<object>('http://dataservice.accuweather.com/currentconditions/v1/311399?apikey=Al3IHDAr6CSBAUc5LHQdAlGlsAqqAUrN', {
      params : {}
    })
  }
}
