import CTA from "./components/CTA"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Pricing from "./components/Pricing"
import Why from "./components/Why"
import "./index.css"
import AnalyticPage from "./pages/AnalyticPage"
import InterfacePage from "./pages/interfacePage"
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import RegisterPage from "./pages/registerPage"
import LoginPage from "./pages/loginPage"
import IntegrationPage from "./pages/IntegrationPage"
import NotePage from "./pages/NotePage"
import PricingPage from "./pages/pricingPage"
import ReminderPage from "./pages/reminderPage"
import SettingPage from "./pages/settingPage"
import TaskPrioritizationPage from "./pages/taskPrioritizationPage"
import TeamPage from "./pages/teamPage"
import ProjectPage from "./pages/ProjectPage"
import InboxPage from "./pages/InboxPage"
import ResetPasswordPage from "./pages/ResetPasswordPage"; // Import the new page
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";




function App() {


  

  return (

    <div className="bg-white h-screen w-full absolute top-0 left-0">
     <ToastContainer />
        <BrowserRouter>
        
    

          <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Why />
              <CTA />
              <Pricing />
              <Footer />
            </>
          } />
        <Route path ="/analytics" element = {<AnalyticPage/>}/>
        <Route path ="/dashboard" element = {<InterfacePage/>}/>
        <Route path ="/login" element ={<LoginPage/>}/>
        <Route path ="/register" element = {<RegisterPage/>}/>
        <Route path ="/integration" element = {<IntegrationPage/>}/>
        <Route path ="/note" element = {<NotePage/>}/>
        <Route path ="/pricing" element = {<PricingPage/>}/>
        <Route path ="/reminder" element = {<ReminderPage/>}/>
        <Route path ="/setting" element = {<SettingPage/>}/>
        <Route path ="/task" element = {<TaskPrioritizationPage/>}/>
        <Route path ="/team" element = {<TeamPage/>}/>
        <Route path ="/project" element = {<ProjectPage/>}/>
        <Route path ="/inbox" element = {<InboxPage/>}/>
        <Route path="/reset-password" element={<ResetPasswordPage />} /> 

          </Routes>
        </BrowserRouter>


    </div>
  )
}

export default App
