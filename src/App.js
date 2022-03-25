import React from 'react';
import Modal from './R048_ReactstrapModal';
import 'bootstrap/dist/css/bootstrap.css'

function App() {
  return (
    <div>
      <Modal/>
    </div>
  );
}

export default App;

// Modal 패키지는 alert() 함수와 마찬가지로 사용자에게 원하는 시점에 알림창을 띄워 필요한 내용을 보여줌.
// alert() 함수와 달리 웹 브라우저에서 팝업 창을 차단할 수 없고 배경 페이지와 어울리는 디자인을 적용할 수 있음.