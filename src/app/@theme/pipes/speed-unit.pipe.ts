import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
  name: 'speedUnit'
})
export class SpeedUnitPipe implements PipeTransform {

  /*
    Convert
    kmph to km/h | mph to mi/h OR
    km/h to kmph | mi/h to mph
  */
  transform(unit: string, perSymbol: '/' | 'p' = '/'): string {
    if (unit.includes('km')) {
      return unit.replace(this.getAltSymbol(perSymbol), perSymbol)
    }
    return unit.replace(this.getAltSymbol(perSymbol), perSymbol).replace('mi', 'm')
  }

  getAltSymbol(symbol: string): string {
    return '/' === symbol ? 'p' : '/'
  }

}