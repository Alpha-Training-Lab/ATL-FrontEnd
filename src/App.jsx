// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/home';
import AboutPage from './pages/about';
import KeyplayersPage from './pages/teams';
import MaintenancePage from './pages/maintainance';
import RedirectionPage from './pages/redirection';
import TestimonialsPage from './pages/testimonials';
import BlogPage from './pages/blog';
import BlogPost from './pages/blogpost';
import KYCRegistration from './pages/KYCRegistration';
import LoginPage from './pages/login';

function App() {
  return (
    // <Router>
    //   <Routes>
    //     <Route path='/' element={<HomePage />} />
    //     <Route path='/about' element={<AboutPage />} />
    //     <Route path='/testimonial' element={<TestimonialsPage />} />
    //     <Route path='/Key players' element={<KeyplayersPage />} />
    //     <Route path='/blog' element={<BlogPage />} /> 
    //     <Route path='/blog/:slug' element={<BlogPost />} />
    //     <Route path='/ICredirection' element={<RedirectionPage />} />
    //     <Route path='/ICredirection/SubmitKYC' element={<KYCRegistration />} />
    //     {/* <Route path='/kyc' element={<KYCRegistration />} /> */}
    //     <Route path='/Maintenance' element={<MaintenancePage />} />
    //   </Routes>
    // </Router>
    <div>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/testimonial' element={<TestimonialsPage />} />
        <Route path='/Key players' element={<KeyplayersPage />} />
        <Route path='/blog' element={<BlogPage />} /> 
        <Route path='/blog/:slug' element={<BlogPost />} />
        <Route path='/ICredirection' element={<RedirectionPage />} />
        <Route path='/ICredirection/SubmitKYC' element={<KYCRegistration />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/Maintenance' element={<MaintenancePage />} />
      </Routes>
    </div>
  );
}

export default App;
