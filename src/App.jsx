import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/home';
import About from './pages/about';
import AboutPage from './pages/about';
// import { useAuth } from './context/AuthContext';

function App() {
  // const { isLoggedIn } = useAuth();

  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
      </Routes>
    </div>
  );
}

export default App;
