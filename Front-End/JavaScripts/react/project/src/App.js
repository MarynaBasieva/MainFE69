import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Header from '../src/Component/Header/Header.jsx';
//import Nav from '../src/Component/Nav/Nav.jsx';
//import Banner from '../src/Component/Banner/Banner.jsx';
//import Blog from '../src/Component/Blog/Blog.jsx';
import Footer from '../src/Component/Footer/Footer.jsx';
import Home from '../src/Pages/Home.jsx';
import AboutPage from '../src/Pages/About.jsx';

const App = () => {
  return (
    <div className="App">
        <Router>
            <Header />
                <Routes> {/* <AboutPage />*/}
                    <Route path='/' element={ <Home />} />
                    <Route path='/about' element={ <AboutPage />} />
                </Routes>
            <Footer />
        </Router>
    </div>
  );
}

export default App;
