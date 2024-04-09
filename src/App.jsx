import FirstStep from "./components/FirstStep";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SecondStep from "./components/SecondStep";
import ThirdStep from "./components/ThirdStep";
import FinalStep from "./components/FinalStep";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FirstStep />} />
        <Route path="/SecondStep" element={<SecondStep />} />
        <Route path="/ThirdStep" element={<ThirdStep />} />
        <Route path="/FinalStep" element={<FinalStep />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
