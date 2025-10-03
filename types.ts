export interface CurrentWeather {
  date: string;
  isDay: boolean;
  temp: number;
  high: number;
  low: number;
  condition: string;
  windSpeed: number;
  humidity: number;
}

export interface ForecastDay {
  day: string;
  date: string;
  high: number;
  low: number;
  condition: string;
}

export interface WeatherData {
  location: string;
  current: CurrentWeather;
  forecast: ForecastDay[];
}