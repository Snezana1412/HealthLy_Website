import { Route, Routes } from "react-router-dom";
import { FeaturesProvider } from "./contexts/featuresContext";
import Home from "./pages/Home";
import { UserProvider } from "./contexts/userContex";
import Login from "./pages/Login";
import AddFeature from "./pages/AddFeature";

export default function App() {
  return (
    <div className='App'>
      <UserProvider>
        <FeaturesProvider>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='*' element={<Home />} />
            <Route path='/add-feature' element={<AddFeature />} />
          </Routes>
        </FeaturesProvider>
      </UserProvider>
    </div>
  );
}
