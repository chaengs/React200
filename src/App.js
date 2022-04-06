import React from 'react';
import ReactHoc from './Hoc/R075_ReactHoc'

function App() {
  return (
    <div>
      <ReactHoc name='React200' />
    </div>
  );
}

export default App;

//고차 컴포넌트 : 컴포넌트를 인자로 받거나 반환하는 함수
//하이오더 컴포넌트를 구현하면 여러 컴포넌트에 동일하게 적용되어야 하는 공통 기능을 코드 중복 없이 사용할 수 있음.