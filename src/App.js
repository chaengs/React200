import React from 'react';
import ReactstrapCarousel from './R041_ReactstrapCarousel'
import 'bootstrap/dist/css/bootstrap.css'

function App() {
  return (
    <div>
      <h1>Start React 200</h1>
      <p>CSS 적용하기</p>
      <ReactstrapCarousel/>
    </div>
  );
}

export default App;

// Card 패키지는 이미지 제목, 부제목, 내용, 버튼 등을 한 세트로 묶는다.
// Card 단위로 리스트를 만들어 반복해서 출력하면, 정형화된 콘텐츠 목록을 만들 수 있다.