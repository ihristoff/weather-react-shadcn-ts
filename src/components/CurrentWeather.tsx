import React from "react";
import type { GeocodingResponse, WeatherData } from "@/api/types";
import { Card, CardContent } from "./ui/card";
import { ArrowDown, ArrowUp, Droplets, Wind } from "lucide-react";

interface CurrentWeatherProps {
  data: WeatherData;
  locationName?: GeocodingResponse;
}

const formatTemp = (t: number) => `${Math.round(t)}°`;

const CurrentWeather = ({ data, locationName }: CurrentWeatherProps) => {
  const {
    weather: [currentWeather],
    main: { temp, feels_like, temp_min, temp_max, humidity },
    wind: { speed },
  } = data;

  return (
    <Card className="bg-background text-foreground overflow-hidden h-full flex flex-col justify-between">
      <CardContent className="flex flex-col h-full p-8 gap-4">
        {/* Location */}
        <div>
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold">{locationName?.name}</span>
            {locationName?.state && (
              <span className="text-muted-foreground font-normal">,{` ${locationName.state}`}</span>
            )}
          </div>
          <div className="text-sm text-muted-foreground font-medium">{locationName?.country}</div>
        </div>

        {/* Temperature row with all details side by side */}
        <div className="flex items-center gap-8 my-4">
          {/* Main temp */}
          <div className="text-7xl font-bold min-w-[94px]">{formatTemp(temp)}</div>
          {/* Details column */}
          <div className="flex flex-col gap-2">
            <span className="text-sm text-muted-foreground">Feels like {formatTemp(feels_like)}</span>
            <div className="flex gap-4 text-sm font-medium">
              <span className="flex items-center gap-1 text-blue-500">
                <ArrowDown className="h-4 w-4" />
                {formatTemp(temp_min)}
              </span>
              <span className="flex items-center gap-1 text-red-500">
                <ArrowUp className="h-4 w-4" />
                {formatTemp(temp_max)}
              </span>
            </div>
          </div>
          {/* Weather visualization */}
          <div className="flex flex-col items-center justify-center min-w-[120px] ml-auto">
            <img
              className="h-20 w-20 object-contain mb-1"
              src={`https://openweathermap.org/img/wn/${currentWeather.icon}@4x.png`}
              alt={currentWeather.description}
            />
            <div className="text-base font-semibold capitalize text-center">{currentWeather.description}</div>
          </div>
        </div>

        {/* Humidity and Wind Speed row */}
        <div className="flex gap-8 mt-auto justify-start pt-2">
          <div className="flex items-center gap-2">
            <Droplets className="h-5 w-5 text-blue-500" />
            <span className="font-bold">Humidity</span>
            <span className="text-muted-foreground">{humidity}%</span>
          </div>
          <div className="flex items-center gap-2">
            <Wind className="h-5 w-5 text-blue-500" />
            <span className="font-bold">Wind Speed</span>
            <span className="text-muted-foreground">{speed} m/s</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CurrentWeather;

