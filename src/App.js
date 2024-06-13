import './App.css';
import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Homepage from './Pages/Home';
import Editpage from './Pages/Edit';

function App() {
  return (
    <div className="container">
      <h1 className="app-heading">Meme Generator</h1>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/edit" element={ <Editpage/>} />
      </Routes>
    </div>
  );
}

export default App;
