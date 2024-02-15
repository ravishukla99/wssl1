import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Home';
import Services from "./Services.js";
import Contact from "./components/Contact.js";
import ErrorPage from "./ErrorPage";
import About from "./About";
import Isi from "./Isi.js";
import Fmcs from "./Fmcs.js"
import Fassai from "./Fassai.js";
import Crs from "./Crs.js";

	/* The following line can be included in your src/index.js or App.js file */
  
import 'bootstrap/dist/css/bootstrap.min.css'
import Footer from "./components/Footer";
import Header from "./components/Header"

/* Contact */
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'


const App = () => {
  return (
    	<Router>

	<Header/>
	
	
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
		  <Route path="/about" element={<About/>}/>
		  <Route path="/isi" element={<Isi/>}/>
		  <Route path="/fmcs" element={<Fmcs/>}/>
		  <Route path="/fassai" element={<Fassai/>}/>
		  <Route path="/crs" element={<Crs/>}/>

          <Route path="*" element={<ErrorPage />} />

        </Routes>
		<Footer />
      </Router>
	  
  );
};

export default App;
