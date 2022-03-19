import React from 'react';
import './App.css';
import FunctionComponent from './R030_FunctionComponent';

function App() {
  return (
    <div>
      <h1>Start React 200</h1>
      <p>CSS 적용하기</p>
      <FunctionComponent contents="[THIS IS FunctionComponent]" />
    </div>
  );
}

// R030_FunctionComponent 컴포넌트에 contents 변수를 props로 전달한다.

export default App;