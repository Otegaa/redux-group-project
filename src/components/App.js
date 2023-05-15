import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Profile from './profile';
import Rockets from './Rocket';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Header />}>
            <Route path="/" element={<Rockets />} />
            <Route path="/myProfile" element={<Profile />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
