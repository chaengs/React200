import React from 'react';
import ContextApi from './Context/R076_ContextApi'

function App() {
  return (
    <div>
      <ContextApi />
    </div>
  );
}

export default App;
// 컨텍스트는 데이터의 공급자와 소비자를 정의하고 데이터가 필요한 컴포넌트만 사용할 수 있게 구현할 수 있음

// 컨텍스트를 사용하면 하위 컴포넌트가 여러 개인 구조에서 유용하게 사용할 수 있음
// 몇 번째 하위 컴포넌트인지와는 상관없이 필요한 하위 컴포넌트에서 소비자를 임포트해 필요한 데이터를 사용할 수 있다.