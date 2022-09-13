import { Injectable } from '@angular/core'
import { HttpClient, HttpParams } from '@angular/common/http'
import { retry } from 'rxjs/operators'
import { from } from 'rxjs'

/*
A mock service for testing based on AccuWeather API
*/
@Injectable()
export class MockWeatherService {

  constructor(private http: HttpClient) { }

  //concrete implementation with AccuWeather. To be abstracted later
  getCurrentCondition(location: any) {
    return from([[
      {
        LocalObservationDateTime: '2022-09-11T13:27:00+05:30',
        EpochTime: 1662883020,
        WeatherText: 'Cloudy',
        WeatherIcon: 7,
        HasPrecipitation: false,
        PrecipitationType: null,
        IsDayTime: true,
        Temperature: {
          Metric: {
            Value: 29.8,
            Unit: 'C',
            UnitType: 17
          },
          Imperial: {
            Value: 86,
            Unit: 'F',
            UnitType: 18
          }
        },
        RealFeelTemperature: {
          Metric: {
            Value: 34.7,
            Unit: 'C',
            UnitType: 17,
            Phrase: 'Hot'
          },
          Imperial: {
            Value: 95,
            Unit: 'F',
            UnitType: 18,
            Phrase: 'Hot'
          }
        },
        RealFeelTemperatureShade: {
          Metric: {
            Value: 32.7,
            Unit: 'C',
            UnitType: 17,
            Phrase: 'Hot'
          },
          Imperial: {
            Value: 91,
            Unit: 'F',
            UnitType: 18,
            Phrase: 'Hot'
          }
        },
        RelativeHumidity: 71,
        IndoorRelativeHumidity: 71,
        DewPoint: {
          Metric: {
            Value: 24.1,
            Unit: 'C',
            UnitType: 17
          },
          Imperial: {
            Value: 75,
            Unit: 'F',
            UnitType: 18
          }
        },
        Wind: {
          Direction: {
            Degrees: 248,
            Localized: 'WSW',
            English: 'WSW'
          },
          Speed: {
            Metric: {
              Value: 23.7,
              Unit: 'km/h',
              UnitType: 7
            },
            Imperial: {
              Value: 14.7,
              Unit: 'mi/h',
              UnitType: 9
            }
          }
        },
        WindGust: {
          Speed: {
            Metric: {
              Value: 43.1,
              Unit: 'km/h',
              UnitType: 7
            },
            Imperial: {
              Value: 26.8,
              Unit: 'mi/h',
              UnitType: 9
            }
          }
        },
        UVIndex: 5,
        UVIndexText: 'Moderate',
        Visibility: {
          "Metric": {
            "Value": 11.3,
            "Unit": "km",
            "UnitType": 6
          },
          "Imperial": {
            "Value": 7,
            "Unit": "mi",
            "UnitType": 2
          }
        },
        ObstructionsToVisibility: "",
        CloudCover: 99,
        "Ceiling": {
          "Metric": {
            "Value": 9144,
            "Unit": "m",
            "UnitType": 5
          },
          "Imperial": {
            "Value": 30000,
            "Unit": "ft",
            "UnitType": 0
          }
        },
        "Pressure": {
          "Metric": {
            "Value": 1010,
            "Unit": "mb",
            "UnitType": 14
          },
          "Imperial": {
            "Value": 29.83,
            "Unit": "inHg",
            "UnitType": 12
          }
        },
        "PressureTendency": {
          "LocalizedText": "Falling",
          "Code": "F"
        },
        "Past24HourTemperatureDeparture": {
          "Metric": {
            "Value": 0.1,
            "Unit": "C",
            "UnitType": 17
          },
          "Imperial": {
            "Value": 0,
            "Unit": "F",
            "UnitType": 18
          }
        },
        "ApparentTemperature": {
          "Metric": {
            "Value": 35,
            "Unit": "C",
            "UnitType": 17
          },
          "Imperial": {
            "Value": 95,
            "Unit": "F",
            "UnitType": 18
          }
        },
        "WindChillTemperature": {
          "Metric": {
            "Value": 30,
            "Unit": "C",
            "UnitType": 17
          },
          "Imperial": {
            "Value": 86,
            "Unit": "F",
            "UnitType": 18
          }
        },
        "WetBulbTemperature": {
          "Metric": {
            "Value": 25.7,
            "Unit": "C",
            "UnitType": 17
          },
          "Imperial": {
            "Value": 78,
            "Unit": "F",
            "UnitType": 18
          }
        },
        "Precip1hr": {
          "Metric": {
            "Value": 0,
            "Unit": "mm",
            "UnitType": 3
          },
          "Imperial": {
            "Value": 0,
            "Unit": "in",
            "UnitType": 1
          }
        },
        "PrecipitationSummary": {
          "Precipitation": {
            "Metric": {
              "Value": 0,
              "Unit": "mm",
              "UnitType": 3
            },
            "Imperial": {
              "Value": 0,
              "Unit": "in",
              "UnitType": 1
            }
          },
          "PastHour": {
            "Metric": {
              "Value": 0,
              "Unit": "mm",
              "UnitType": 3
            },
            "Imperial": {
              "Value": 0,
              "Unit": "in",
              "UnitType": 1
            }
          },
          "Past3Hours": {
            "Metric": {
              "Value": 0.8,
              "Unit": "mm",
              "UnitType": 3
            },
            "Imperial": {
              "Value": 0.03,
              "Unit": "in",
              "UnitType": 1
            }
          },
          "Past6Hours": {
            "Metric": {
              "Value": 1.6,
              "Unit": "mm",
              "UnitType": 3
            },
            "Imperial": {
              "Value": 0.06,
              "Unit": "in",
              "UnitType": 1
            }
          },
          "Past9Hours": {
            "Metric": {
              "Value": 3.1,
              "Unit": "mm",
              "UnitType": 3
            },
            "Imperial": {
              "Value": 0.12,
              "Unit": "in",
              "UnitType": 1
            }
          },
          "Past12Hours": {
            "Metric": {
              "Value": 4.6,
              "Unit": "mm",
              "UnitType": 3
            },
            "Imperial": {
              "Value": 0.18,
              "Unit": "in",
              "UnitType": 1
            }
          },
          "Past18Hours": {
            "Metric": {
              "Value": 5.8,
              "Unit": "mm",
              "UnitType": 3
            },
            "Imperial": {
              "Value": 0.23,
              "Unit": "in",
              "UnitType": 1
            }
          },
          "Past24Hours": {
            "Metric": {
              "Value": 6.3,
              "Unit": "mm",
              "UnitType": 3
            },
            "Imperial": {
              "Value": 0.25,
              "Unit": "in",
              "UnitType": 1
            }
          }
        },
        "TemperatureSummary": {
          "Past6HourRange": {
            "Minimum": {
              "Metric": {
                "Value": 26.8,
                "Unit": "C",
                "UnitType": 17
              },
              "Imperial": {
                "Value": 80,
                "Unit": "F",
                "UnitType": 18
              }
            },
            "Maximum": {
              "Metric": {
                "Value": 29.8,
                "Unit": "C",
                "UnitType": 17
              },
              "Imperial": {
                "Value": 86,
                "Unit": "F",
                "UnitType": 18
              }
            }
          },
          "Past12HourRange": {
            "Minimum": {
              "Metric": {
                "Value": 24.5,
                "Unit": "C",
                "UnitType": 17
              },
              "Imperial": {
                "Value": 76,
                "Unit": "F",
                "UnitType": 18
              }
            },
            "Maximum": {
              "Metric": {
                "Value": 29.8,
                "Unit": "C",
                "UnitType": 17
              },
              "Imperial": {
                "Value": 86,
                "Unit": "F",
                "UnitType": 18
              }
            }
          },
          Past24HourRange: {
            Minimum: {
              Metric: {
                Value: 24.5,
                Unit: 'C',
                UnitType: 17
              },
              Imperial: {
                Value: 76,
                Unit: 'F',
                UnitType: 18
              }
            },
            Maximum: {
              Metric: {
                Value: 30.4,
                Unit: "C",
                UnitType: 17
              },
              Imperial: {
                Value: 87,
                Unit: "F",
                UnitType: 18
              }
            }
          }
        },
        MobileLink: 'http://www.accuweather.com/en/lk/colombo/311399/current-weather/311399?lang=en-us',
        Link: 'http://www.accuweather.com/en/lk/colombo/311399/current-weather/311399?lang=en-us'
      }
    ]])
  }

