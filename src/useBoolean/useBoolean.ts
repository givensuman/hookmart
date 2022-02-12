import { useState } from 'react'

interface Props {
  state: boolean,
  setTrue: () => void,
  setFalse: () => void,
  toggle: () => void
}

const useBoolean = (inputValue: boolean = false): Props => {
  const [ state, setState ] = useState(inputValue)

  const setTrue = () => setState(true)
  const setFalse = () => setState(false)
  const toggle = () => setState(prev => !prev)

  return { state, setTrue, setFalse, toggle }
}

export default useBoolean
