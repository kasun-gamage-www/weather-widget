import { Injectable } from '@angular/core'
import { HttpClient, HttpParams } from '@angular/common/http'
import { retry } from 'rxjs/operators'
import { environment } from 'src/environments/environment'

@Injectable()
export default class WeatherService {

  constructor(private http: HttpClient) { }

  /*concrete implementation with AccuWeather. To be abstracted later.
  API URI should ideally be obtained through provider object*/
  getCurrentCondition(location: any) {
    return this.http.get<object | any>(`http://dataservice.accuweather.com/currentconditions/v1/${location}?apikey=${environment.API_KEY}`, {
      params: new HttpParams().append('details', true)//.append('apiKey', Al3IHDAr6CSBAUc5LHQdAlGlsAqqAUrN)
    }).pipe(retry(3))
  }

  getForecast(location: any) {
    return this.http.get<object | any>(`http://dataservice.accuweather.com/forecasts/v1/daily/5day/${location}?apikey=${environment.API_KEY}`, {
      params: {}
    }).pipe(retry(3))
  }
}
