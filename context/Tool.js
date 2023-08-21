import { useReducer, useContext, createContext } from "react";

const CounterStateContext = createContext();
const CounterDispatchContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_TOOL":
      return {
        ...state,
        tool: action.tool,
        head: [],
        handle: [],
        extra: [],
      };
    case "SET_EXTRA":
      return {
        ...state,
        extra: [...state.extra, action.extra],
      };
    case "SET_HEAD":
      return {
        ...state,
        head: [...state.head, action.head],
      };
    case "SET_HANDLE":
      return {
        ...state,
        handle: [...state.handle, action.handle],
      };
    case "RESET_TOOL":
      return {
        ...state,
        wps: [...state.wps, action.w1],
        tool: [],
        head: [],
        handle: [],
        extra: [],
      };
    default:
      throw new Error(`Unknown action: ${action.type}`);
  }
};

const initialState = {
  extra: [],
  head: [],
  handle: [],
  wps: [],
  dmg: 0,
  dura: 0,
  tool: [],
};

export const CounterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <CounterStateContext.Provider value={state}>
      <CounterDispatchContext.Provider value={dispatch}>
        {children}
      </CounterDispatchContext.Provider>
    </CounterStateContext.Provider>
  );
};

export const useCount = () => useContext(CounterStateContext);
export const useDispatchCount = () => useContext(CounterDispatchContext);
