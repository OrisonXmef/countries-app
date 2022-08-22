import {BrowserRouter, Route,Routes } from "react-router-dom";
import HomeScreen from "./screans/HomeScreen";
import ContactScreen from "./screans/ContactScreen";
import DetailScreen from "./screans/DetailScreen";
import AboutScreen from "./screans/AboutScreen";
import Header from "./Components/Header";

function App(){
  return(
    <BrowserRouter>
    <div>
      <Header />
    <Routes>
      <Route path="/" element={<HomeScreen />}/>
      <Route path="/contact" element={<ContactScreen />}/>
      <Route path="/about" element={<AboutScreen />}/>
      <Route path="/detail/:name" element={<DetailScreen />}/>
    </Routes></div>
    </BrowserRouter>
  )
}
export default App;