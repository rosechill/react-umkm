import {Routes, Route} from 'react-router-dom'

import NavbarComponent from "./components/NavbarComponent"
import FooterComponent from "./components/FooterComponent"

import HomePage from "./pages/HomePage" 
import AboutPage from "./pages/AboutPage" 
import ContactPage from "./pages/ContactPage" 
import LocationPage from "./pages/LocationPage" 

function App() {
  return <div>
    <NavbarComponent />

    <Routes>
      <Route path="/" Component={HomePage} />
      <Route path="/about" Component={AboutPage} />
      <Route path="/contact" Component={ContactPage} />
      <Route path="/location" Component={LocationPage} />
    </Routes>

    <FooterComponent /> 
  </div>;
}

export default App
