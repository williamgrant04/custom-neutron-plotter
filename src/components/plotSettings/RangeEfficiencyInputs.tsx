import React, { useState } from "react"
import styled from "styled-components"

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
    <REInputsContainer>
      <Input type="number" name="range" value={range} onFocus={(e)=>{e.target.select()}} onChange={rangeChangeHandler}/>
      <Input type="number" name="efficiency" value={efficiency} onFocus={(e)=>{e.target.select()}} onChange={efficiencyChangeHandler}/>
    </REInputsContainer>
  )
}

const REInputsContainer = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
`

const Input = styled.input`
  margin: 8px 5px;
  height: 40px;
  width: 130px;
  font-size: 18px;
  padding: 4px 15px;
  border: 1px solid #ccc;
  border-radius: 8px;

  &:focus {
    outline: none;
  }
`

export default RangeEfficiencyInputs
