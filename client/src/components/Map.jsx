import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Axios from 'axios'
import lock_on from '../assets/lock_on.png'
import lock_off from '../assets/lock_off.png'
import zoom_in from '../assets/plus.png'
import zoom_off from '../assets/minus.png'
import starImg from '../assets/star.png'
import { useNavigate } from 'react-router-dom'



const { kakao } = window;

let mappingList = [];

const MapPageContainer = styled.div`
  position:relative;
  left:12%;
  width:1440px;
  height: 850px;
  display: inline-block;
  display:flex;
`;

const Flex = styled.div`
  display:flex;
`;

const Ul = styled.div`
  padding-left :10px;
`;




const ListBox = styled.div`

  width: 340px;
  height: 850px;
  border: 1px solid black;
  overflow-y:scroll;
  overflow-x:hidden;
  background-color: #FFFFFF;

`;


const Review = styled.div`
  display:flex;
  

  #ReviewButton{
    cursor: pointer;
    position: relative;
    top: 0px;
    left: 0px;
    background-color: #D9D9D9;
    color: #000;
    font-size: 20px;
    width: 65px;
    height: 30px;
    border-radius: 15px;

    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    line-height: 25px;

  }
  #StarImg{
    margin-top:5px;
    margin-left:150px;
    width:20px;
    height:20px;
  }

  #Star{
    margin-left:10px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 200;
    font-size: 15px;
    line-height: 30px;
    color:#ffd500
  }

  #CheckBox{
    margin-left:10px;
    cursor: pointer;
    float : right;
  }
`;

const MapBox = styled.div`
  width: 1100px;
  height: 850px;
  border: 1px solid black;

  #map {
    width: 1100px;
    height: 785px;
    border: 1px solid black;
  }

  #setting {
    width:1100px;
    height:65px;

  
    .MapLockButton{
      margin-top : 20px;
      margin-left : 20px;
      width : 28px;
      height : 28px;
      cursor: pointer;
    }

    .MapZoomIn{
      margin-top : 20px;
      margin-left : 20px;
      width : 28px;
      height : 28px;
      cursor: pointer;
      float : right;
    }
    
    .MapZoomOut{
      margin-top : 20px;
      margin-left : 20px;
      margin-right : 27px;
      width : 28px;
      height : 28px;
      right : 27px;
      cursor: pointer;
      float : right;
    }
  }
`
const BoldText=styled.div`
        position: relative;
        width: 200px;
        word-break:break-all;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        padding-left: 15px;

        font-family: 'Inter';
        font-style: normal;
        font-weight: 600;
        font-size: 20px;
        line-height: 36px;

        color: #000000;

        ${({left})=>
        `    left: ${left};
        `}
        ${({top})=>
        `    top: ${top};
        `}
        ${({width})=>
        `    width: ${width};
        `}
        ${({height})=>
        `    height: ${height};
        `}
`;

const Text=styled.div`
    position: relative;
    width: 200px;
    padding-left: 15px;

    font-family: 'Inter';
    font-style: normal;
    font-weight: 200;
    font-size: 15px;
    line-height: 30px;

    color: #000000;
    word-break:break-word;
    white-space: pre-wrap;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;

        ${({left})=>
        `    left: ${left};
        `}
        ${({top})=>
        `    top: ${top};
        `}
        ${({width})=>
        `    width: ${width};
        `}
        ${({height})=>
        `    height: ${height};
        `}
        ${({size})=>
        `    font-size: ${size};
        `}
`;


const Poster=styled.img`
    position: relative;
    min-width: 100px;
    max-width: 100px;
    min-height: 100px;
    max-height: 100px;
    object-fit: scale-down;

    ${({left})=>
        `    left: ${left};
        `}
        ${({top})=>
        `    top: ${top};
        `}
        ${({width})=>
        `    width: ${width};
        `}
        ${({height})=>
        `    height: ${height};
        `}
`;

const DetailPoster=styled.img`
    position: relative;
    min-width: 300px;
    max-width: 300px;
    min-height: 150px;
    max-height: 150px;
    object-fit: scale-down;

    ${({left})=>
        `    left: ${left};
        `}
        ${({top})=>
        `    top: ${top};
        `}
        ${({width})=>
        `    width: ${width};
        `}
        ${({height})=>
        `    height: ${height};
        `}
`;
const DetailDiv=styled.div`
    position: relative;
    width: 300px;
    text-align : center;

    ${({left})=>
        `    left: ${left};
        `}
        ${({top})=>
        `    top: ${top};
        `}
        ${({width})=>
        `    width: ${width};
        `}
        ${({height})=>
        `    height: ${height};
        `}
`;

