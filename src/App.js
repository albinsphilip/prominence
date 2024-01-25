import React from 'react';
import { BrowserRouter,Route,Routes} from 'react-router-dom';
//import Navbar from './components/Navbar';
import Home from './components/Home';
import Events from './components/Events';
import Contact from './components/Contact';
import { useState, useEffect } from 'react'
//add and modify other codes above and below

const App=()=>{
  const [isShown, setIsShown] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsShown(true);
    }, 5000); // Change this to the desired delay in milliseconds

    return () => clearTimeout(timer); // This will clear the timer when the component unmounts
  }, []);
  return(
    isShown?
<div>

    <BrowserRouter>
      <div>
       
        <Routes>
        <Route path="/" element={<Home />} /> 
        
         <Route path="/Events" element={<Events />} />
         <Route path="/Contact" element={<Contact />} />
          </Routes>
      </div>
    </BrowserRouter>
    </div>
    : <div>
    <div class="container">
      <div class="row">
        <div class="col-md-12 text-center">
          <h3 class="animate-charcter"> PROMINENCE</h3>
        </div>
      </div>
    </div>
    </div>
  );
};

export default App;
  