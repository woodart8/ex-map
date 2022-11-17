import { Route, Routes } from 'react-router-dom'
import MainPage from '../src/pages/MainPage'
import MapPage from '../src/pages/MapPage'
import LoginPage from '../src/pages/LoginPage'
import SignupPage from '../src/pages/SignupPage'

function App() {
  
  return (
    <div className="App">
      <div>
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/signup' element={<SignupPage />} />
          <Route path='/map' element={<MapPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
