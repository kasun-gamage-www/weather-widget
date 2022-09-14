import { HttpClient, HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { MatIconModule } from '@angular/material/icon'

import { AppComponent } from './app.component'
import { ForecastChipComponent } from './components/forecast-chip/forecast-chip.component';
import { SpeedUnitPipe } from './@theme/pipes/speed-unit.pipe';
import { DistanceUnitPipe } from './@theme/pipes/distance-unit.pipe'

@NgModule({
  declarations: [
    AppComponent,
    ForecastChipComponent,
    SpeedUnitPipe,
    DistanceUnitPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatIconModule
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
