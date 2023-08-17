import './App.css';
import Homepage from './pages/HomePage';
import Signup from './pages/SignUp';
import LogIn from './pages/LogIn';
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />}/>
        <Route path="/signup" element= {<Signup />}/>
        <Route path="/login" element={<LogIn />}/>
      </Routes>
    </div>
  );
}

export default App;