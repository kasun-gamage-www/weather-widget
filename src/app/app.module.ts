import { HttpClient, HttpClientModule } from '@angular/common/http'
import { ErrorHandler, NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatIconModule } from '@angular/material/icon'

import { AppComponent } from './app.component'
import { ForecastChipComponent } from './components/forecast-chip/forecast-chip.component'
import { SpeedUnitPipe } from './@theme/pipes/speed-unit.pipe'
import { DistanceUnitPipe } from './@theme/pipes/distance-unit.pipe'
import { GlobalErrorHandler } from './@core/errors/global-error-handler'
import { MatSnackBarModule } from '@angular/material/snack-bar'

@NgModule({
  declarations: [
    AppComponent,
    ForecastChipComponent,
    SpeedUnitPipe,
    DistanceUnitPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatIconModule,
    MatSnackBarModule
  ],
  providers: [HttpClient,
    {
      provide: ErrorHandler,
      useClass: GlobalErrorHandler
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
