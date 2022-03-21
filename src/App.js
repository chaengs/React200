import React from 'react';
import './App.css';
import ReactHook from './R031_ReactHook'

function App() {
  return (
    <div>
      <h1>Start React 200</h1>
      <p>CSS 적용하기</p>
      <ReactHook/>
    </div>
  );
}

export default App;

// 함수형 컴포넌트에서는 state와 생명주기 함수와 같은 기능을 사용하기 위해 hook을 사용함.
// 대표적인 hook 함수에는 usestate()와 useEffect()가 있음.