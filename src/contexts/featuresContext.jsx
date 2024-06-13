import { features } from "../../public/features";
import { createContext, useContext, useEffect, useReducer } from "react";
import { featuresReducer } from "./reducers/featuresReducer";

// Create context
const featuresContext = createContext(null);

const FeaturesProvider = ({ children }) => {
  // Initiate Reducer
  const [featuresState, dispatch] = useReducer(featuresReducer, []);
  console.log(featuresState);
  // Fetch data
  useEffect(() => {
    setTimeout(() => {
      const fetchData = () => {
        dispatch({ type: "FETCH_FEATURES", payload: features });
      };
      fetchData();
    }, 1000);
  }, []);

  return (
    <featuresContext.Provider value={{ featuresState, dispatch }}>
      {children}
    </featuresContext.Provider>
  );
};

function useFeatures() {
  const context = useContext(featuresContext);
  if (!context) {
    throw new Error("useFeatures must be used within a FeaturesProvider");
  }
  return context;
}

export { FeaturesProvider, useFeatures };
