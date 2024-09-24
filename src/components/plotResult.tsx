import { useContext, useState } from "react"
import RouteDataContext, { SystemJump } from "../store/routeData"
import styled from "styled-components"

const PlotResult = () => {
  const routeData = useContext(RouteDataContext)
  const [completedJumps, setCompletedJumps] = useState(0)

  const checkboxHandler = (event: React.ChangeEvent<HTMLInputElement>, systemJump: SystemJump) => {
    if (event.target.checked) setCompletedJumps(completedJumps + systemJump.jumps)

    if (!event.target.checked) setCompletedJumps(completedJumps - systemJump.jumps)
  }

  return (
    <PlotResultContainer>
      {
        // just a check to see if the routeData is there
        routeData.route?.destination_system && (
          <>
            <h1>Route</h1>
            <h2>Estimated total jumps to {routeData.route.destination_system}: {routeData.route.total_jumps}</h2>
            <h2>Estimated jumps remaining: {routeData.route.total_jumps - completedJumps}</h2>
            <p>Clicking on a system name will copy it to the clipboard</p>
            <table width="100%">
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
                  routeData.route.system_jumps.map((systemJump, i) => {
                    return (
                      <JumpData key={systemJump.id64} $i={i}>
                        <td><Checkbox type="checkbox" onChange={(e) => checkboxHandler(e, systemJump)} id={systemJump.id64.toString()}/></td>
                        <System onClick={() => { navigator.clipboard.writeText(systemJump.system) }}>{systemJump.system}</System>
                        <td>{systemJump.jumps}</td>
                        <td>{systemJump.distance_jumped.toFixed(2)}</td>
                        <td>{systemJump.distance_left.toFixed(2)}</td>
                        <td>{systemJump.neutron_star ? "Yes" : "No"}</td>
                      </JumpData>
                    )
                  })
                }
              </tbody>
            </table>
          </>
        )
      }
    </PlotResultContainer>
  )
}

const PlotResultContainer = styled.div`
  width: 60%;
  margin-bottom: 20px;
`

const JumpData = styled.tr<{$i: number}>`
  background-color: ${({ $i }) => $i % 2 === 0 ? "#f0f0f0" : "#ffffff"};
  text-align: center;
  border-radius: 8px;
`

const Checkbox = styled.input`
  width: 20px;
  height: 20px;
  cursor: pointer;
`

const System = styled.td`
  font-weight: 600;
  text-align: left;
  cursor: pointer;
`


export default PlotResult
