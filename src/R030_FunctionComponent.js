import React from 'react';

function R030_FunctionComponent(props) {
    let { contents } = props; // 상위 컴포넌트에 전달받은 props를 지역변수에 할당
    // 클래스형 컴포넌트와 달리 props 앞에 this가 붙지 않는다.
    return (
        <h2>{contents}</h2>
    )
}

export default R030_FunctionComponent;


// 함수형 컴포넌트는 state가 없고 생명주기 함수를 사용할 수 없다.
// props와 context를 파라미터로 전달받아 사용
// render() 함수가 없으므로 return만 사용