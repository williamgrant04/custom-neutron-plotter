import React, { useState } from "react"

const RangeEfficiencyInputs = () => {
  const [range, setRange] = useState(0)
  const [efficiency, setEfficiency] = useState(60)

  const rangeChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (Number(e.target.value) < 0) return setRange(0)

    setRange(Number(e.target.value))
  }

  const efficiencyChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (Number(e.target.value) < 0) return setEfficiency(0)
    if (Number(e.target.value) > 100) return setEfficiency(100)

    setEfficiency(Number(e.target.value))
  }

  return (
    <div>
      <input type="number" value={range} onFocus={(e)=>{e.target.select()}} onChange={rangeChangeHandler}/>
      <input type="number" value={efficiency} onFocus={(e)=>{e.target.select()}} onChange={efficiencyChangeHandler}/>
    </div>
  )
}

export default RangeEfficiencyInputs
