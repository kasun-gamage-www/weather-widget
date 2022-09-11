import { HttpClient, HttpParams } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { retry } from 'rxjs'
import { environment } from 'src/environments/environment'

@Injectable()
export class GeoLocationService {

  constructor(private http: HttpClient) { }

  getLocationByCoordinates(lat: number = 0, lng: number = 0) {
    return this.http.get(`http://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=${environment.API_KEY}&q=6.7721%2C79.8777`, {
      //   params: new HttpParams().appendAll({q: `${lat},${lng}`})
    }).pipe(retry(3))
  }

  getLocationsByFullName(locationName: string) {
    return this.http.get(`http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${environment.API_KEY}&q=${locationName}`, {
      //   params: new HttpParams().appendAll({q: `${lat},${lng}`})
    }).pipe(retry(3))
  }
}
