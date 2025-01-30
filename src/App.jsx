import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/home';
import AboutPage from './pages/about';
import KeyplayersPage from './pages/teams';
import MaintenancePage from './pages/maintainance';
// import { useAuth } from './context/AuthContext';

function App() {
  // const { isLoggedIn } = useAuth();

  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/Key players' element={<KeyplayersPage />} />
        <Route path='/Maintenance' element={<MaintenancePage />} />
      </Routes>
    </div>
  );
}

export default App;
