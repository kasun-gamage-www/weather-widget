import { HttpClient, HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { MatIconModule } from '@angular/material/icon'

import { AppComponent } from './app.component'
import { ForecastChipComponent } from './components/forecast-chip/forecast-chip.component'

@NgModule({
  declarations: [
    AppComponent,
    ForecastChipComponent
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
