import { MeasuredValue } from "src/app/@types/measured-value"
import { WeatherCondition } from "src/app/@types/weather-condition"

/* An interface modelling weather data consumed by the application.
Loosely based on AccuWeather API data
Naming conventions are also based on the same */
export interface WeatherData {
    WeatherText: WeatherCondition
    WeatherIcon: number
    IsDayTime: boolean
    Temperature: MeasuredValue,
    RelativeHumidity: number,
    Wind: {
        Direction: {
            Degrees: number,
            Localized: string,
            English: string
        },
        Speed: MeasuredValue
    },
    Visibility: MeasuredValue,
    Pressure: MeasuredValue
}