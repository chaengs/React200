import React, { Component } from 'react';

class R005_LifecycleEx extends Component {
    constructor(props) { //constructor(props) 함수는 생명주기 함수 중 가장 먼저 실행되며 처음 한 번만 호출된다.
        super(props);
        this.state = {}; //부모 객체에게서 전달 받은 변수(props)를 초기화할 때 사용
        console.log('1. constructor Call');
    }

    render() {
        console.log('3. render Call');
        return (
            <h2>[THIS IS CONSTRUCTOR FUNCTION]</h2>
        )
    }
}

export default R005_LifecycleEx;