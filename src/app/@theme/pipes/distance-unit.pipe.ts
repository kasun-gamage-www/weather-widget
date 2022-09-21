import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
  name: 'distanceUnit',
  pure: true
})
export class DistanceUnitPipe implements PipeTransform {

  transform(unit: string, format: 'SHORT' | 'NORMAL' | 'FULL' = 'FULL'): string {
    if ('mi' === unit) {
      switch (format) {
        case 'SHORT': return 'm'
          break
        case 'NORMAL': return 'mi'
          break
        case 'FULL': return 'miles'
        default:
          return unit
      }
    }
    return unit
  }

}