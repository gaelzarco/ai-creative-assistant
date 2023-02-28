import HomePage from './pages/HomePage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route exact path="/" element={<HomePage/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
