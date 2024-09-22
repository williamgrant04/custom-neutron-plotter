import axios from "axios"
import RangeEfficiencyInputs from "./RangeEfficiencyInputs"
import SystemInput from "./SystemInput"

const PlotSettings = () => {

  const plotSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const plotData = {
      source: e.currentTarget.source.value,
      destination: e.currentTarget.destination.value,
      range: e.currentTarget.range.value,
      efficiency: e.currentTarget.efficiency.value
    }
    axios.get(`http://localhost:3000/route?from=${plotData.source}&to=${plotData.destination}&range=${plotData.range}&efficiency=${plotData.efficiency}`)
    {/* This is get because I'm sending it through a custom built proxy and using a get request is just simpler */}
    {/* Even though I'm aware this doesn't follow best practice */}
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
