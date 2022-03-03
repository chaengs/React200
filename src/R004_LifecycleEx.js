import React, { Component } from 'react';

// react의 생명주기 '생성' 함수 render()
class R004_LifecycleEx extends Component {
    render() { // render() : return되는 html 형식의 코드를 화면에 그려주는 함수
        console.log('3. render Call');
        return (
            <h2>[THIS IS RENDER FUNCTION]]</h2>
        )
    }
}

export default R004_LifecycleEx;