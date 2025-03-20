import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Features from './Components/Features';
import LandingPage from './Components/LandingPage';
import Navbar from './Components/Navbar';
import Ai from './Components/Ai';

function App() {
  return (
    <>
    <Router>
      <>
        <Navbar />
        <Routes>
          <Route path="/" element={<><LandingPage /><Features /></>} />
          <Route path="/ai" element={<Ai/>} />
        </Routes>
      </>
    </Router>
    </>
  );
}

export default App;
