import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Axios from 'axios'

const { kakao } = window;

const MapContainer = styled.div`
  width: 100%;
  height: 100%;
  display: inline-block;
`;

const MapBox = styled.div`
  width: 1099px;
  height: 865px;

  #map {
    width: 1099px;
    height: 865px;
  }
`

function Map() {
  const [map, setMap] = useState(null);

  let imageSrc = "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png"

  //처음 지도 그리기
  useEffect(()=>{
      const container = document.getElementById('map');
      const options = { center: new kakao.maps.LatLng(37.5668, 126.9786), level: 7 };
      const kakaoMap = new kakao.maps.Map(container, options);
      setMap(kakaoMap);
  },[])

  Axios.get('http://localhost:5000/api/exhibition')
  .then((response) => {
    // console.log(response.data)
    makeMarkers(response.data)
  })

  function makeMarkers(array) {
    for(let i = 0; i < array.length; i++) {
      let imageSize = new kakao.maps.Size(24, 35)
      let markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize)

      let latitude = parseFloat(array[i].gpsY._text) 
      let longitude = parseFloat(array[i].gpsX._text)
      let position = new kakao.maps.LatLng(latitude, longitude)

      let marker = new kakao.maps.Marker({
        map: map,
        position: position,
        image: markerImage
      })
    }
  }
  
  return (
    <MapContainer>
      <MapBox>
        <div id='map'></div>
      </MapBox>
    </MapContainer>
  )
}

export default Map;