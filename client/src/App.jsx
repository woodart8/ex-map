import { Route, Routes } from 'react-router-dom'
import MapPage from '../src/pages/MapPage'
import LoginPage from '../src/pages/LoginPage'
import SignupPage from '../src/pages/SignupPage'
import QnAView from '../src/pages/QnAView';
import QnAPage from '../src/pages/QnAPage';

function App() {
  
  return (
    <div className="App">
      <div>
        <Routes>
          <Route path='/login' element={<LoginPage />} />
          <Route path='/signup' element={<SignupPage />} />
        </Routes>
      </div>
      <div>
        <Routes>
          <Route path='/map' element={<MapPage />} />
        </Routes>
      </div>
      <div>
        <Routes>
          <Route path='/qnaView/:no' element={<QnAView />} />
          <Route path='/qna' element={<QnAPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
