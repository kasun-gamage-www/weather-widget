const weatherStrings = [
    'Cloudy', 'Sunny', 'Mostly Sunny', 'Partly Sunny', 'Intermittent Clouds', 'Hazy Sunshine', 'Mostly Cloudy',
    'Cloudy', 'Dreary (Overcast)', 'Fog', 'Showers', 'Mostly Cloudy w/ Showers', 'Partly Sunny w/ Showers', 'T-Storms',
    'Mostly Cloudy w/ T-Storms', 'Partly Sunny w/ T-Storms', 'Rain', 'Flurries', 'Mostly Cloudy w/ Flurries',
    'Partly Sunny w/ Flurries', 'Snow', 'Mostly Cloudy w/ Snow', 'Ice', 'Sleet', 'Freezing Rain', 'Rain and Snow', 'Hot', 'Cold',
    'Windy', 'Clear', 'Mostly Clear', 'Partly Cloudy', 'Intermittent Clouds', 'Hazy Moonlight', 'Mostly Cloudy',
    'Partly Cloudy w/ Showers', 'Mostly Cloudy w/ Showers', 'Partly Cloudy w/ T-Storms', 'Mostly Cloudy w/ T-Storms',
    'Mostly Cloudy w/ Flurries', 'Mostly Cloudy w/ Snow'
] as const

/*
    equivalent to union
    type WeatherCondition = 'Cloudy' | 'Sunny' | 'Mostly Sunny' | ...
*/
export type WeatherCondition = typeof weatherStrings[number]
