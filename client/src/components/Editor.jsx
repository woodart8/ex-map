import styled from 'styled-components'
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Axios from 'axios'

const EditorContainer = styled.div`
  width: 1057px;
  height: 846px;
  background-color: #fff;
  border: 1px solid #000;
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
      <input type="text" 
          name="title" 
          placeholder="제목" 
          onChange={(e) => setTitle(e.target.value)} />
      <textarea name="content" 
          id="content" 
          defaultValue="" 
          cols="30" rows="10" 
          placeholder="내용을 입력해주세요!"
          onChange={(e) => setContent(e.target.value)} ></textarea>
      <input type="file" id="file" accept="image/*" 
            onChange={(e) => handleUploadButtonClick(e)} />
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
      <input type="text" 
          name="title" 
          placeholder="제목" 
          onChange={(e) => setTitle(e.target.value)} />
      <textarea name="content" 
          id="content" 
          defaultValue="" 
          cols="30" rows="10" 
          placeholder="내용을 입력해주세요!"
          onChange={(e) => setContent(e.target.value)} ></textarea>
      <input type="file" id="file" accept="image/*" 
            onChange={(e) => handleUploadButtonClick(e)} />
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
      <input type="text" 
          name="title" 
          placeholder="제목" 
          onChange={(e) => setTitle(e.target.value)} />
      <textarea name="content" 
          id="content" 
          defaultValue="" 
          cols="30" rows="10" 
          placeholder="내용을 입력해주세요!"
          onChange={(e) => setContent(e.target.value)} ></textarea>
      <input type="file" id="file" accept="image/*"
            onChange={(e) => handleUploadButtonClick(e)} />
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
      <input type="text" 
          name="title" 
          placeholder="제목" 
          onChange={(e) => setTitle(e.target.value)} />
      <input type="text" 
          name="period" 
          placeholder="전시 기간" 
          onChange={(e) => setPeriod(e.target.value)} />
      <input type="text" 
          name="place" 
          placeholder="전시 장소" 
          onChange={(e) => setPlace(e.target.value)} />
      <textarea name="content" 
          id="content" 
          defaultValue="" 
          cols="30" rows="10" 
          placeholder="내용을 입력해주세요!"
          onChange={(e) => setContent(e.target.value)} ></textarea>
      <input type="file" id="file" accept="image/*" 
            onChange={(e) => handleUploadButtonClick(e)} />
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