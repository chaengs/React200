import React, { useState, useEffect } from 'react';

function R031_ReactHook(props){
    const [contents, setContents] = useState('[THIS IS REACT]');

    useEffect(() => {
        console.log('useEffect');
    });
    //useEffect() 함수는 생명주기 componentDidMount()와 같이 return되는 html코드들이 화면에 그려진 이후 실행.
    //최초 페이지가 로딩될 때 실행 -> setContents() 함수로 state 값이 변경되면 한 번 더 실행

    return (
        <div style={{paddng: "0px"}}>
            <h2>{contents}</h2>
            <button onClick={() => setContents('[THIS IS HOOK]')}>버튼</button>
        </div>
    )
}

export default R031_ReactHook;