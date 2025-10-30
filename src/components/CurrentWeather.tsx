import React from "react";
import type { GeocodingResponse, WeatherData } from "@/api/types";
import { Card, CardContent } from "./ui/card";
import { ArrowDown, ArrowUp, Droplets, Wind } from "lucide-react";

interface CurrentWeatherProps {
  data: WeatherData;
  locationName?: GeocodingResponse;
}

const CurrentWeather = ({ data, locationName }: CurrentWeatherProps) => {
  const {
    weather: [currentWeather],
    main: { temp, feels_like, temp_min, temp_max, humidity },
    wind: { speed },
  } = data;

  const formatTemp = (t: number) => `${Math.round(t)}°`;

  return (
    <Card className="overflow-hidden bg-background text-foreground">
      <CardContent className="p-6">
        {/* Top Section: Location */}
        <div className="mb-4">
          <p className="text-sm text-muted-foreground">My Location</p>
          <h2 className="text-2xl font-bold tracking-tight">
            {locationName?.name}
            {locationName?.state && (
              <span className="text-muted-foreground font-normal">
                , {locationName.state}
              </span>
            )}
          </h2>
          <p className="text-sm text-muted-foreground">
            {locationName?.country}
          </p>
        </div>

        {/* Middle Section: Temperature */}
        <div className="flex items-start gap-4">
          <div className="flex flex-col items-start">
            <p className="text-7xl font-bold leading-none">{formatTemp(temp)}</p>
            <p className="text-sm text-muted-foreground">
              Feels like {formatTemp(feels_like)}
            </p>
          </div>

          <div className="flex flex-col justify-center gap-2 text-sm font-medium ml-2">
            <div className="flex items-center gap-1 text-blue-500">
              <ArrowDown className="h-3 w-3" />
              <span>{formatTemp(temp_min)}</span>
            </div>
            <div className="flex items-center gap-1 text-red-500">
              <ArrowUp className="h-3 w-3" />
              <span>{formatTemp(temp_max)}</span>
            </div>
          </div>
        </div>

        {/* Bottom Section: Humidity & Wind */}
        <div className="mt-6 flex justify-between text-sm font-medium">
          <div className="flex items-center gap-2">
            <Droplets className="h-4 w-4 text-blue-500" />
            <span>Humidity</span>
            <span className="text-muted-foreground">{humidity}%</span>
          </div>

          <div className="flex items-center gap-2">
            <Wind className="h-4 w-4 text-blue-500" />
            <span>Wind Speed</span>
            <span className="text-muted-foreground">{speed} m/s</span>
          </div>

          <div>
            <div className="relative flex aspect-square w-full max-w-[200px] items-center justify-center">
                <img className='h-full w-full object-contain' src={`https://openweathermap.org/img/wn/${currentWeather.icon}@4x.png`} alt="" />
                <div className="absolute bottom-0 text-center">
                    <p className="text-sm font-medium capitalize">
                        {currentWeather.description}
                    </p>
                </div>
            </div>

          </div>
        </div>


      </CardContent>
    </Card>
  );
};

export default CurrentWeather;
