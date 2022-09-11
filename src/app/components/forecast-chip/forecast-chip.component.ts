import { Component, Input, OnInit } from '@angular/core'
import IconMapping from 'src/app/@core/util/icon-mapping'

@Component({
  selector: 'app-forecast-chip',
  templateUrl: './forecast-chip.component.html',
  styleUrls: ['./forecast-chip.component.scss']
})
export class ForecastChipComponent implements OnInit {
  @Input()forecastSummary : any = {}

  conditionIcon : string = ''

  constructor() { 
  }

  ngOnInit(): void {
    this.conditionIcon = IconMapping.getIconURIByCode(this.forecastSummary.Day.Icon)
  }

}
