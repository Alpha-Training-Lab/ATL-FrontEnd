import { Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/home';
import AboutPage from './pages/about';
import KeyplayersPage from './pages/teams';
import RedirectionPage from './pages/redirection';
import TestimonialsPage from './pages/testimonials';
import BlogPage from './pages/blog';
import BlogPost from './pages/blogpost';
import TermsAndConditions from './pages/t&C';
import PrivacyPolicy from './pages/privacy';

// ------------------=====================---------------
// App routing starts here
function App() {
  return (
    <div>
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/testimonial' element={<TestimonialsPage />} />
        <Route path='/Key players' element={<KeyplayersPage />} />
        <Route path='/blog' element={<BlogPage />} />
        <Route path='/blog/:slug' element={<BlogPost />} />
        <Route path='/terms-and-conditions' element={<TermsAndConditions />} />
        <Route path='/privacy-policy' element={<PrivacyPolicy />} />
        <Route path='/ICredirection' element={<RedirectionPage />} />
      </Routes>
    </div>
  );
}

export default App;
