import React, { createContext, useState } from "react";

export interface SystemJump {
  distance_jumped: number,
  distance_left: number, // distance left to destination
  id64: number,
  jumps: number, // jumps from previous/current to this system
  neutron_star: boolean,
  system: string,
  x: number,
  y: number,
  z: number
}

interface RouteData {
  destination_system: string,
  distance: number,
  efficiency: string,
  job: string,
  range: string,
  source_system: string,
  system_jumps: Array<SystemJump>,
  total_jumps: number
}

const RouteDataContext = createContext({
  route: {} as RouteData,
  setRoute: (_route: RouteData) => {}
});

export const RouteDataProvider = ({ children }: { children: React.JSX.Element }) => {
  const [route, setRoute] = useState({} as RouteData)

  return (
    <RouteDataContext.Provider value={{
      route,
      setRoute
    }}>
      {children}
    </RouteDataContext.Provider>
  )
}

export default RouteDataContext
