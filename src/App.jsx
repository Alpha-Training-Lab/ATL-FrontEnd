import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/home';
import AboutPage from './pages/about';
import KeyplayersPage from './pages/teams';
import MaintenancePage from './pages/maintainance';
import RedirectionPage from './pages/redirection';
import TestimonialsPage from './pages/testimonials';
import BlogPage from './pages/blog';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/Key players' element={<KeyplayersPage />} />
        <Route path='/Maintenance' element={<MaintenancePage />} />
        <Route path='/testimonial' element={<TestimonialsPage />} />
        <Route path='/blog' element={<BlogPage />} /> 
        <Route path='/redirection' element={<RedirectionPage />} />
      </Routes>
    </div>
  );
}

export default App;
