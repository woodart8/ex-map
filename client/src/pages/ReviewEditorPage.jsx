import React from 'react'
import GlobalStyle from '../components/GlobalStyle';
import Editor from '../components/Editor'
import MainHeader from '../components/MainHeader'
import { useLocation } from 'react-router-dom';

const ReviewEditorPage = ({...loginUserProps}) => {
  const location = useLocation();
  const obj = {
    editorState: 'review',
    exId: location.state.ex_id,
    exTitle: location.state.ex_title,
    userId: loginUserProps.loginId
  }
  if(location.state !== null) obj.exTitle = location.state.ex_title;

  return (
      <div>
          <GlobalStyle />
          <MainHeader {...loginUserProps} />
          <Editor {...obj} />
      </div>
  )
}

export default ReviewEditorPage;