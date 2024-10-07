import CTA from "./components/CTA"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Pricing from "./components/Pricing"
import Why from "./components/Why"
import "./index.css"
import AnalyticsPage from "./pages/analyticsPage"
import InterfacePage from "./pages/interfacePage"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegisterPage from "./pages/registerPage"
import LoginPage from "./pages/loginPage"


function App() {

  return (

    <div className="bg-white h-screen w-full absolute top-0 left-0">
        <BrowserRouter>
        
    

          <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Why />
              <Pricing />
              <CTA />
              <Footer />
            </>
          } />
        <Route path ="/analytics" element = {<AnalyticsPage/>}/>
        <Route path ="/dashboard" element = {<InterfacePage/>}/>
        <Route path ="/login" element = {<LoginPage/>}/>
        <Route path ="/register" element = {<RegisterPage/>}/>

          </Routes>
        </BrowserRouter>


    </div>
  )
}

export default App
