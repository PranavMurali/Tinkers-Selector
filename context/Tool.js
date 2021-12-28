import { useReducer, useContext, createContext } from 'react'

const CounterStateContext = createContext()
const CounterDispatchContext = createContext()

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_TOOL':
    return {
        ...state,
        tool: action.tool,
        headnos: action.headnos,
        handlenos: action.handlenos,
        extranos: action.extranos,
    }
    case 'SET_EXTRA':
    return {
        ...state,
        extra:[...state.extra,action.extra],
    }
    case 'SET_HEAD':
    return {
        ...state,
        head:[...state.head,action.head],
    }
    case 'SET_HANDLE':
    return {
        ...state,
        handle:[...state.handle,action.handle],
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
  extra: [],
  extranos: 0,
  damage: 0,
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