  getForecast(location: string) {
    return from([{
      "Headline": {
        "EffectiveDate": "2022-09-12T01:00:00+05:30",
        "EffectiveEpochDate": 1662924600,
        "Severity": 5,
        "Text": "Expect showery weather late Sunday night through late Monday night",
        "Category": "rain",
        "EndDate": "2022-09-13T07:00:00+05:30",
        "EndEpochDate": 1663032600,
        "MobileLink": "http://www.accuweather.com/en/lk/colombo/311399/daily-weather-forecast/311399?lang=en-us",
        "Link": "http://www.accuweather.com/en/lk/colombo/311399/daily-weather-forecast/311399?lang=en-us"
      },
      "DailyForecasts": [
        {
          "Date": "2022-09-11T07:00:00+05:30",
          "EpochDate": 1662859800,
          "Sun": {
            "Rise": "2022-09-11T06:02:00+05:30",
            "EpochRise": 1662856320,
            "Set": "2022-09-11T18:13:00+05:30",
            "EpochSet": 1662900180
          },
          "Moon": {
            "Rise": "2022-09-11T19:10:00+05:30",
            "EpochRise": 1662903600,
            "Set": "2022-09-12T07:32:00+05:30",
            "EpochSet": 1662948120,
            "Phase": "WaningGibbous",
            "Age": 15
          },
          "Temperature": {
            "Minimum": {
              "Value": 78,
              "Unit": "F",
              "UnitType": 18
            },
            "Maximum": {
              "Value": 86,
              "Unit": "F",
              "UnitType": 18
            }
          },
          "RealFeelTemperature": {
            "Minimum": {
              "Value": 83,
              "Unit": "F",
              "UnitType": 18,
              "Phrase": "Very Warm"
            },
            "Maximum": {
              "Value": 95,
              "Unit": "F",
              "UnitType": 18,
              "Phrase": "Hot"
            }
          },
          "RealFeelTemperatureShade": {
            "Minimum": {
              "Value": 83,
              "Unit": "F",
              "UnitType": 18,
              "Phrase": "Very Warm"
            },
            "Maximum": {
              "Value": 94,
              "Unit": "F",
              "UnitType": 18,
              "Phrase": "Hot"
            }
          },
          "HoursOfSun": 2.2,
          "DegreeDaySummary": {
            "Heating": {
              "Value": 0,
              "Unit": "F",
              "UnitType": 18
            },
            "Cooling": {
              "Value": 17,
              "Unit": "F",
              "UnitType": 18
            }
          },
          "AirAndPollen": [
            {
              "Name": "AirQuality",
              "Value": 0,
              "Category": "Good",
              "CategoryValue": 1,
              "Type": "Ozone"
            },
            {
              "Name": "Grass",
              "Value": 0,
              "Category": "Low",
              "CategoryValue": 1
            },
            {
              "Name": "Mold",
              "Value": 0,
              "Category": "Low",
              "CategoryValue": 1
            },
            {
              "Name": "Ragweed",
              "Value": 0,
              "Category": "Low",
              "CategoryValue": 1
            },
            {
              "Name": "Tree",
              "Value": 0,
              "Category": "Low",
              "CategoryValue": 1
            },
            {
              "Name": "UVIndex",
              "Value": 5,
              "Category": "Moderate",
              "CategoryValue": 2
            }
          ],
          "Day": {
            "Icon": 12,
            "IconPhrase": "Showers",
            "HasPrecipitation": true,
            "PrecipitationType": "Rain",
            "PrecipitationIntensity": "Light",
            "ShortPhrase": "A couple of showers",
            "LongPhrase": "Mostly cloudy with a couple of showers, mainly early in the day",
            "PrecipitationProbability": 68,
            "ThunderstormProbability": 14,
            "RainProbability": 68,
            "SnowProbability": 0,
            "IceProbability": 0,
            "Wind": {
              "Speed": {
                "Value": 10.4,
                "Unit": "mi/h",
                "UnitType": 9
              },
              "Direction": {
                "Degrees": 239,
                "Localized": "WSW",
                "English": "WSW"
              }
            },
            "WindGust": {
              "Speed": {
                "Value": 24.2,
                "Unit": "mi/h",
                "UnitType": 9
              },
              "Direction": {
                "Degrees": 244,
                "Localized": "WSW",
                "English": "WSW"
              }
            },
            "TotalLiquid": {
              "Value": 0.07,
              "Unit": "in",
              "UnitType": 1
            },
            "Rain": {
              "Value": 0.07,
              "Unit": "in",
              "UnitType": 1
            },
            "Snow": {
              "Value": 0,
              "Unit": "in",
              "UnitType": 1
            },
            "Ice": {
              "Value": 0,
              "Unit": "in",
              "UnitType": 1
            },
            "HoursOfPrecipitation": 1.5,
            "HoursOfRain": 1.5,
            "HoursOfSnow": 0,
            "HoursOfIce": 0,
            "CloudCover": 86,
            "Evapotranspiration": {
              "Value": 0.1,
              "Unit": "in",
              "UnitType": 1
            },
            "SolarIrradiance": {
              "Value": 2826.2,
              "Unit": "W/m²",
              "UnitType": 33
            }
          },
          "Night": {
            "Icon": 12,
            "IconPhrase": "Showers",
            "HasPrecipitation": true,
            "PrecipitationType": "Rain",
            "PrecipitationIntensity": "Moderate",
            "ShortPhrase": "Clouds with a shower late",
            "LongPhrase": "Considerable cloudiness with a shower late",
            "PrecipitationProbability": 68,
            "ThunderstormProbability": 14,
            "RainProbability": 68,
            "SnowProbability": 0,
            "IceProbability": 0,
            "Wind": {
              "Speed": {
                "Value": 6.9,
                "Unit": "mi/h",
                "UnitType": 9
              },
              "Direction": {
                "Degrees": 228,
                "Localized": "SW",
                "English": "SW"
              }
            },
            "WindGust": {
              "Speed": {
                "Value": 19.6,
                "Unit": "mi/h",
                "UnitType": 9
              },
              "Direction": {
                "Degrees": 230,
                "Localized": "SW",
                "English": "SW"
              }
            },
            "TotalLiquid": {
              "Value": 0.09,
              "Unit": "in",
              "UnitType": 1
            },
            "Rain": {
              "Value": 0.09,
              "Unit": "in",
              "UnitType": 1
            },
            "Snow": {
              "Value": 0,
              "Unit": "in",
              "UnitType": 1
            },
            "Ice": {
              "Value": 0,
              "Unit": "in",
              "UnitType": 1
            },
            "HoursOfPrecipitation": 1,
            "HoursOfRain": 1,
            "HoursOfSnow": 0,
            "HoursOfIce": 0,
            "CloudCover": 94,
            "Evapotranspiration": {
              "Value": 0.01,
              "Unit": "in",
              "UnitType": 1
            },
            "SolarIrradiance": {
              "Value": 15.8,
              "Unit": "W/m²",
              "UnitType": 33
            }
          },
          "Sources": [
            "AccuWeather"
          ],
          "MobileLink": "http://www.accuweather.com/en/lk/colombo/311399/daily-weather-forecast/311399?day=1&lang=en-us",
          "Link": "http://www.accuweather.com/en/lk/colombo/311399/daily-weather-forecast/311399?day=1&lang=en-us"
        },
        {
          "Date": "2022-09-12T07:00:00+05:30",
          "EpochDate": 1662946200,
          "Sun": {
            "Rise": "2022-09-12T06:02:00+05:30",
            "EpochRise": 1662942720,
            "Set": "2022-09-12T18:12:00+05:30",
            "EpochSet": 1662986520
          },
          "Moon": {
            "Rise": "2022-09-12T19:53:00+05:30",
            "EpochRise": 1662992580,
            "Set": "2022-09-13T08:21:00+05:30",
            "EpochSet": 1663037460,
            "Phase": "WaningGibbous",
            "Age": 16
          },
          "Temperature": {
            "Minimum": {
              "Value": 78,
              "Unit": "F",
              "UnitType": 18
            },
            "Maximum": {
              "Value": 87,
              "Unit": "F",
              "UnitType": 18
            }
          },
          "RealFeelTemperature": {
            "Minimum": {
              "Value": 83,
              "Unit": "F",
              "UnitType": 18,
              "Phrase": "Very Warm"
            },
            "Maximum": {
              "Value": 97,
              "Unit": "F",
              "UnitType": 18,
              "Phrase": "Hot"
            }
          },
          "RealFeelTemperatureShade": {
            "Minimum": {
              "Value": 83,
              "Unit": "F",
              "UnitType": 18,
              "Phrase": "Very Warm"
            },
            "Maximum": {
              "Value": 93,
              "Unit": "F",
              "UnitType": 18,
              "Phrase": "Hot"
            }
          },
          "HoursOfSun": 2,
          "DegreeDaySummary": {
            "Heating": {
              "Value": 0,
              "Unit": "F",
              "UnitType": 18
            },
            "Cooling": {
              "Value": 18,
              "Unit": "F",
              "UnitType": 18
            }
          },
          "AirAndPollen": [
            {
              "Name": "AirQuality",
              "Value": 0,
              "Category": "Good",
              "CategoryValue": 1,
              "Type": "Ozone"
            },
            {
              "Name": "Grass",
              "Value": 0,
              "Category": "Low",
              "CategoryValue": 1
            },
            {
              "Name": "Mold",
              "Value": 0,
              "Category": "Low",
              "CategoryValue": 1
            },
            {
              "Name": "Ragweed",
              "Value": 0,
              "Category": "Low",
              "CategoryValue": 1
            },
            {
              "Name": "Tree",
              "Value": 0,
              "Category": "Low",
              "CategoryValue": 1
            },
            {
              "Name": "UVIndex",
              "Value": 6,
              "Category": "High",
              "CategoryValue": 3
            }
          ],
          "Day": {
            "Icon": 12,
            "IconPhrase": "Showers",
            "HasPrecipitation": true,
            "PrecipitationType": "Rain",
            "PrecipitationIntensity": "Light",
            "ShortPhrase": "Mainly cloudy with a shower",
            "LongPhrase": "Mainly cloudy with a shower in spots",
            "PrecipitationProbability": 55,
            "ThunderstormProbability": 11,
            "RainProbability": 55,
            "SnowProbability": 0,
            "IceProbability": 0,
            "Wind": {
              "Speed": {
                "Value": 9.2,
                "Unit": "mi/h",
                "UnitType": 9
              },
              "Direction": {
                "Degrees": 229,
                "Localized": "SW",
                "English": "SW"
              }
            },
            "WindGust": {
              "Speed": {
                "Value": 20.7,
                "Unit": "mi/h",
                "UnitType": 9
              },
              "Direction": {
                "Degrees": 230,
                "Localized": "SW",
                "English": "SW"
              }
            },
            "TotalLiquid": {
              "Value": 0.05,
              "Unit": "in",
              "UnitType": 1
            },
            "Rain": {
              "Value": 0.05,
              "Unit": "in",
              "UnitType": 1
            },
            "Snow": {
              "Value": 0,
              "Unit": "in",
              "UnitType": 1
            },
            "Ice": {
              "Value": 0,
              "Unit": "in",
              "UnitType": 1
            },
            "HoursOfPrecipitation": 1,
            "HoursOfRain": 1,
            "HoursOfSnow": 0,
            "HoursOfIce": 0,
            "CloudCover": 89,
            "Evapotranspiration": {
              "Value": 0.11,
              "Unit": "in",
              "UnitType": 1
            },
            "SolarIrradiance": {
              "Value": 2783.6,
              "Unit": "W/m²",
              "UnitType": 33
            }
          },
          "Night": {
            "Icon": 40,
            "IconPhrase": "Mostly cloudy w/ showers",
            "HasPrecipitation": true,
            "PrecipitationType": "Rain",
            "PrecipitationIntensity": "Light",
            "ShortPhrase": "Some clouds with a shower",
            "LongPhrase": "Partly to mostly cloudy with a shower",
            "PrecipitationProbability": 83,
            "ThunderstormProbability": 17,
            "RainProbability": 83,
            "SnowProbability": 0,
            "IceProbability": 0,
            "Wind": {
              "Speed": {
                "Value": 6.9,
                "Unit": "mi/h",
                "UnitType": 9
              },
              "Direction": {
                "Degrees": 209,
                "Localized": "SSW",
                "English": "SSW"
              }
            },
            "WindGust": {
              "Speed": {
                "Value": 16.1,
                "Unit": "mi/h",
                "UnitType": 9
              },
              "Direction": {
                "Degrees": 229,
                "Localized": "SW",
                "English": "SW"
              }
            },
            "TotalLiquid": {
              "Value": 0.1,
              "Unit": "in",
              "UnitType": 1
            },
            "Rain": {
              "Value": 0.1,
              "Unit": "in",
              "UnitType": 1
            },
            "Snow": {
              "Value": 0,
              "Unit": "in",
              "UnitType": 1
            },
            "Ice": {
              "Value": 0,
              "Unit": "in",
              "UnitType": 1
            },
            "HoursOfPrecipitation": 1.5,
            "HoursOfRain": 1.5,
            "HoursOfSnow": 0,
            "HoursOfIce": 0,
            "CloudCover": 68,
            "Evapotranspiration": {
              "Value": 0.01,
              "Unit": "in",
              "UnitType": 1
            },
            "SolarIrradiance": {
              "Value": 16.5,
              "Unit": "W/m²",
              "UnitType": 33
            }
          },
          "Sources": [
            "AccuWeather"
          ],
          "MobileLink": "http://www.accuweather.com/en/lk/colombo/311399/daily-weather-forecast/311399?day=2&lang=en-us",
          "Link": "http://www.accuweather.com/en/lk/colombo/311399/daily-weather-forecast/311399?day=2&lang=en-us"
        },
        {
          "Date": "2022-09-13T07:00:00+05:30",
          "EpochDate": 1663032600,
          "Sun": {
            "Rise": "2022-09-13T06:01:00+05:30",
            "EpochRise": 1663029060,
            "Set": "2022-09-13T18:12:00+05:30",
            "EpochSet": 1663072920
          },
          "Moon": {
            "Rise": "2022-09-13T20:36:00+05:30",
            "EpochRise": 1663081560,
            "Set": "2022-09-14T09:10:00+05:30",
            "EpochSet": 1663126800,
            "Phase": "WaningGibbous",
            "Age": 17
          },
          "Temperature": {
            "Minimum": {
              "Value": 78,
              "Unit": "F",
              "UnitType": 18
            },
            "Maximum": {
              "Value": 86,
              "Unit": "F",
              "UnitType": 18
            }
          },
          "RealFeelTemperature": {
            "Minimum": {
              "Value": 83,
              "Unit": "F",
              "UnitType": 18,
              "Phrase": "Very Warm"
            },
            "Maximum": {
              "Value": 96,
              "Unit": "F",
              "UnitType": 18,
              "Phrase": "Hot"
            }
          },
          "RealFeelTemperatureShade": {
            "Minimum": {
              "Value": 83,
              "Unit": "F",
              "UnitType": 18,
              "Phrase": "Very Warm"
            },
            "Maximum": {
              "Value": 93,
              "Unit": "F",
              "UnitType": 18,
              "Phrase": "Hot"
            }
          },
          "HoursOfSun": 7.1,
          "DegreeDaySummary": {
            "Heating": {
              "Value": 0,
              "Unit": "F",
              "UnitType": 18
            },
            "Cooling": {
              "Value": 17,
              "Unit": "F",
              "UnitType": 18
            }
          },
          "AirAndPollen": [
            {
              "Name": "AirQuality",
              "Value": 0,
              "Category": "Good",
              "CategoryValue": 1,
              "Type": "Ozone"
            },
            {
              "Name": "Grass",
              "Value": 0,
              "Category": "Low",
              "CategoryValue": 1
            },
            {
              "Name": "Mold",
              "Value": 0,
              "Category": "Low",
              "CategoryValue": 1
            },
            {
              "Name": "Ragweed",
              "Value": 0,
              "Category": "Low",
              "CategoryValue": 1
            },
            {
              "Name": "Tree",
              "Value": 0,
              "Category": "Low",
              "CategoryValue": 1
            },
            {
              "Name": "UVIndex",
              "Value": 11,
              "Category": "Extreme",
              "CategoryValue": 5
            }
          ],
          "Day": {
            "Icon": 3,
            "IconPhrase": "Partly sunny",
            "HasPrecipitation": true,
            "PrecipitationType": "Rain",
            "PrecipitationIntensity": "Light",
            "ShortPhrase": "An afternoon shower in spots",
            "LongPhrase": "Partly sunny with a stray shower in the afternoon",
            "PrecipitationProbability": 56,
            "ThunderstormProbability": 11,
            "RainProbability": 56,
            "SnowProbability": 0,
            "IceProbability": 0,
            "Wind": {
              "Speed": {
                "Value": 9.2,
                "Unit": "mi/h",
                "UnitType": 9
              },
              "Direction": {
                "Degrees": 229,
                "Localized": "SW",
                "English": "SW"
              }
            },
            "WindGust": {
              "Speed": {
                "Value": 20.7,
                "Unit": "mi/h",
                "UnitType": 9
              },
              "Direction": {
                "Degrees": 237,
                "Localized": "WSW",
                "English": "WSW"
              }
            },
            "TotalLiquid": {
              "Value": 0.04,
              "Unit": "in",
              "UnitType": 1
            },
            "Rain": {
              "Value": 0.04,
              "Unit": "in",
              "UnitType": 1
            },
            "Snow": {
              "Value": 0,
              "Unit": "in",
              "UnitType": 1
            },
            "Ice": {
              "Value": 0,
              "Unit": "in",
              "UnitType": 1
            },
            "HoursOfPrecipitation": 0.5,
            "HoursOfRain": 0.5,
            "HoursOfSnow": 0,
            "HoursOfIce": 0,
            "CloudCover": 43,
            "Evapotranspiration": {
              "Value": 0.16,
              "Unit": "in",
              "UnitType": 1
            },
            "SolarIrradiance": {
              "Value": 5480.5,
              "Unit": "W/m²",
              "UnitType": 33
            }
          },
          "Night": {
            "Icon": 38,
            "IconPhrase": "Mostly cloudy",
            "HasPrecipitation": true,
            "PrecipitationType": "Rain",
            "PrecipitationIntensity": "Moderate",
            "ShortPhrase": "A thunderstorm in spots late",
            "LongPhrase": "Increasing amounts of clouds with a thunderstorm in parts of the area late",
            "PrecipitationProbability": 41,
            "ThunderstormProbability": 25,
            "RainProbability": 41,
            "SnowProbability": 0,
            "IceProbability": 0,
            "Wind": {
              "Speed": {
                "Value": 6.9,
                "Unit": "mi/h",
                "UnitType": 9
              },
              "Direction": {
                "Degrees": 204,
                "Localized": "SSW",
                "English": "SSW"
              }
            },
            "WindGust": {
              "Speed": {
                "Value": 16.1,
                "Unit": "mi/h",
                "UnitType": 9
              },
              "Direction": {
                "Degrees": 228,
                "Localized": "SW",
                "English": "SW"
              }
            },
            "TotalLiquid": {
              "Value": 0.06,
              "Unit": "in",
              "UnitType": 1
            },
            "Rain": {
              "Value": 0.06,
              "Unit": "in",
              "UnitType": 1
            },
            "Snow": {
              "Value": 0,
              "Unit": "in",
              "UnitType": 1
            },
            "Ice": {
              "Value": 0,
              "Unit": "in",
              "UnitType": 1
            },
            "HoursOfPrecipitation": 1,
            "HoursOfRain": 1,
            "HoursOfSnow": 0,
            "HoursOfIce": 0,
            "CloudCover": 52,
            "Evapotranspiration": {
              "Value": 0.01,
              "Unit": "in",
              "UnitType": 1
            },
            "SolarIrradiance": {
              "Value": 17.6,
              "Unit": "W/m²",
              "UnitType": 33
            }
          },
          "Sources": [
            "AccuWeather"
          ],
          "MobileLink": "http://www.accuweather.com/en/lk/colombo/311399/daily-weather-forecast/311399?day=3&lang=en-us",
          "Link": "http://www.accuweather.com/en/lk/colombo/311399/daily-weather-forecast/311399?day=3&lang=en-us"
        },
        {
          "Date": "2022-09-14T07:00:00+05:30",
          "EpochDate": 1663119000,
          "Sun": {
            "Rise": "2022-09-14T06:01:00+05:30",
            "EpochRise": 1663115460,
            "Set": "2022-09-14T18:11:00+05:30",
            "EpochSet": 1663159260
          },
          "Moon": {
            "Rise": "2022-09-14T21:19:00+05:30",
            "EpochRise": 1663170540,
            "Set": "2022-09-15T10:00:00+05:30",
            "EpochSet": 1663216200,
            "Phase": "WaningGibbous",
            "Age": 18
          },
          "Temperature": {
            "Minimum": {
              "Value": 77,
              "Unit": "F",
              "UnitType": 18
            },
            "Maximum": {
              "Value": 87,
              "Unit": "F",
              "UnitType": 18
            }
          },
          "RealFeelTemperature": {
            "Minimum": {
              "Value": 82,
              "Unit": "F",
              "UnitType": 18,
              "Phrase": "Very Warm"
            },
            "Maximum": {
              "Value": 96,
              "Unit": "F",
              "UnitType": 18,
              "Phrase": "Hot"
            }
          },
          "RealFeelTemperatureShade": {
            "Minimum": {
              "Value": 82,
              "Unit": "F",
              "UnitType": 18,
              "Phrase": "Very Warm"
            },
            "Maximum": {
              "Value": 91,
              "Unit": "F",
              "UnitType": 18,
              "Phrase": "Hot"
            }
          },
          "HoursOfSun": 5.8,
          "DegreeDaySummary": {
            "Heating": {
              "Value": 0,
              "Unit": "F",
              "UnitType": 18
            },
            "Cooling": {
              "Value": 17,
              "Unit": "F",
              "UnitType": 18
            }
          },
          "AirAndPollen": [
            {
              "Name": "AirQuality",
              "Value": 0,
              "Category": "Good",
              "CategoryValue": 1,
              "Type": "Ozone"
            },
            {
              "Name": "Grass",
              "Value": 0,
              "Category": "Low",
              "CategoryValue": 1
            },
            {
              "Name": "Mold",
              "Value": 0,
              "Category": "Low",
              "CategoryValue": 1
            },
            {
              "Name": "Ragweed",
              "Value": 0,
              "Category": "Low",
              "CategoryValue": 1
            },
            {
              "Name": "Tree",
              "Value": 0,
              "Category": "Low",
              "CategoryValue": 1
            },
            {
              "Name": "UVIndex",
              "Value": 12,
              "Category": "Extreme",
              "CategoryValue": 5
            }
          ],
          "Day": {
            "Icon": 4,
            "IconPhrase": "Intermittent clouds",
            "HasPrecipitation": true,
            "PrecipitationType": "Rain",
            "PrecipitationIntensity": "Light",
            "ShortPhrase": "A t-storm around in the a.m.",
            "LongPhrase": "Times of clouds and sun; a thunderstorm in spots in the morning followed by a shower in spots in the afternoon",
            "PrecipitationProbability": 42,
            "ThunderstormProbability": 25,
            "RainProbability": 42,
            "SnowProbability": 0,
            "IceProbability": 0,
            "Wind": {
              "Speed": {
                "Value": 10.4,
                "Unit": "mi/h",
                "UnitType": 9
              },
              "Direction": {
                "Degrees": 212,
                "Localized": "SSW",
                "English": "SSW"
              }
            },
            "WindGust": {
              "Speed": {
                "Value": 20.7,
                "Unit": "mi/h",
                "UnitType": 9
              },
              "Direction": {
                "Degrees": 218,
                "Localized": "SW",
                "English": "SW"
              }
            },
            "TotalLiquid": {
              "Value": 0.05,
              "Unit": "in",
              "UnitType": 1
            },
            "Rain": {
              "Value": 0.05,
              "Unit": "in",
              "UnitType": 1
            },
            "Snow": {
              "Value": 0,
              "Unit": "in",
              "UnitType": 1
            },
            "Ice": {
              "Value": 0,
              "Unit": "in",
              "UnitType": 1
            },
            "HoursOfPrecipitation": 1,
            "HoursOfRain": 1,
            "HoursOfSnow": 0,
            "HoursOfIce": 0,
            "CloudCover": 55,
            "Evapotranspiration": {
              "Value": 0.15,
              "Unit": "in",
              "UnitType": 1
            },
            "SolarIrradiance": {
              "Value": 4873.6,
              "Unit": "W/m²",
              "UnitType": 33
            }
          },
          "Night": {
            "Icon": 12,
            "IconPhrase": "Showers",
            "HasPrecipitation": true,
            "PrecipitationType": "Rain",
            "PrecipitationIntensity": "Light",
            "ShortPhrase": "A passing shower or two",
            "LongPhrase": "Mostly cloudy with a brief shower or two",
            "PrecipitationProbability": 82,
            "ThunderstormProbability": 24,
            "RainProbability": 82,
            "SnowProbability": 0,
            "IceProbability": 0,
            "Wind": {
              "Speed": {
                "Value": 6.9,
                "Unit": "mi/h",
                "UnitType": 9
              },
              "Direction": {
                "Degrees": 183,
                "Localized": "S",
                "English": "S"
              }
            },
            "WindGust": {
              "Speed": {
                "Value": 16.1,
                "Unit": "mi/h",
                "UnitType": 9
              },
              "Direction": {
                "Degrees": 201,
                "Localized": "SSW",
                "English": "SSW"
              }
            },
            "TotalLiquid": {
              "Value": 0.13,
              "Unit": "in",
              "UnitType": 1
            },
            "Rain": {
              "Value": 0.13,
              "Unit": "in",
              "UnitType": 1
            },
            "Snow": {
              "Value": 0,
              "Unit": "in",
              "UnitType": 1
            },
            "Ice": {
              "Value": 0,
              "Unit": "in",
              "UnitType": 1
            },
            "HoursOfPrecipitation": 2,
            "HoursOfRain": 2,
            "HoursOfSnow": 0,
            "HoursOfIce": 0,
            "CloudCover": 75,
            "Evapotranspiration": {
              "Value": 0.02,
              "Unit": "in",
              "UnitType": 1
            },
            "SolarIrradiance": {
              "Value": 16.2,
              "Unit": "W/m²",
              "UnitType": 33
            }
          },
          "Sources": [
            "AccuWeather"
          ],
          "MobileLink": "http://www.accuweather.com/en/lk/colombo/311399/daily-weather-forecast/311399?day=4&lang=en-us",
          "Link": "http://www.accuweather.com/en/lk/colombo/311399/daily-weather-forecast/311399?day=4&lang=en-us"
        },
        {
          "Date": "2022-09-15T07:00:00+05:30",
          "EpochDate": 1663205400,
          "Sun": {
            "Rise": "2022-09-15T06:01:00+05:30",
            "EpochRise": 1663201860,
            "Set": "2022-09-15T18:11:00+05:30",
            "EpochSet": 1663245660
          },
          "Moon": {
            "Rise": "2022-09-15T22:04:00+05:30",
            "EpochRise": 1663259640,
            "Set": "2022-09-16T10:50:00+05:30",
            "EpochSet": 1663305600,
            "Phase": "WaningGibbous",
            "Age": 19
          },
          "Temperature": {
            "Minimum": {
              "Value": 78,
              "Unit": "F",
              "UnitType": 18
            },
            "Maximum": {
              "Value": 87,
              "Unit": "F",
              "UnitType": 18
            }
          },
          "RealFeelTemperature": {
            "Minimum": {
              "Value": 84,
              "Unit": "F",
              "UnitType": 18,
              "Phrase": "Very Warm"
            },
            "Maximum": {
              "Value": 95,
              "Unit": "F",
              "UnitType": 18,
              "Phrase": "Hot"
            }
          },
          "RealFeelTemperatureShade": {
            "Minimum": {
              "Value": 84,
              "Unit": "F",
              "UnitType": 18,
              "Phrase": "Very Warm"
            },
            "Maximum": {
              "Value": 92,
              "Unit": "F",
              "UnitType": 18,
              "Phrase": "Hot"
            }
          },
          "HoursOfSun": 1.3,
          "DegreeDaySummary": {
            "Heating": {
              "Value": 0,
              "Unit": "F",
              "UnitType": 18
            },
            "Cooling": {
              "Value": 17,
              "Unit": "F",
              "UnitType": 18
            }
          },
          "AirAndPollen": [
            {
              "Name": "AirQuality",
              "Value": 0,
              "Category": "Good",
              "CategoryValue": 1,
              "Type": "Ozone"
            },
            {
              "Name": "Grass",
              "Value": 0,
              "Category": "Low",
              "CategoryValue": 1
            },
            {
              "Name": "Mold",
              "Value": 0,
              "Category": "Low",
              "CategoryValue": 1
            },
            {
              "Name": "Ragweed",
              "Value": 0,
              "Category": "Low",
              "CategoryValue": 1
            },
            {
              "Name": "Tree",
              "Value": 0,
              "Category": "Low",
              "CategoryValue": 1
            },
            {
              "Name": "UVIndex",
              "Value": 5,
              "Category": "Moderate",
              "CategoryValue": 2
            }
          ],
          "Day": {
            "Icon": 7,
            "IconPhrase": "Cloudy",
            "HasPrecipitation": true,
            "PrecipitationType": "Rain",
            "PrecipitationIntensity": "Light",
            "ShortPhrase": "Cloudy with a shower",
            "LongPhrase": "Cloudy with a shower",
            "PrecipitationProbability": 74,
            "ThunderstormProbability": 21,
            "RainProbability": 74,
            "SnowProbability": 0,
            "IceProbability": 0,
            "Wind": {
              "Speed": {
                "Value": 9.2,
                "Unit": "mi/h",
                "UnitType": 9
              },
              "Direction": {
                "Degrees": 221,
                "Localized": "SW",
                "English": "SW"
              }
            },
            "WindGust": {
              "Speed": {
                "Value": 18.4,
                "Unit": "mi/h",
                "UnitType": 9
              },
              "Direction": {
                "Degrees": 234,
                "Localized": "SW",
                "English": "SW"
              }
            },
            "TotalLiquid": {
              "Value": 0.09,
              "Unit": "in",
              "UnitType": 1
            },
            "Rain": {
              "Value": 0.09,
              "Unit": "in",
              "UnitType": 1
            },
            "Snow": {
              "Value": 0,
              "Unit": "in",
              "UnitType": 1
            },
            "Ice": {
              "Value": 0,
              "Unit": "in",
              "UnitType": 1
            },
            "HoursOfPrecipitation": 1.5,
            "HoursOfRain": 1.5,
            "HoursOfSnow": 0,
            "HoursOfIce": 0,
            "CloudCover": 99,
            "Evapotranspiration": {
              "Value": 0.1,
              "Unit": "in",
              "UnitType": 1
            },
            "SolarIrradiance": {
              "Value": 2516.9,
              "Unit": "W/m²",
              "UnitType": 33
            }
          },
          "Night": {
            "Icon": 38,
            "IconPhrase": "Mostly cloudy",
            "HasPrecipitation": true,
            "PrecipitationType": "Rain",
            "PrecipitationIntensity": "Light",
            "ShortPhrase": "Mostly cloudy with a shower",
            "LongPhrase": "Mostly cloudy with a shower",
            "PrecipitationProbability": 69,
            "ThunderstormProbability": 14,
            "RainProbability": 69,
            "SnowProbability": 0,
            "IceProbability": 0,
            "Wind": {
              "Speed": {
                "Value": 6.9,
                "Unit": "mi/h",
                "UnitType": 9
              },
              "Direction": {
                "Degrees": 219,
                "Localized": "SW",
                "English": "SW"
              }
            },
            "WindGust": {
              "Speed": {
                "Value": 16.1,
                "Unit": "mi/h",
                "UnitType": 9
              },
              "Direction": {
                "Degrees": 236,
                "Localized": "SW",
                "English": "SW"
              }
            },
            "TotalLiquid": {
              "Value": 0.07,
              "Unit": "in",
              "UnitType": 1
            },
            "Rain": {
              "Value": 0.07,
              "Unit": "in",
              "UnitType": 1
            },
            "Snow": {
              "Value": 0,
              "Unit": "in",
              "UnitType": 1
            },
            "Ice": {
              "Value": 0,
              "Unit": "in",
              "UnitType": 1
            },
            "HoursOfPrecipitation": 1,
            "HoursOfRain": 1,
            "HoursOfSnow": 0,
            "HoursOfIce": 0,
            "CloudCover": 81,
            "Evapotranspiration": {
              "Value": 0.01,
              "Unit": "in",
              "UnitType": 1
            },
            "SolarIrradiance": {
              "Value": 32.3,
              "Unit": "W/m²",
              "UnitType": 33
            }
          },
          "Sources": [
            "AccuWeather"
          ],
          "MobileLink": "http://www.accuweather.com/en/lk/colombo/311399/daily-weather-forecast/311399?day=5&lang=en-us",
          "Link": "http://www.accuweather.com/en/lk/colombo/311399/daily-weather-forecast/311399?day=5&lang=en-us"
        }
      ]
    }])
  }
}
