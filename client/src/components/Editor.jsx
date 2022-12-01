import styled, { css } from 'styled-components'
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Axios from 'axios'

const EditorContainer = styled.div`
  width: 100%;
  height: 937px;
  background-color: #ededed;
  position: relative;

  button {
    position: absolute;
    top: 850px;
    right: 200px;
    background-color: #000;
    color: #fff;
    font-size: 20px;
    width: 115px;
    height: 49px;
    border-radius: 40px;
  }

  select {
    position: absolute;
    width: 154px;
    height: 45px;
    font-size: 18px;
    font-weight: 600;
    padding-left: 7px;
    top: 42px;
    right: 180px;
    border-radius: 5px;
  }

  #topic {
    font-size: 20px;
    font-weight: 600;
    position: absolute;
    top: 10px;
    left: 50%;
    transform: translateX(-50%);
  }
`

const EditorFormContainer = styled.div`
  width: 1057px;
  height: 846px;
  background-color: #fff;
  border: 1px solid #000;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  input[type=text] {
    width: 980px;
    height: 60px;
    font-size: 20px;
    -webkit-appearance: none;
    border-left-width:0;
    border-right-width:0;
    border-top-width:0;
    border-bottom-width:1;
    outline: none;
  }

  #title {
    position: absolute;
    font-size: 25px;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
  }

  #period {
    position: absolute;
    top: 85px;
    left: 50%;
    transform: translateX(-50%);
  }

  #place {
    position: absolute;
    top: 150px;
    left: 50%;
    transform: translateX(-50%);
  }

  textarea {
    width: 980px;
    height: 640px;
    top: 115px;
    font-size: 20px;
    resize: none;
    border: 1px solid #000;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    padding-top: 10px;
    padding-left: 10px;
    outline: none;

    ${props => props.promotion && css`
      height: 514px;
      top: 250px;
    `}
  }

  input[type=file] {
    position: absolute;
    left: 40px;
    bottom: 25px;
  }

`

function ReviewEditor(props) {
  const [title, setTitle] = useState('')
  const [writer, setWriter] = useState(props.userId)
  const [content, setContent] = useState('')
  const [star, setStar] = useState(0)
  const [starText, setStarText] = useState('')
  const [exId, setExId] = useState(props.exId)
  const [fileState, setFileState] = useState('')

  const navigate = useNavigate()

  const starChange = (e) => {
    setStar(parseFloat(e.target.value))
    setStarText(e.target.value)
  }

  const handleUploadButtonClick = e => {
    if(fileState !== null){
        if(fileState === e.target.files[0])
        e.target.value = '';
    }
    setFileState(e.target.files[0]);
  }

  const submitReview = () => {
    if(fileState === '' || fileState === undefined) {
      const obj = {
        'title': title,
        'writer': writer,
        'content': content,
        'star': star,
        'exId': exId
      }
      
      Axios.post(
          'http://localhost:5000/api/review/post',
          obj).then((response) => {
              if(response.data.success) {
                  navigate('/map')
              }
      })

    } else {
      let formData = new FormData();
      formData.append('image', fileState)
      formData.append('title', title)
      formData.append('writer', writer)
      formData.append('content', content)
      formData.append('star', star)
      formData.append('exId', exId)

      Axios.post(
          'http://localhost:5000/api/review/post/image',
          formData).then((response) => {
              if(response.data.success) {
                  navigate('/map')
              }
      })
    }
  }

  return (
    <EditorContainer>
      <div id="topic">{props.exTitle}</div>
      <EditorFormContainer>
        <input type="text" 
            name="title" 
            placeholder="제목"
            id="title" 
            onChange={(e) => setTitle(e.target.value)} />
        <textarea name="content" 
            id="content" 
            defaultValue="" 
            cols="30" rows="10" 
            placeholder="내용을 입력해주세요!"
            onChange={(e) => setContent(e.target.value)} ></textarea>
        <input type="file" id="file" accept="image/*" 
              onChange={(e) => handleUploadButtonClick(e)} />
      </EditorFormContainer>
      <select value={starText} onChange={(e) => starChange(e)}>
          <option value="0">별점</option>
          <option value="0.5">0.5</option>
          <option value="1.0">1.0</option>
          <option value="1.5">1.5</option>
          <option value="2.0">2.0</option>
          <option value="2.5">2.5</option>
          <option value="3.0">3.0</option>
          <option value="3.5">3.5</option>
          <option value="4.0">4.0</option>
          <option value="4.5">4.5</option>
          <option value="5.0">5.0</option>
        </select>
      <button type="submit" onClick={submitReview} >Upload</button>
    </EditorContainer>
  )
}

function QuestionEditor(props) {
  const [title, setTitle] = useState('')
  const [writer, setWriter] = useState(props.userId)
  const [content, setContent] = useState('')
  const [fileState, setFileState] = useState('')

  const navigate = useNavigate()

  const handleUploadButtonClick = e => {
    if(fileState !== null){
        if(fileState === e.target.files[0])
        e.target.value = '';
    }
    setFileState(e.target.files[0]);
  }

  const submitQuestion = () => {
    if(fileState === '' || fileState === undefined) {
      const obj = {
        'title': title,
        'writer': writer,
        'content': content
      }
      
      Axios.post(
          'http://localhost:5000/api/question/post',
          obj).then((response) => {
              if(response.data.success) {
                  navigate('/qna')
              }
      })

    } else {
      let formData = new FormData();
      formData.append('image', fileState)
      formData.append('title', title)
      formData.append('writer', writer)
      formData.append('content', content)

      Axios.post(
          'http://localhost:5000/api/question/post/image',
          formData).then((response) => {
              if(response.data.success) {
                  navigate('/qna')
              }
      })
    }
  }

  return (
    <EditorContainer>
      <div id="topic">{props.exTitle}</div>
        <EditorFormContainer>
          <input type="text" 
              name="title" 
              placeholder="제목" 
              id="title"
              onChange={(e) => setTitle(e.target.value)} />
          <textarea name="content" 
              id="content" 
              defaultValue="" 
              cols="30" rows="10" 
              placeholder="내용을 입력해주세요!"
              onChange={(e) => setContent(e.target.value)} ></textarea>
          <input type="file" id="file" accept="image/*" 
                onChange={(e) => handleUploadButtonClick(e)} />
        </EditorFormContainer>
        <button type="submit" onClick={submitQuestion} >Upload</button>
    </EditorContainer>
  )
}

