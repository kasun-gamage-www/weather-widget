import { Injectable } from '@angular/core'
import { HttpClient, HttpParams } from '@angular/common/http'
import { map, retry } from 'rxjs/operators'
import { environment } from 'src/environments/environment'
import { WeatherData } from '../models/weather-data'
import { ForecastData } from '../models/forecast-data'
import { Observable } from 'rxjs'

@Injectable()
export default class WeatherService {

  constructor(private http: HttpClient) { }

  /*concrete implementation with AccuWeather. To be abstracted later.
  API URI should ideally be obtained through provider object*/
  getCurrentCondition(location: number): Observable<WeatherData> {
    return this.http.get<WeatherData>(`http://dataservice.accuweather.com/currentconditions/v1/${location}?apikey=${environment.API_KEY}`, {
      params: new HttpParams().append('details', true)//.append('apiKey', Al3IHDAr6CSBAUc5LHQdAlGlsAqqAUrN)
    }).pipe(map((data: any) => data[0]), retry(3))
  }

  getForecast(location: number): Observable<Array<ForecastData>> {
    return this.http.get<Array<ForecastData>>(`http://dataservice.accuweather.com/forecasts/v1/daily/5day/${location}?apikey=${environment.API_KEY}`, {
      params: {}
    }).pipe(map((data: any) => data.DailyForecasts), retry(3))
  }
}
