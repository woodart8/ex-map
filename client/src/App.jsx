import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import MainPage from '../src/pages/MainPage'
import MapPage from '../src/pages/MapPage'
import LoginPage from '../src/pages/LoginPage'
import SignupPage from '../src/pages/SignupPage'
import QnAView from '../src/pages/QnAView';
import QnAPage from '../src/pages/QnAPage';

function App() {
  const [loginId, setLoginId] = useState('')
  const [loginState, setLoginState] = useState('')
  const [loginName, setLoginName] = useState('')

  const loginUserProps = {
    loginId,
    loginState,
    loginName
  }

  const hookProps = {
    setLoginId,
    setLoginState,
    setLoginName
  }
  
  return (
    <div className="App">
      <div>
        <Routes>
          <Route path='/' element={<MainPage {...loginUserProps} />} />
          <Route path='/login' element={<LoginPage {...hookProps} />} />
          <Route path='/signup' element={<SignupPage />} />
          <Route path='/map' element={<MapPage {...loginUserProps} />} />
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
