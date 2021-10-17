import { useReducer, useContext, createContext } from 'react'

const CounterStateContext = createContext()
const CounterDispatchContext = createContext()

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_TOOL':
    return {
        ...state,
        tool: action.tool,
        parts: action.parts,
    }
    default:
      throw new Error(`Unknown action: ${action.type}`)
  }
}

const initialState = {
  tool: '',
  parts: [],
}

export const CounterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <CounterDispatchContext.Provider value={dispatch}>
      <CounterStateContext.Provider value={state}>
        {children}
      </CounterStateContext.Provider>
    </CounterDispatchContext.Provider>
  )
}

export const useCount = () => useContext(CounterStateContext)
export const useDispatchCount = () => useContext(CounterDispatchContext)