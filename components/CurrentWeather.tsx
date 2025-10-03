import React from 'react';
import type { CurrentWeather as CurrentWeatherType } from '../types';
import WeatherIcon, { getWeatherBackground } from './WeatherIcon';

interface CurrentWeatherProps {
  data: CurrentWeatherType;
  location: string;
  currentTime: Date;
}

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  date.setUTCHours(12); // Adjust for timezone to prevent day-before errors
  return date.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};

const CurrentWeather: React.FC<CurrentWeatherProps> = ({ data, location, currentTime }) => {
  const backgroundClass = getWeatherBackground(data.condition, data.isDay);
  
  return (
    <div className={`flex flex-col sm:flex-row items-center justify-between w-full p-6 rounded-xl text-white text-shadow-md bg-gradient-to-br ${backgroundClass} shadow-lg`}>
      <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
        <h2 className="text-2xl sm:text-3xl font-bold">{location}</h2>
        <p className="text-gray-200 text-lg capitalize">{data.condition}</p>
        <p className="text-sm opacity-90 mt-1">{formatDate(data.date)}</p>
        <p className="text-sm opacity-90">{currentTime.toLocaleTimeString()}</p>
      </div>
      <div className="flex flex-col sm:flex-row items-center gap-4 mt-6 sm:mt-0">
        <div className="w-24 h-24 sm:w-28 sm:h-28">
          <WeatherIcon condition={data.condition} isDay={data.isDay} />
        </div>
        <div className="text-center sm:text-left">
          <p className="text-6xl sm:text-7xl font-bold">{data.temp}°<span className="text-3xl align-top font-medium">C</span></p>
          <div className="flex items-center justify-center sm:justify-start gap-3 mt-1 text-gray-100">
            <span>High: {data.high}°</span>
            <span>Low: {data.low}°</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;