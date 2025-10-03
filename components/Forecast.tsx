import React from 'react';
import type { ForecastDay } from '../types';
import WeatherIcon, { getWeatherBackground } from './WeatherIcon';

interface ForecastProps {
  data: ForecastDay[];
}

const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    date.setUTCHours(12); // Adjust for timezone to prevent day-before errors
    return {
      day: date.toLocaleDateString('en-US', { weekday: 'short' }),
      date: date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
    }
};

const Forecast: React.FC<ForecastProps> = ({ data }) => {
  return (
    <div className="w-full">
      <h3 className="text-xl font-semibold mb-4 text-center sm:text-left text-gray-700">7-Day Forecast</h3>
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
        {data.map((day, index) => {
          // Fix: The getWeatherBackground function expects an `isDay` boolean argument. For a forecast, we default to `true` for a daytime visual representation.
          const backgroundClass = getWeatherBackground(day.condition, true);
          const formatted = formatDate(day.date);
          return (
            <div key={index} className={`flex flex-col items-center p-3 rounded-lg text-center transition-transform hover:scale-105 shadow-md text-white text-shadow bg-gradient-to-br ${backgroundClass}`}>
              <p className="font-semibold text-lg">{index === 0 ? 'Today' : formatted.day}</p>
              <p className="text-sm opacity-90">{formatted.date}</p>
              <div className="w-12 h-12 my-2">
                {/* Fix: The WeatherIcon component requires an `isDay` prop. For a forecast, we default to `true` for a daytime icon. */}
                <WeatherIcon condition={day.condition} isDay={true} />
              </div>
              <p className="text-lg font-bold">{day.high}°</p>
              <p className="opacity-90">{day.low}°</p>
            </div>
          )
        })}
      </div>
    </div>
  );
};

export default Forecast;