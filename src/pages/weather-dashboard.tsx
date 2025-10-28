import { Button } from "@/components/ui/button";
import { useGeolocation } from "@/hooks/use_geolocation";
import { RefreshCw } from "lucide-react";
import React from "react";

const Dashboard = () => {

  const {coordinates, error, getLocation, isLoading} = useGeolocation();
  console.log(coordinates)


  const handleRefresh = () => {
    getLocation();
    if (coordinates) {
      // reload
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold tracking-tight">My location</h1>
        <Button
          variant={"outline"}
          size={"icon"}
          // onClick={handleRefresh}
          // disabled=
        >
          <RefreshCw />
        </Button>
      </div>
    </div>
  );
};

export default Dashboard;
