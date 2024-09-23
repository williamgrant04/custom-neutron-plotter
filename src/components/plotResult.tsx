import { useContext, useEffect, useState } from "react"
import RouteDataContext, { SystemJump } from "../store/routeData"

const PlotResult = () => {
  const routeData = useContext(RouteDataContext)
  const [completedJumps, setCompletedJumps] = useState(0)

  useEffect(() => {
    console.log(routeData.route)
  }, [routeData])

  const checkboxHandler = (event: React.ChangeEvent<HTMLInputElement>, systemJump: SystemJump) => {
    if (event.target.checked) setCompletedJumps(completedJumps + systemJump.jumps)

    if (!event.target.checked) setCompletedJumps(completedJumps - systemJump.jumps)
  }

  return (
    <div>
      {
        // just a check to see if the routeData is there
        routeData.route?.destination_system && (
          <>
            <h1>Plot Result</h1>
            <p>Estimated total jumps to {routeData.route.destination_system}: {routeData.route.total_jumps}</p>
            <p>Estimated jumps remaining: {routeData.route.total_jumps - completedJumps}</p>
            <table>
              <thead>
                <tr>
                  <th>Visited?</th>
                  <th>System</th>
                  <th>Jumps</th>
                  <th>Distance</th>
                  <th>Remaining</th>
                  <th>Neutron star?</th>
                </tr>
              </thead>
              <tbody>
                {
                  routeData.route.system_jumps.map((systemJump) => {
                    return (
                      <tr key={systemJump.id64} >
                        <td><input type="checkbox" onChange={(e) => checkboxHandler(e, systemJump)} /></td>
                        <td>{systemJump.system}</td>
                        <td>{systemJump.jumps}</td>
                        <td>{systemJump.distance_jumped.toFixed(2)}</td>
                        <td>{systemJump.distance_left.toFixed(2)}</td>
                        <td>{systemJump.neutron_star ? "Yes" : "No"}</td>
                      </tr>
                    )
                  })
                }
              </tbody>
            </table>
          </>
        )
      }
    </div>
  )
}

export default PlotResult
