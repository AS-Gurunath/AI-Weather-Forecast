import React from 'react';

export const getWeatherBackground = (condition: string, isDay: boolean): string => {
  const lowerCaseCondition = condition.toLowerCase();

  if (lowerCaseCondition.includes('clear') || lowerCaseCondition.includes('sun')) {
    return isDay ? 'from-yellow-400 to-orange-500' : 'from-gray-800 to-indigo-900';
  }
  if (lowerCaseCondition.includes('partly cloudy')) {
    return isDay ? 'from-blue-400 to-gray-500' : 'from-gray-700 to-indigo-800';
  }
  if (lowerCaseCondition.includes('cloud') || lowerCaseCondition.includes('overcast')) {
    return isDay ? 'from-gray-500 to-gray-700' : 'from-gray-600 to-gray-800';
  }
  if (lowerCaseCondition.includes('rain') || lowerCaseCondition.includes('drizzle')) {
    return 'from-blue-600 to-gray-800';
  }
  if (lowerCaseCondition.includes('thunder') || lowerCaseCondition.includes('storm')) {
    return 'from-gray-800 via-purple-900 to-gray-900';
  }
  if (lowerCaseCondition.includes('snow') || lowerCaseCondition.includes('sleet')) {
    return 'from-sky-300 to-gray-400';
  }
  if (lowerCaseCondition.includes('mist') || lowerCaseCondition.includes('fog') || lowerCaseCondition.includes('haze')) {
    return 'from-gray-400 to-gray-600';
  }
  
  return isDay ? 'from-indigo-500 to-blue-800' : 'from-gray-800 to-indigo-900';
}


interface WeatherIconProps {
  condition: string;
  isDay: boolean;
}

const SunnyIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" className="w-full h-full text-white">
        <path d="M32 18.67V12m0 40v-6.67m13.86-27.19l4.71-4.71M13.43 45.86l4.71-4.71m0-18.29l-4.71-4.71m27.14 27.71l-4.71-4.71M45.33 32H52m-40 0h6.67" fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="3"/>
        <circle cx="32" cy="32" r="9.33" fill="currentColor"/>
    </svg>
);
const ClearNightIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" className="w-full h-full text-white">
        <path d="M43.6,35.9c-5.8,1.2-11.4-2.1-13.7-7.4c-2-4.5-1.5-9.8,1.4-13.8c-2.4,0.3-4.7,1.2-6.8,2.7c-5.3,4-7.8,10.6-6.4,16.8c1.4,6.2,6.8,10.8,13.1,12.2C36.6,47.4,42.2,44.1,44.4,38.8C44.2,37.8,44,36.9,43.6,35.9z" fill="currentColor"/>
    </svg>
);
const CloudyIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" className="w-full h-full text-white">
        <path d="M47.9 42.6h-32a7.9 7.9 0 01-7.9-7.9 7.9 7.9 0 017.9-7.9h.4a12.6 12.6 0 0124.2-6.1 10.7 10.7 0 0110.6 10.6h.7a7.9 7.9 0 017.9 7.9 7.9 7.9 0 01-7.9 7.9z" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="3"/>
    </svg>
);
const PartlyCloudyIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" className="w-full h-full text-white">
        <path d="M47.9 42.6h-32a7.9 7.9 0 01-7.9-7.9 7.9 7.9 0 017.9-7.9h.4a12.6 12.6 0 0124.2-6.1 10.7 10.7 0 0110.6 10.6h.7a7.9 7.9 0 017.9 7.9 7.9 7.9 0 01-7.9 7.9z" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="3" strokeOpacity="0.8"/>
        <path d="M32 18.67V12m0 40v-6.67m13.86-27.19l4.71-4.71M13.43 45.86l4.71-4.71m0-18.29l-4.71-4.71m27.14 27.71l-4.71-4.71M45.33 32H52m-40 0h6.67" fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="3" transform="translate(-8, -6) scale(0.8)"/>
        <circle cx="32" cy="32" r="9.33" fill="currentColor" transform="translate(-8, -6) scale(0.8)"/>
    </svg>
);
const PartlyCloudyNightIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" className="w-full h-full text-white">
        <path d="M47.9 42.6h-32a7.9 7.9 0 01-7.9-7.9 7.9 7.9 0 017.9-7.9h.4a12.6 12.6 0 0124.2-6.1 10.7 10.7 0 0110.6 10.6h.7a7.9 7.9 0 017.9 7.9 7.9 7.9 0 01-7.9 7.9z" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="3" strokeOpacity="0.8"/>
        <path d="M43.6,35.9c-5.8,1.2-11.4-2.1-13.7-7.4c-2-4.5-1.5-9.8,1.4-13.8c-2.4,0.3-4.7,1.2-6.8,2.7c-5.3,4-7.8,10.6-6.4,16.8c1.4,6.2,6.8,10.8,13.1,12.2C36.6,47.4,42.2,44.1,44.4,38.8C44.2,37.8,44,36.9,43.6,35.9z" fill="currentColor" transform="translate(-8, -6) scale(0.8)"/>
    </svg>
);

const RainIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" className="w-full h-full text-white">
        <path d="M47.9 33.1h-32a7.9 7.9 0 01-7.9-7.9 7.9 7.9 0 017.9-7.9h.4a12.6 12.6 0 0124.2-6.1 10.7 10.7 0 0110.6 10.6h.7a7.9 7.9 0 017.9 7.9 7.9 7.9 0 01-7.9 7.9z" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="3"  strokeOpacity="0.8"/>
        <path d="M23.3 40v12m8.7-12v12m8.6-12v12" fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="3"/>
    </svg>
);
const SnowIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" className="w-full h-full text-white">
        <path d="M47.9 33.1h-32a7.9 7.9 0 01-7.9-7.9 7.9 7.9 0 017.9-7.9h.4a12.6 12.6 0 0124.2-6.1 10.7 10.7 0 0110.6 10.6h.7a7.9 7.9 0 017.9 7.9 7.9 7.9 0 01-7.9 7.9z" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="3"  strokeOpacity="0.8"/>
        <path d="M27.6 44.3l4.8 4.8m-4.8 0l4.8-4.8m-2.4-4.8v9.6m-2.4-4.8H35m4.8 2.4l4.8 4.8m-4.8 0l4.8-4.8m-2.4-4.8v9.6m-2.4-4.8h9.6" fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="3"/>
    </svg>
);
const ThunderstormIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" className="w-full h-full text-white">
        <path d="M47.9 33.1h-32a7.9 7.9 0 01-7.9-7.9 7.9 7.9 0 017.9-7.9h.4a12.6 12.6 0 0124.2-6.1 10.7 10.7 0 0110.6 10.6h.7a7.9 7.9 0 017.9 7.9 7.9 7.9 0 01-7.9 7.9z" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="3"  strokeOpacity="0.8"/>
        <path d="M30.4 39.4l-3.9 6.7h11l-3.9 8.2" fill="none" stroke="#f6e05e" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"/>
    </svg>
);
const AtmosphereIcon = () => (
     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" className="w-full h-full text-white">
        <path d="M12 28h40M12 36h40M12 44h40" fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="3"/>
    </svg>
);


const WeatherIcon: React.FC<WeatherIconProps> = ({ condition, isDay }) => {
  const lowerCaseCondition = condition.toLowerCase();

  if (lowerCaseCondition.includes('sun') || lowerCaseCondition.includes('clear')) {
    return isDay ? <SunnyIcon /> : <ClearNightIcon />;
  }
  if (lowerCaseCondition.includes('partly cloudy')) {
    return isDay ? <PartlyCloudyIcon /> : <PartlyCloudyNightIcon />;
  }
  if (lowerCaseCondition.includes('cloud') || lowerCaseCondition.includes('overcast')) {
    return <CloudyIcon />;
  }
  if (lowerCaseCondition.includes('rain') || lowerCaseCondition.includes('drizzle')) {
    return <RainIcon />;
  }
  if (lowerCaseCondition.includes('thunder') || lowerCaseCondition.includes('storm')) {
    return <ThunderstormIcon />;
  }
  if (lowerCaseCondition.includes('snow') || lowerCaseCondition.includes('sleet')) {
    return <SnowIcon />;
  }
  if (lowerCaseCondition.includes('mist') || lowerCaseCondition.includes('fog') || lowerCaseCondition.includes('haze')) {
    return <AtmosphereIcon />;
  }
  
  return <CloudyIcon />; // Default icon
};

export default WeatherIcon;