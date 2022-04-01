import React, { Component } from "react";

class R059_FetchGet extends Component {
    componentDidMount = async () => {
        const response = await fetch('http://date.jsontest.com/'); //get방식으로 url 호출
        // fetch 함수에 별도의 http 메서드 설정이 없다면 get방식으로 호출
        const body = await response.json();
        alert(body.date)
    } //비동기 함수를 실행하는 함수에 async를 추가, 동기적으로 처리되어야 하는 함수 구문 앞에 await 추가

    render() {
        return (
            <h1>fetch get</h1>
        )
    }
}

export default R059_FetchGet;
// 자바스크립트 내장 함수인 fetch를 사용하면 쉽게 비동기 통신을 구현할 수 있음
// 비동기 통신 : 쉽게 말해 먼저 시작한 작업의 완료 여부와 상관없이 다음 작업을 실행하는 것