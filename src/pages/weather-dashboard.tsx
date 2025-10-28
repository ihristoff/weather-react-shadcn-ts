import { Button } from "@/components/ui/button";
import { RefreshCw } from "lucide-react";
import React from "react";

const Dashboard = () => {
  const handleRefresh = () => {};

  return (
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
  );
};

export default Dashboard;
