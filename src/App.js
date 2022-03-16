import React from 'react';
import './App.css';
import PropsNode from './R023_PropsNode';

function App() {
  return (
    <div>
      <h1>Start React 200</h1>
      <p>CSS 적용하기</p>
      <PropsNode>
        <span>node from App.js</span>
      </PropsNode>
      {/* 하위 컴포넌트 태그 사이에 작성된 node를 전달할 수 있다. */}
    </div>
  );
}

export default App;