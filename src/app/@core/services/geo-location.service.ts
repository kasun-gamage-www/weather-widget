import { HttpClient, HttpParams } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable, retry } from 'rxjs'
import { WGeoLocation } from 'src/app/@types/w-geo-location'
import { environment } from 'src/environments/environment'

@Injectable()
export class GeoLocationService {

  constructor(private http: HttpClient) { }

  /*API URI should ideally be obtained through provider object*/
  getLocationByCoordinates(lat: number = 0, lng: number = 0) : Observable<WGeoLocation> {
    return this.http.get<WGeoLocation>(`http://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=${environment.API_KEY}&q=${lat},${lng}`, {
      //   params: new HttpParams().appendAll({q: `${lat},${lng}`})
    }).pipe(retry(3))
  }

  getLocationsByFullName(locationName: string) : Observable<Array<WGeoLocation>> {
    return this.http.get<Array<WGeoLocation>>(`http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${environment.API_KEY}&q=${locationName}`, {
      //   params: new HttpParams().appendAll({q: `${lat},${lng}`})
    }).pipe(retry(3))
  }
}
