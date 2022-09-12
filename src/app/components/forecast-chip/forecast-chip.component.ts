import { Component, Input, OnInit } from '@angular/core'
import IconMapping from 'src/app/@core/util/icon-mapping'
import UnitHelper from 'src/app/@core/util/units-helper'

@Component({
  selector: 'app-forecast-chip',
  templateUrl: './forecast-chip.component.html',
  styleUrls: ['./forecast-chip.component.scss']
})
export class ForecastChipComponent implements OnInit {
  @Input() forecastSummary: any = {}
  @Input() measurementSystem: 'Imperial' | 'Metric' = 'Metric'
  @Input() isTomorrow: boolean = false

  conditionIcon: string = ''

  constructor() {
  }

  ngOnInit(): void {
    this.conditionIcon = IconMapping.getIconURIByCode(this.forecastSummary.Day.Icon)
  }

  //Can be abstracted as a custom pipe as well. Would be more efficient in terms of performance
  getTemperatureVal(fValue: number) {
    return 'Metric' === this.measurementSystem ? UnitHelper.fahrenheitToCelsius(fValue) : fValue
  }

}
