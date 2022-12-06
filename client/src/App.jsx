import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import MainPage from '../src/pages/MainPage'
import MapPage from '../src/pages/MapPage'
import LoginPage from '../src/pages/LoginPage'
import SignupPage from '../src/pages/SignupPage'
import QnADetail from '../src/pages/QnADetail'
import QnAPage from '../src/pages/QnAPage'
import QuestionEditorPage from './pages/QuestionEditorPage'
import AnswerEditorPage from './pages/AnswerEditorPage'
import PromotionPage from './pages/PromotionPage'
import PromotionEditorPage from './pages/PromotionEditorPage'
import ExhibitionPage from './pages/ExhibitionPage'
import MypagePage from './pages/MypagePage'
import DocentPage from './pages/DocentPage'
import BookingPage from './pages/BookingPage'

function App() {
  const [loginId, setLoginId] = useState('')
  const [loginState, setLoginState] = useState('')
  const [loginName, setLoginName] = useState('')
  const [loginProfile, setLoginProfile] = useState('')
  const [loginAddr, setLoginAddr] = useState('')

  const loginUserProps = {
    loginId,
    loginState,
    loginName,
    loginProfile,
    loginAddr
  }

  const hookProps = {
    setLoginId,
    setLoginState,
    setLoginName,
    setLoginProfile,
    setLoginAddr
  }
  
  return (
    <div className="App">
      <div>
        <Routes>
          <Route path='/' element={<MainPage {...loginUserProps} />} />
          <Route path='/login' element={<LoginPage {...hookProps} />} />
          <Route path='/signup' element={<SignupPage />} />
          <Route path='/exhibition' element={<ExhibitionPage {...loginUserProps} />} />
          <Route path='/map' element={<MapPage {...loginUserProps} />} />
          <Route path='/promotion' element={<PromotionPage {...loginUserProps} />} />
          <Route path='/promotion/post' element={<PromotionEditorPage {...loginUserProps} />} />
          <Route path='/qna' element={<QnAPage {...loginUserProps} />} />
          <Route path='/question/post' element={<QuestionEditorPage {...loginUserProps} />} />
          <Route path='/answer/post' element={<AnswerEditorPage {...loginUserProps} />} />
          <Route path='/qna/:qid' element={<QnADetail {...loginUserProps} />} />
          <Route path={`/mypage/${loginId}`} element={<MypagePage {...loginUserProps}/>}/>
          <Route path='/docent' element={<DocentPage {...loginUserProps} />} />
          <Route path={'/booking/:ex_id'} element={<BookingPage {...loginUserProps} />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
