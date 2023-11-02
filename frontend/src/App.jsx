import { Routes  , Route } from 'react-router-dom'
import Login from './page/Login'
import Signup from './page/Signup'
import LandingPage from './page/LandingPage'
import Footer from './component/Footer'
import ContactUs from './page/Contactus'
import AboutUs from './page/Aboutus'
// import "./css/app.css"


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={ < Login /> } /> 
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/aboutus" element={<AboutUs />} />
        {/*
        <Route path="/courselist/:coursename" element={<CourseList />} />
        <Route path="/courselist" element={<CourseList />} />
        <Route path="/compare" element={<Comparision />} />
        <Route path="/" element={<PersistedUser />}>
          <Route path="course-detail/:id" element={<CourseDetail />} />
        </Route> */}
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
