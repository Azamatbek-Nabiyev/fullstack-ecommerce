import Footer from './components/common/footer';
import Header from './components/common/header';
import Home from './pages/home';

function App() {
  return (
    <div className='bg-[#F0F0F0] py-2'>
      <div className='container mx-auto'>
        <Header />
        <Home />
        <Footer />
      </div>
    </div>
  );
}

export default App;
