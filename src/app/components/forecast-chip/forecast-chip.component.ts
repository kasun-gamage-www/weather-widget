import { Attribute, Component, Input, OnInit } from '@angular/core'
import { ForecastData } from 'src/app/@core/models/forecast-data'
import IconMapping from 'src/app/@core/util/icon-mapping'
import UnitHelper from 'src/app/@core/util/units-helper'
import { MeasurementSystem } from 'src/app/@types/measurement-type'

@Component({
  selector: 'app-forecast-chip',
  templateUrl: './forecast-chip.component.html',
  styleUrls: ['./forecast-chip.component.scss']
})
export class ForecastChipComponent implements OnInit {
  @Input() forecastSummary!: ForecastData
  @Input() measurementSystem: MeasurementSystem = 'Metric'

  conditionIcon: string = ''

  /* isTomorrow doesn't need to be checked for each change detection cycle*/
  constructor(@Attribute('isTomorrow') public isTomorrow: boolean = false) { }

  ngOnInit(): void {
    this.conditionIcon = IconMapping.getIconURIByCode(this.forecastSummary.Day.Icon)
  }

  //Can be abstracted as a custom pipe as well. Would be more efficient in terms of performance
  getTemperatureVal(fValue: number): number {
    return 'Metric' === this.measurementSystem ? UnitHelper.fahrenheitToCelsius(fValue) : fValue
  }

}
