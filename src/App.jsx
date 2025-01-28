import { useState } from 'react';
// import Header from './components/common/header';
// import Footer from './components/common/footer';
import Home from './pages/home';
import { useAuth } from './context/AuthContext';

function App() {
  const { isLoggedIn } = useAuth();

  return (
    // <div className="flex flex-col min-h-screen">
    //   <Header isLoggedIn={isLoggedIn} />
    //   <main className="flex-grow pt-[64px]">
    //     <h1 className="text-4xl font-bold text-black">
    //       Welcome to Alpha Training Lab
    //     </h1>
    //     <p className="text-black mt-4">This is the main content area.</p>
    //   </main>
    //   <Footer />
    // </div>
    <Home />
  );
}

export default App;
