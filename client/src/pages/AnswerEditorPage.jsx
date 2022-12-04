import React from 'react'
import GlobalStyle from '../components/GlobalStyle';
import Editor from '../components/Editor'
import MainHeader from '../components/MainHeader'
import { useLocation } from 'react-router-dom';

const AnswerEditorPage = ({...loginUserProps}) => {
  const location = useLocation();
  const obj = {
    editorState: 'answer',
    qid: location.state.question_id,
    qTitle: location.state.question_title,
    docentId: loginUserProps.loginId
  }
    return (
        <div>
            <GlobalStyle />
            <MainHeader {...loginUserProps} />
            <Editor {...obj} />
        </div>
    )
}

export default AnswerEditorPage;