import axios from "axios"
import RangeEfficiencyInputs from "./RangeEfficiencyInputs"
import SystemInput from "./SystemInput"
import { useContext } from "react"
import RouteDataContext from "../../store/routeData"

const PlotSettings = () => {
  const routeData = useContext(RouteDataContext)

  const plotSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const plotData = {
      source: e.currentTarget.source.value,
      destination: e.currentTarget.destination.value,
      range: e.currentTarget.range.value,
      efficiency: e.currentTarget.efficiency.value
    }
    const res = await axios.get(`http://localhost:3000/route?efficiency=${plotData.efficiency}&range=${plotData.range}&from=${plotData.source}&to=${plotData.destination}`)

    if (res.data?.status === "queued") {
      const jobID = res.data.job

      const fetchJob = setInterval(() => {
        axios.get(`http://localhost:3000/results?id=${jobID}`).then((response) => {
          if (response.data?.result) {
            clearInterval(fetchJob)
            routeData.setRoute(response.data.result)
          }
        })
      }, 6000)
    }
  }

  return (
    <div>
      <h1>Plot Settings</h1>
      <form onSubmit={plotSubmitHandler}>
        <SystemInput placeholder="Source" />
        {/* might have via because it's kinda useful sometimes */}
        <SystemInput placeholder="Destination" />
        {/* maybe reverse route? */}
        <RangeEfficiencyInputs />
        <input type="submit" value="Plot route" />
      </form>
    </div>
  )
}

export default PlotSettings
