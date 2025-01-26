import Header from '../components/common/header';
import Main from '../components/home/mainsec';
import Footer from '../components/common/footer';
import { useAuth } from '../context/AuthContext';

const Home = () => {
  const { isLoggedIn } = useAuth();

  return (
    <div className="flex flex-col w-full">
      <Header isLoggedIn={isLoggedIn} />
      <Main />
      <Footer />
    </div>
  );
};

export default Home;
