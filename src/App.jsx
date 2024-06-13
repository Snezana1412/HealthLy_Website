import { Route, Routes } from "react-router-dom";
import { FeaturesProvider } from "./contexts/featuresContext";
import Home from "./pages/Home/Home";

export default function App() {
  return (
    <div className='App'>
      <FeaturesProvider>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </FeaturesProvider>
    </div>
  );
}