function AnswerEditor(props) {
  const [title, setTitle] = useState('')
  const [writer, setWriter] = useState(props.userId)
  const [content, setContent] = useState('')
  const [fileState, setFileState] = useState('')
  const [qid, setQid] = useState(props.qid)

  const navigate = useNavigate()

  const handleUploadButtonClick = e => {
    if(fileState !== null){
        if(fileState === e.target.files[0])
        e.target.value = '';
    }
    setFileState(e.target.files[0]);
  }

  const submitAnswer = () => {
    if(fileState === '' || fileState === undefined) {
      const obj = {
        'title': title,
        'writer': writer,
        'content': content,
        'qid': qid
      }
      
      Axios.post(
          'http://localhost:5000/api/answer/post',
          obj).then((response) => {
              if(response.data.success) {
                  navigate('/qna/'+qid)
              }
      })

    } else {
      let formData = new FormData();
      formData.append('image', fileState)
      formData.append('title', title)
      formData.append('writer', writer)
      formData.append('content', content)
      formData.append('qid', qid)

      Axios.post(
          'http://localhost:5000/api/answer/post/image',
          formData).then((response) => {
              if(response.data.success) {
                  navigate('/qna/'+qid)
              }
      })
    }
  }

  return (
    <EditorContainer>
      <div id="topic">Q. {props.qTitle}</div>
        <EditorFormContainer>
          <input type="text" 
              name="title" 
              placeholder="제목" 
              id="title"
              onChange={(e) => setTitle(e.target.value)} />
          <textarea name="content" 
              id="content" 
              defaultValue="" 
              cols="30" rows="10" 
              placeholder="내용을 입력해주세요!"
              onChange={(e) => setContent(e.target.value)} ></textarea>
          <input type="file" id="file" accept="image/*"
                onChange={(e) => handleUploadButtonClick(e)} />
        </EditorFormContainer>
        <button type="submit" onClick={submitAnswer} >Upload</button>
    </EditorContainer>
  )
}

function PromotionEditor(props) {
  const [title, setTitle] = useState('')
  const [writer, setWriter] = useState(props.userId)
  const [period, setPeriod] = useState('')
  const [place, setPlace] = useState('')
  const [content, setContent] = useState('')
  const [fileState, setFileState] = useState('')

  const navigate = useNavigate()

  const handleUploadButtonClick = e => {
    if(fileState !== null){
        if(fileState === e.target.files[0])
        e.target.value = '';
    }
    setFileState(e.target.files[0]);
  }

  const submitPromotion = () => {
    if(fileState === '' || fileState === undefined) {
      const obj = {
        'title': title,
        'writer': writer,
        'content': content,
        'period': period,
        'place': place
      }
      
      Axios.post(
          'http://localhost:5000/api/promotion/post',
          obj).then((response) => {
              if(response.data.success) {
                  navigate('/promotion')
              }
      })

    } else {
      let formData = new FormData();
      formData.append('image', fileState)
      formData.append('title', title)
      formData.append('writer', writer)
      formData.append('content', content)
      formData.append('period', period)
      formData.append('place', place)

      Axios.post(
          'http://localhost:5000/api/promotion/post/image',
          formData).then((response) => {
              if(response.data.success) {
                  navigate('/promotion')
              }
      })
    }
  }

  return (
    <EditorContainer>
        <EditorFormContainer promotion={true} >
          <input type="text" 
              name="title" 
              placeholder="제목" 
              id="title"
              onChange={(e) => setTitle(e.target.value)} />
          <input type="text" 
              name="period" 
              placeholder="전시 기간" 
              id="period"
              onChange={(e) => setPeriod(e.target.value)} />
          <input type="text" 
              name="place" 
              placeholder="전시 장소" 
              id="place"
              onChange={(e) => setPlace(e.target.value)} />
          <textarea name="content" 
              id="content" 
              defaultValue="" 
              cols="30" rows="10" 
              placeholder="내용을 입력해주세요!"
              onChange={(e) => setContent(e.target.value)} ></textarea>
          <input type="file" id="file" accept="image/*" 
                onChange={(e) => handleUploadButtonClick(e)} />
        </EditorFormContainer>
        <button type="submit" onClick={submitPromotion} >Upload</button>
    </EditorContainer>
  )
}

function Editor(props) {
  if(props.editorState === 'review') {
    return <ReviewEditor {...props} />
  }
  if(props.editorState === 'question') {
    return <QuestionEditor {...props} />
  }
  if(props.editorState === 'answer') {
    return <AnswerEditor {...props} />
  }
  if(props.editorState === 'promotion') {
    return <PromotionEditor {...props} />
  }
  return
}

export default Editor;