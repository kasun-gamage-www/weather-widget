import { WeatherCondition } from "src/app/@types/weather-condition"

export interface ForecastData {
    Date: Date,
    Temperature: {
        Minimum: {
            Value: number,
            Unit: 'F' //can only be F
        },
        Maximum: {
            Value: number,
            Unit: 'F' //can only be F
        }
    },
    Day: {
        Icon: number,
        IconPhrase: WeatherCondition,
    }
}