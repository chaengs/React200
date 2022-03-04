import React, { Component } from 'react';

class R008_LifecycleEx extends Component {
    static getDerivedStateFromProps(props, state) {
        console.log('2. getDerivedStateFromProps Call :'+props.prop_value);
        return {tmp_state:props.prop_value};
    }

    constructor(props) {
        super(props);
        this.state = {};
        console.log('1. constructor Call');
    }

    componentDidMount() {
        console.log('4. componentDidMount Call');
        console.log('5. tmp_state : '+this.state.tmp_state);
        this.setState({tmp_state2 : true}); //setState()함수는 변수의 선언과 초기화를 동시에 실행한다.
        //여기서 state의 '변경'이 발생했기 때문에 shouldComponentUpdate()함수가 실행된다.
    }

    shouldComponentUpdate(props, state) { // 생명주기 '변경' 과정의 함수, boolean타입의 값을 return한다.
        console.log('6. shouldComponentUpdate Call / tmp_state2 = '+state.tmp_state2);
        return state.tmp_state2 //return 값이 true일 경우에 render() 함수를 한 번 더 호출한다.
    }

    render() {
        console.log('3. render Call');
        return (
            <h2>[THIS IS shouldComponentUpdate FUNCTION]</h2>
        )
    }
}

export default R008_LifecycleEx;

//함수 호출 순서 1-2-3-4-5-2-6-3