import React, { Component } from 'react';

class R006_LifecycleEx extends Component {
    static getDerivedStateFromProps(props, state) {
        //getDerivedStateFromProps함수는 constructor() 함수 다음으로 실행된다.
        //컴포넌트가 새로운 props를 받게 됐을 때 state를 변경해준다. 
        console.log('2. getDerivedStateFromProps Call :'+props.prop_value);
        //App.js에서 전달한 prop_value라는 변수를 props.prop_value로 접근해 가져올 수 있다.
        return {};
    }
    constructor(props) {
        super(props);
        this.state = {};
        console.log('1. constructor Call');
    }

    render() {
        console.log('3. render Call');
        return (
            <h2>[THIS IS CONSTRUCTOR FUCTION]</h2>
        )
    }
}

export default R006_LifecycleEx;