import { useReducer, useContext, createContext } from 'react'

const CounterStateContext = createContext()
const CounterDispatchContext = createContext()

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_TOOL':
    return {
        ...state,
        tool: action.tool,
        head: action.head,
        headnos: action.headnos,
        handle: action.handle,
        handlenos: action.handlenos,
        extras: action.extras,
        extranos: action.extranos,
    }
    default:
      throw new Error(`Unknown action: ${action.type}`)
  }
}

const initialState = {
  tool: '',
  head:[] ,
  headnos: 0,
  handle: [],
  handlenos: 0,
  extras: [],
  extranos: 0,
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