import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Footer/Footer";
import Header from './Components/Header/Header'
import Hero from "./Components/Hero/Hero";
import Products from "./Components/Products/Products";
import Slider from "./Components/Slider/Slider";
import Testimonials from "./Components/Testimonials/Testimonials";
import Virtual from "./Components/Virtual/Virtual";

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={
        <>
        <Hero/>
        <Slider/>
        <Virtual/>
        <Products/>
        <Testimonials/>
        </>
      } />
      <Route path="/collection" element={
        <Products/>
      }
      />
      </Routes>
      <Footer/>
      </div>
  );
}

export default App;
