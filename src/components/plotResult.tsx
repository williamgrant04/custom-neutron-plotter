import { useContext, useEffect } from "react"
import RouteDataContext from "../store/routeData"

const PlotResult = () => {
  const routeData = useContext(RouteDataContext)

  useEffect(() => {
    console.log(routeData.route)
  }, [routeData])

  return (
    <div>
      {
        // just a check to see if the routeData is there
        routeData.route?.destination_system && (
          <>
            <h1>Plot Result</h1>
            <p>Estimated total jumps to {routeData.route.destination_system}: {routeData.route.total_jumps}</p>
            {
              routeData.route.system_jumps.map((systemJump) => {
                return (
                  <div key={systemJump.id64}>
                    <p>{systemJump.system}</p>
                    <p>Jumps: {systemJump.jumps}</p>
                    <p>Distance: {systemJump.distance_jumped}</p>
                    <p>Remaining: {systemJump.distance_left}</p>
                    <p>Neutron star?: {systemJump.neutron_star ? "Yes" : "No"}</p>
                  </div>
                )
              })
            }
          </>
        )
      }
    </div>
  )
}

export default PlotResult
