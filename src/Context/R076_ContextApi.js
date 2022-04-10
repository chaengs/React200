import React from "react";
import Children from './contextChildren'; // contextChildren을 import

const {Provider, Consumer} = React.createContext() // react의 기본 함수인 createContext()를 호출, 공급자Provider와 소비자Consumer를 받음
export {Consumer} // 하위 컴포넌트에서 소비자를 사용할 수 있도록 export

class R076_ContextApi extends React.Component {
    render () {
        return ( // 자식 컴포넌트 Children을 <Provider>태그로 감싸고 전달할 데이터를 value값을
            <Provider value='React200'>
                <Children />
            </Provider>
        )
    }
}

export default R076_ContextApi;