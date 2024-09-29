import ReactDOM from "react-dom/client";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar1 from './Components/Navbar1';
import Carousel1 from './Components/Carousel1';
import Program from './Components/Program';
import Contact from './Components/Contact';
import { Routes, Route } from "react-router-dom";
import MealSection from "./MealSection";
import Home from "./Components/Home";
import SurveyForm from "./SurveyForm";

function App() {
  return (
    <div className="App">
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mealSection" element={<MealSection />} />
        <Route path="/healthSurvey" element={<SurveyForm />} /> 
        
      </Routes> 
    </div>
  );
}

export default App;
