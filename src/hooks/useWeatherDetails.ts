import { useReducer, useEffect, useCallback } from 'react';

import { fetchWeatherByCity, weatherCodeLabel, weatherCodeIcon } from '../services/api'; 

export interface HourlyForecast {
  time: string;
  temp: number;
  icon: string;
  description: string;
}

export interface WeatherDetails {
  city: string;
  humidity: number;
  windSpeed: number;
  feelsLike: number;
  hourlyForecast: HourlyForecast[];
}

type State = {
  data: WeatherDetails | null;
  loading: boolean;
  error: string | null;
};

type Action =
  | { type: 'FETCH_START' }
  | { type: 'FETCH_SUCCESS'; payload: WeatherDetails }
  | { type: 'FETCH_ERROR'; payload: string };

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'FETCH_START':
      return { data: null, loading: true, error: null };
    case 'FETCH_SUCCESS':
      return { data: action.payload, loading: false, error: null };
    case 'FETCH_ERROR':
      return { data: null, loading: false, error: action.payload };
    default:
      return state;
  }
}

export function useWeatherDetails(cityName: string | null) {
  const [state, dispatch] = useReducer(reducer, {
    data: null,
    loading: false,
    error: null,
  });

  const fetchDetails = useCallback(async (city: string) => {
    dispatch({ type: 'FETCH_START' });
    try {
      
      const { city: cityData, weather } = await fetchWeatherByCity(city);

     
      const hourlyForecast: HourlyForecast[] = [];
      
    
      for (let i = 0; i < 8; i++) {
        const timeString = new Date(weather.hourly.time[i]).toLocaleTimeString('pt-BR', {
          hour: '2-digit',
          minute: '2-digit',
        });

        hourlyForecast.push({
          time: timeString,
          temp: Math.round(weather.hourly.temperature_2m[i]),
         
          icon: weatherCodeIcon(weather.hourly.weather_code[i]),
          description: weatherCodeLabel(weather.hourly.weather_code[i]),
        });
      }

      
      const details: WeatherDetails = {
        city: cityData.name,
        humidity: weather.current.relative_humidity_2m,
        windSpeed: weather.current.wind_speed_10m,
        feelsLike: Math.round(weather.current.apparent_temperature),
        hourlyForecast: hourlyForecast,
      };

      dispatch({ type: 'FETCH_SUCCESS', payload: details });
    } catch (err: any) {
    
      dispatch({ type: 'FETCH_ERROR', payload: err.message || "Erro desconhecido ao buscar detalhes." });
    }
  }, []);

  useEffect(() => {
    if (cityName) fetchDetails(cityName);
  }, [cityName, fetchDetails]);

  return { ...state };
}