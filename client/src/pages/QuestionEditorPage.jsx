import React from 'react'
import GlobalStyle from '../components/GlobalStyle';
import Editor from '../components/Editor'
import MainHeader from '../components/MainHeader'
import { useLocation } from 'react-router-dom';

const QuestionEditorPage = ({...loginUserProps}) => {
  const location = useLocation();
  const obj = {
    editorState: 'question',
    exTitle: '',
    userId: loginUserProps.loginId
  }
  if(location.state !== null) obj.exTitle = location.state.ex_title;

  console.log(obj);
  return (
      <div>
          <GlobalStyle />
          <MainHeader {...loginUserProps} />
          <Editor {...obj} />
      </div>
  )
}

export default QuestionEditorPage;