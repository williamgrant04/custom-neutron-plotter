import { useState } from "react"

const SystemInput = ({ placeholder }: { placeholder: string }) => {
  const [value, setValue] = useState("")

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  return (
    <input type="text" value={value} onChange={changeHandler} placeholder={placeholder}/>
  )
}

export default SystemInput
