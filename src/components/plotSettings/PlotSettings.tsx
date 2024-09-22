import RangeEfficiencyInputs from "./RangeEfficiencyInputs"
import SystemInput from "./SystemInput"

const PlotSettings = () => {
  return (
    <div>
      <h1>Plot Settings</h1>
      {/* source system, this will require pings to their system autocomplete thing */}
      <SystemInput placeholder="Source system" />
      {/* might have via because it's kinda useful sometimes */}
      {/* destination system */}
      <SystemInput placeholder="Destination system" />
      {/* maybe reverse route? */}
      {/* range */}
      {/* efficiency (defualt to 60 like on spansh) I hate sliders so I'm not adding that */}
      <RangeEfficiencyInputs />
    </div>
  )
}

export default PlotSettings
