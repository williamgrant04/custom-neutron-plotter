import RangeEfficiencyInputs from "./RangeEfficiencyInputs"
import SystemInput from "./SystemInput"

const PlotSettings = () => {
  return (
    <div>
      <h1>Plot Settings</h1>
      <SystemInput placeholder="Source system" />
      {/* might have via because it's kinda useful sometimes */}
      <SystemInput placeholder="Destination system" />
      {/* maybe reverse route? */}
      <RangeEfficiencyInputs />
    </div>
  )
}

export default PlotSettings
