import React, { Component } from 'react';

class R033_ReturnMap extends Component {
    render() {
        const element_Array = [
            <li>react</li>
            , <li>200</li>
            , <li>Array map</li>
        ]
        return (
            <ul>
                {element_Array.map((array_val) => array_val)}
            </ul>
        )
    }
}

export default R033_ReturnMap;

// 반복해서 출력해야 하는 element들을 배열에 넣어두고 map() 함수로 순서대로 나열해 컴포넌트를 return할 수 있다.