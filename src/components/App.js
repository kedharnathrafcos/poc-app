import React from "react"; 
import Header from "./Header"; 
import Footer from "./Footer"; 
import ScreenThree from "./ScreenThree";
import Screenone from "./Screenone";
import Screentwo from "./Screentwo";

import Screenfour from "./Screenfour"

import  NavSection from './NavSection'
import '../styles/index.css' 

const App = () => {
  
  return (
    <div className="mainContainer"> 
      <Header /> 
      {/* <NavSection />  */}
     <Screenone />
      <Screentwo />      
      <ScreenThree /> 
      <Screenfour /> 
      <Footer/>
    </div>
  );
};
export default App;
