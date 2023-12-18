import { Route, Routes } from 'react-router-dom';
import './App.css';
import RestView from './pages/RestView';
import Home from './pages/Home';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
     <Header/>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/Rview/:id' element={<RestView />}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
