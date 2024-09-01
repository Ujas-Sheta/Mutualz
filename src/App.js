import './App.scss';
import Home from './moduals/home';
import Header from './shared/components/header';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from './shared/components/footer';
function App() {
  return (
    <div>
        <Header/>
        <Home/>
        <Footer/>
    </div>
  );
}

export default App;
