import React, { Component } from "react";
import axios from "axios";

class R061_AxiosGet extends Component {
    componentDidMount(){
        axios.get('http://date.jsontest.com/') // get방식 http 호출
        .then( response => {alert(response.data.date)})
    }
    // url 호출이 완료되면, then 함수가 실행. 호출 결과로 response가 반환.
    // response와 호출된 변수명 사이에 data를 붙이면 변수를 사용할 수 있음.
    render() {
        return (
            <h1>axios get</h1>
        )
    }
}

export default R061_AxiosGet;