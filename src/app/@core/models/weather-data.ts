/* An interface modelling weather data consumed by the application.
Loosely based on AccuWeather API data
Naming conventions are also based on the same */
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

type MeasuredValue = {
    Imperial: {
        Value: number
        Unit: string
    }
    Metric: {
        Value: number
        Unit: string
    }
}

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