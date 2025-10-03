import { GoogleGenAI, Type } from "@google/genai";
import type { WeatherData } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });

const weatherSchema = {
  type: Type.OBJECT,
  properties: {
    location: {
      type: Type.STRING,
      description: "The name of the location, e.g., 'San Francisco, CA'."
    },
    current: {
      type: Type.OBJECT,
      properties: {
        date: { type: Type.STRING, description: "Today's date in YYYY-MM-DD format." },
        isDay: { type: Type.BOOLEAN, description: "True if it is currently daytime at the location, false if it is nighttime." },
        temp: { type: Type.INTEGER, description: "Current temperature in Celsius." },
        high: { type: Type.INTEGER, description: "Today's high temperature in Celsius." },
        low: { type: Type.INTEGER, description: "Today's low temperature in Celsius." },
        condition: { type: Type.STRING, description: "A brief weather condition, e.g., 'Partly Cloudy', 'Sunny', 'Clear', 'Light Rain'." },
        windSpeed: { type: Type.INTEGER, description: "Wind speed in km/h." },
        humidity: { type: Type.INTEGER, description: "Humidity percentage." },
      },
      required: ["date", "isDay", "temp", "high", "low", "condition", "windSpeed", "humidity"]
    },
    forecast: {
      type: Type.ARRAY,
      description: "An array of 7-day weather forecasts, starting with today.",
      items: {
        type: Type.OBJECT,
        properties: {
          day: { type: Type.STRING, description: "Day of the week, e.g., 'Monday'." },
          date: { type: Type.STRING, description: "The date in YYYY-MM-DD format." },
          high: { type: Type.INTEGER, description: "Forecasted high temperature in Celsius." },
          low: { type: Type.INTEGER, description: "Forecasted low temperature in Celsius." },
          condition: { type: Type.STRING, description: "Forecasted weather condition." },
        },
        required: ["day", "date", "high", "low", "condition"]
      }
    }
  },
  required: ["location", "current", "forecast"]
};


export const getWeatherData = async (location: string): Promise<WeatherData> => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: `Generate the current weather and a 7-day forecast for ${location}. Use Celsius for temperature. The forecast must start from today. Crucially, determine if it is currently daytime or nighttime at the location and set the 'isDay' flag accordingly.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: weatherSchema,
      },
    });

    const jsonText = response.text.trim();
    const weatherData = JSON.parse(jsonText);
    
    if (weatherData.forecast && weatherData.forecast.length > 7) {
      weatherData.forecast = weatherData.forecast.slice(0, 7);
    }
    
    return weatherData as WeatherData;
  } catch (error) {
    console.error("Error fetching weather data from Gemini:", error);
    throw new Error("Failed to generate weather data.");
  }
};


export const getWeatherSummary = async (weatherData: WeatherData): Promise<string> => {
  const prompt = `
    Based on the following weather data, provide a short, friendly, and conversational weather summary (about 2-3 sentences).
    Pay close attention to the 'isDay' flag to accurately describe current conditions (e.g., "a clear night" vs "a sunny day").
    Mention the current conditions and highlight any important trends in the coming week (e.g., a warm-up, upcoming rain, a sunny weekend).
    
    Weather Data:
    ${JSON.stringify(weatherData, null, 2)}
  `;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
    });
    return response.text;
  } catch (error) {
    console.error("Error fetching AI summary from Gemini:", error);
    return "Could not generate weather summary at this time.";
  }
};