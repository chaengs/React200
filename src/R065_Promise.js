import React, { Component } from "react";

class R065_promise extends Component {
    componentDidMount(){
        new Promise((resolve, reject) => { //resolve는 이행함수, reject는 거부함수
            reject(Error("ERROR Info")); //Error 객체를 사용해 에러를 발생
        })
        .then(result => console.log("then : "+result)) //거부함수가 실행되면 then 함수는 실행되지 않음
        .catch(result => console.log("catch : "+result)); // 거부 상태로 변하면서 catch 함수가 실행
    }

    render() {
        return (
            <h1>Promise</h1>
        )
    }
}

export default R065_promise;