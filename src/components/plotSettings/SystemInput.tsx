import axios from "axios"
import { useState } from "react"

const SystemInput = ({ placeholder }: { placeholder: string }) => {
  const [value, setValue] = useState("")
  const [autoComplete, setAutoComplete] = useState<string[]>([])

  const changeHandler = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
    if (e.target.value.length < 3) return setAutoComplete([]) // Prevents unnecessary requests
    const res = await axios.get(`http://localhost:3000/systems?q=${e.target.value}`)
    setAutoComplete(res.data)
  }

  return (
    <>
      <input type="text" value={value} onChange={changeHandler} placeholder={placeholder}/>
      <ul>
        {autoComplete && autoComplete.map((system) => <li key={system}>{system}</li>)}
      </ul>
    </>
  )
}

export default SystemInput
