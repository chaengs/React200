import React from 'react';
import './App.css';
import PropsBoolean from './R019_PropsBoolean';

function App() {
  return (
    <div>
      <h1>Start React 200</h1>
      <p>CSS 적용하기</p>
      <PropsBoolean BooleanTrueFalse={false}/>
      {/* 변수를 선언하고 false 값을 props에 담아 하위 컴포넌트로 전달  */}
      <PropsBoolean BooleanTrueFalse/>
      {/* 변수를 선언하고 할당 없이 props에 담아 하위 컴포넌트로 전달 */}
    </div>
  );
}

export default App;