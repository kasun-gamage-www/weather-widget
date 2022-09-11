import { Injectable } from '@angular/core'
import { HttpClient, HttpParams } from '@angular/common/http'
import { retry } from 'rxjs/operators'
import { from } from 'rxjs'

@Injectable()
export class MockWeatherService {

  constructor(private http: HttpClient) { }

  //concrete implementation with AccuWeather. To be abstracted later
  getCurrentCondition(location: any) {
    return from([[
      {
        "LocalObservationDateTime": "2022-09-11T13:27:00+05:30",
        "EpochTime": 1662883020,
        "WeatherText": "Cloudy",
        "WeatherIcon": 7,
        "HasPrecipitation": false,
        "PrecipitationType": null,
        "IsDayTime": true,
        "Temperature": {
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
        },
        "RealFeelTemperature": {
          "Metric": {
            "Value": 34.7,
            "Unit": "C",
            "UnitType": 17,
            "Phrase": "Hot"
          },
          "Imperial": {
            "Value": 95,
            "Unit": "F",
            "UnitType": 18,
            "Phrase": "Hot"
          }
        },
        "RealFeelTemperatureShade": {
          "Metric": {
            "Value": 32.7,
            "Unit": "C",
            "UnitType": 17,
            "Phrase": "Hot"
          },
          "Imperial": {
            "Value": 91,
            "Unit": "F",
            "UnitType": 18,
            "Phrase": "Hot"
          }
        },
        "RelativeHumidity": 71,
        "IndoorRelativeHumidity": 71,
        "DewPoint": {
          "Metric": {
            "Value": 24.1,
            "Unit": "C",
            "UnitType": 17
          },
          "Imperial": {
            "Value": 75,
            "Unit": "F",
            "UnitType": 18
          }
        },
        "Wind": {
          "Direction": {
            "Degrees": 248,
            "Localized": "WSW",
            "English": "WSW"
          },
          "Speed": {
            "Metric": {
              "Value": 23.7,
              "Unit": "km/h",
              "UnitType": 7
            },
            "Imperial": {
              "Value": 14.7,
              "Unit": "mi/h",
              "UnitType": 9
            }
          }
        },
        "WindGust": {
          "Speed": {
            "Metric": {
              "Value": 43.1,
              "Unit": "km/h",
              "UnitType": 7
            },
            "Imperial": {
              "Value": 26.8,
              "Unit": "mi/h",
              "UnitType": 9
            }
          }
        },
        "UVIndex": 5,
        "UVIndexText": "Moderate",
        "Visibility": {
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
        "ObstructionsToVisibility": "",
        "CloudCover": 99,
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
          "Past24HourRange": {
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
                "Value": 30.4,
                "Unit": "C",
                "UnitType": 17
              },
              "Imperial": {
                "Value": 87,
                "Unit": "F",
                "UnitType": 18
              }
            }
          }
        },
        "MobileLink": "http://www.accuweather.com/en/lk/colombo/311399/current-weather/311399?lang=en-us",
        "Link": "http://www.accuweather.com/en/lk/colombo/311399/current-weather/311399?lang=en-us"
      }
    ]])
  }
}
