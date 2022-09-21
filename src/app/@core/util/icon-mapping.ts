import { WeatherCondition } from 'src/app/@types/weather-condition'

export default class IconMapping {
    static getIconURIByCode(code: number): string {
        return `https://developer.accuweather.com/sites/default/files/${code.toString().padStart(2, '0')}-s.png`
    }

    static getIconURIByText(weatherText: WeatherCondition, format: string = 'png'): string {
        return `../assets/img/${weatherText || 'Clouds'}.${format}`
    }
}