import { createContext, useContext, useReducer } from "react";
import { userReducer } from "./reducers/userReducer";

// Create context
const userContext = createContext(null);

const UserProvider = ({ children }) => {
  // Initiate Reducer
  const [userState, dispatch] = useReducer(userReducer, {
    isLogged: false,
    user: {},
  });
  console.log(userState);

  return (
    <userContext.Provider value={{ userState, dispatch }}>
      {children}
    </userContext.Provider>
  );
};

function useUser() {
  const context = useContext(userContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
}

export { UserProvider, useUser };
