import React, { Component } from 'react';
//state는 하나의 컴포넌트 안에서 전역 변수처럼 사용
class R024_ReactState extends Component {
    constructor (props) { //가장 먼저 실행되는 생성자 함수 constructor 안에서 state 변수의 초깃값을 정의
        super(props);
        this.state = {
            StateString: this.props.reactString,
            StateNumber: 200,
        }
    }

    render() {
        return (
            <div style={{padding:"0px"}}>
                {this.state.StateString}{this.state.StateNumber}
            </div>
        )
    }
    //this.state.변수명 <-으로 state 변수에 접근
}

export default R024_ReactState;