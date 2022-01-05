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
        extranos: action.extranos,
        headnos: action.headnos,
        handlenos: action.handlenos,
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
    case 'RESET_TOOL':
    return {
        ...state,
        wps: [...state.wps,action.w1],
        tool: '',
        head:[] ,
        headnos: 0,
        handle: [],
        handlenos: 0,
        extra: [],
        extranos: 0,
        damage: 0,
        parts: [],
    }
    default:
      throw new Error(`Unknown action: ${action.type}`)
  }
}

const initialState = {
  tool: '',
  extra: [],
  head: [],
  handle: [],
  wps:[],
  extranos:0,
  headnos:0,
  handlenos:0,
  parts:[],
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