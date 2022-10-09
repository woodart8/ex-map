import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

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

  //처음 지도 그리기
  useEffect(()=>{
      const container = document.getElementById('map');
      const options = { center: new kakao.maps.LatLng(33.450701, 126.570667), level: 3 };
      const kakaoMap = new kakao.maps.Map(container, options);
      setMap(kakaoMap);
  },[])

  return (
    <MapContainer>
      <MapBox>
        <div id='map'></div>
      </MapBox>
    </MapContainer>
  )
}

export default Map;