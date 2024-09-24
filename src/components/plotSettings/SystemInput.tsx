import axios from "axios"
import { useState } from "react"
import styled from "styled-components"

const SystemInput = ({ placeholder }: { placeholder: string }) => {
  const [value, setValue] = useState("")
  const [autoComplete, setAutoComplete] = useState<string[]>([])

  const changeHandler = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
    if (e.target.value.length < 3) return setAutoComplete([]) // Prevents unnecessary requests
    const res = await axios.get(`http://localhost:3000/systems?q=${e.target.value}`)
    setAutoComplete(res.data)
  }

  const autoCompleteClickHandler = (e: React.MouseEvent<HTMLLIElement>) => {
    setValue(e.currentTarget.innerText)
    setAutoComplete([])
  }

  return (
    <SystemInputContainer>
      <Input autoComplete="off" type="text" value={value} onFocus={(e)=>{e.target.select()}} onChange={changeHandler} name={placeholder.toLowerCase()} placeholder={placeholder}/>
      <AutoComplete $active={autoComplete.length === 0}>
        {autoComplete && autoComplete.map((system) => <li key={system} onClick={autoCompleteClickHandler}>{system}</li>)}
      </AutoComplete>
    </SystemInputContainer>
  )
}

const SystemInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`


const Input = styled.input`
  margin: 0;
  margin-bottom: 8px;
  height: 40px;
  width: 300px;
  font-size: 18px;
  padding: 4px 15px;
  border: 1px solid #ccc;
  border-radius: 8px;

  &:focus {
    outline: none;
  }
`

const AutoComplete = styled.ul<{$active: boolean}>`
  list-style-type: none;
  display: ${({ $active }) => $active ? "none" : "block"};
  position: absolute;
  top: 50px;
  width: 300px;
  padding: 0;
  padding: 8px 12px;
  margin: 0 0 8px 0;
  background-color: #eee;
  z-index: 1;
  border-radius: 0 0 16px 16px;

  & > li {
    padding: 4px 6px;
    cursor: pointer;
    border-radius: 6px;
    transition: 0.2s;

    &:hover {
      background-color: #ddd;
    }
  }
`

export default SystemInput
