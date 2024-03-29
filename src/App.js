import logo from './logo.svg';
import './App.css';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
     <Header/>
     <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/portfolio' element={<Portfolio/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/resume' element={<Resume/>}/>
     </Routes>
     <Footer/>
     </BrowserRouter>
    </div>
  );
}

export default App;
