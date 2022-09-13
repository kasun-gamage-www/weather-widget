/*
An interface modelling weather data consumed by the application.
Loosely based on AccuWeather API data
Naming conventions are also based on the same
*/
const weatherStrings = [
    'Cloudy', 'Sunny', 'Mostly Sunny', 'Partly Sunny', 'Intermittent Clouds', 'Hazy Sunshine', 'Mostly Cloudy',
    'Cloudy', 'Dreary (Overcast)', 'Fog', 'Showers', 'Mostly Cloudy w/ Showers', 'Partly Sunny w/ Showers', 'T-Storms',
    'Mostly Cloudy w/ T-Storms', 'Partly Sunny w/ T-Storms', 'Rain', 'Flurries', 'Mostly Cloudy w/ Flurries',
    'Partly Sunny w/ Flurries', 'Snow', 'Mostly Cloudy w/ Snow', 'Ice', 'Sleet', 'Freezing Rain', 'Rain and Snow', 'Hot', 'Cold',
    'Windy', 'Clear', 'Mostly Clear', 'Partly Cloudy', 'Intermittent Clouds', 'Hazy Moonlight', 'Mostly Cloudy',
    'Partly Cloudy w/ Showers', 'Mostly Cloudy w/ Showers', 'Partly Cloudy w/ T-Storms', 'Mostly Cloudy w/ T-Storms',
    'Mostly Cloudy w/ Flurries', 'Mostly Cloudy w/ Snow'
] as const

type WeatherCondition = typeof weatherStrings[number]

export interface WeatherData {
    WeatherText: WeatherCondition
    WeatherIcon: number
    IsDayTime: boolean
    Temperature: {
        Metric: {
            Value: number,
            Unit: 'C', //Can only be C
        },
        Imperial: {
            Value: 86,
            Unit: 'F', //Can only be F
        }
    },
    RelativeHumidity: number,
    Wind: {
        Direction: {
            Degrees: number,
            Localized: string,
            English: string
        },
        Speed: {
            Metric: {
                Value: number,
                Unit: 'km/h' //Can only be km/h
            },
            Imperial: {
                Value: number,
                Unit: 'mi/h' //Can only be mi/h
            }
        }
    },
    Visibility: {
        Metric: {
            Value: number,
            Unit: 'km' //Can only be km
        },
        Imperial: {
            Value: number,
            Unit: 'mi' //Can only be mi
        }
    },
    Pressure: {
        Metric: {
            Value: number,
            Unit: 'mb' //Can only be mb
        },
        Imperial: {
            Value: number,
            Unit: 'inHg' //Can only be inHg
        }
    }
}