function Map(loginId) {
  const [map, setMap] = useState(null);
  const [ListContents, setListContents] = useState([]);
  const [ListCheck, setListCheck] = useState([]);


  let imageSrc = "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png"


  //처음 지도 그리기
  useEffect(()=>{

      
      const container = document.getElementById('map');
      const options = { center: new kakao.maps.LatLng(37.5668, 126.9786), level: 7 };
      const kakaoMap = new kakao.maps.Map(container, options);
      const mapTypeControl = new kakao.maps.MapTypeControl(); // 일반 지도와 스카이뷰로 지도 타입을 전환할 수 있는 지도타입 컨트롤을 생성합니다
      kakaoMap.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);
      
      const zoomControl = new kakao.maps.ZoomControl(); // 지도 확대 축소를 제어할 수 있는  줌 컨트롤을 생성합니다
      kakaoMap.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);
      setMap(kakaoMap);
  },[])

  function setDraggable(draggable) {
    // 마우스 드래그로 지도 이동 가능여부를 설정합니다
    map.setDraggable(draggable);   
  }

  // 지도 확대, 축소 컨트롤에서 확대 버튼을 누르면 호출되어 지도를 확대하는 함수입니다
  function zoomIn() {
    map.setLevel(map.getLevel() - 1);
  }

  // 지도 확대, 축소 컨트롤에서 축소 버튼을 누르면 호출되어 지도를 확대하는 함수입니다
  function zoomOut() {
    map.setLevel(map.getLevel() + 1);
  }

  const [MapLockstate, MapLocksetState]=useState(false);

  function MapLock(){
    MapLocksetState(!MapLockstate);
    MapLockstate ? setDraggable(true) : setDraggable(false);
  }



  Axios.get('http://localhost:5000/api/exhibition')
      .then((response) => {
        console.log("test")
        if(ListContents.length==0) {
          const ListContent=(response.data).map((exhibition,index) => (  
            <>
              <Ul id = {index}
                  onClick={()=> ClickList(exhibition)}>
                <Flex>
                  <Poster src={exhibition.ex_img} ></Poster> 
                  <div>
                    <BoldText>{exhibition.ex_title}</BoldText>
                    <Text size="20px">{exhibition.ex_start} ~</Text>
                    <Text size="20px">{exhibition.ex_end}</Text>
                  </div>
                </Flex>
              </Ul>
              <hr />
            </>));
        setListContents(ListContent)
        }
        makeMarkers(response.data)
      })


  function ClickList(exhibition){
    var star=0.0;
    console.log(exhibition)
    Axios.post(
      `http://localhost:5000/api/review/exid`,
       {
          'exId': exhibition.ex_id
       }
      ).then((response) => {
          console.log(response.data)
          const revArr = (response.data).map((review,index) => (  
            <>
              <Ul id = {index+1}>
                <Flex>
                  <Poster src={review.rev_img} ></Poster>
                  <div>
                    <BoldText>{review.rev_title}</BoldText>
                    <Text height="85px">{review.rev_content} ~</Text>
                  </div> 
                </Flex>
              </Ul>
              <hr />
            </>
            ));
            for(let i=0;i<response.data.length;i++){
              star=star+parseFloat(response.data[i].rev_star)
            }
            star=star/response.data.length

        console.log(revArr)

        const ex =(<>
          <Ul id = {0}
                onClick={()=> ClickList(exhibition)}>
            <DetailPoster src={exhibition.ex_img} ></DetailPoster>
            <DetailDiv>
              <BoldText width="300px">{exhibition.ex_title}</BoldText>
              <Text width="300px">{exhibition.ex_start}~{exhibition.ex_end}</Text>
              <Text width="300px">{exhibition.space}</Text>
              <Text width="300px">{exhibition.ex_info}</Text>
            </DetailDiv>
            <Review>
              <button id='ReviewButton' onClick={()=>clickReview(exhibition)}>리뷰</button>
              <input id='CheckBox' type="checkbox" size="20px"/> {/* 체크 박스 정보 추가 필요*/}
              <img id="StarImg" src={starImg} alt="Star"></img>
              <div id="Star">{star}</div>
            </Review> 
            
          </Ul>
          <hr />
        </>)
          
        const newArr = [
          ex,
          ...revArr
        ]
        setListContents(newArr)
    })
  }


  function makeMarkers(array) {
    for(let i = 0; i < array.length; i++) {
      let imageSize = new kakao.maps.Size(24, 35)
      let markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize)

      let latitude = array[i].ex_gpsy 
      let longitude = array[i].ex_gpsx
      let position = new kakao.maps.LatLng(latitude, longitude)

      let marker = new kakao.maps.Marker({
        map: map,
        position: position,
        image: markerImage,
      })

      let object = {
        marker: marker,
        data: {
          ex_id: array[i].ex_id,
          ex_title: array[i].ex_title,
          ex_start: array[i].ex_start,
          ex_end: array[i].ex_end,
          ex_img: array[i].ex_img,
          ex_info: array[i].ex_info
        }
      }

      let temp_id = 'id' + i
      mappingList[temp_id] = object
     

      kakao.maps.event.addListener(marker, 'click', function() {     
        let values = Object.values(mappingList)
        let temp_arr = []
  
        for(let j = 0; j < values.length; j++) {
          if((values[j].marker.Rc.x === marker.Rc.x) && (values[j].marker.Rc.y === marker.Rc.y)) {
            temp_arr.push(values[j].data)
          }
        }

        const ListContent=temp_arr.map((exhibition,index) => (
          <>
            <Ul id = {index}
                  onClick={()=> ClickList(exhibition)}>
                <Flex>
                  <Poster src={exhibition.ex_img} ></Poster> 
                  <div>
                    <BoldText>{exhibition.ex_title}</BoldText>
                    <Text size="20px">{exhibition.ex_start} ~</Text>
                    <Text size="20px">{exhibition.ex_end}</Text>
                  </div>
                </Flex>
              </Ul>
            <hr />
          </>));
          setListContents(ListContent)
      })
      
    }

    
  }

  const navigate = useNavigate();

  const clickReview = (exhibition) => {
    navigate('/review/post',{state: 
      exhibition
  });
  }

  
  return (
    <MapPageContainer>
      <ListBox id="listbox">
          {ListContents}
      </ListBox>
      <MapBox>
            <div id='map'></div>
            <span id='setting'>
              <img class='MapLockButton'src={MapLockstate ? lock_on : lock_off } alt="Lock Button" onClick={MapLock}></img>
              <img class='MapZoomOut'src={zoom_off} alt="Zoom Off Button" onClick={zoomOut}></img>
              <img class='MapZoomIn'src={zoom_in} alt="Zoom In Button" onClick={zoomIn}></img>

            </span>
      </MapBox>
    
    </MapPageContainer>
  )
}

export default React.memo(Map);