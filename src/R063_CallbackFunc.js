import React, { Component } from "react";

class R063_CallbackFunc extends Component {
    componentDidMount(){
        this.logPrint(1, function(return1){ // 여기 this와
            console.log("return1 : "+return1);
            this.logPrint(return1, function(return2){ // 여기 this는 다름.
                console.log("return2 : "+return2);
            })
        }.bind(this)) // 함수 밖의 this를 함수 안에서도 동일하게 사용하기 위해서 .bind(this)를 함수에 붙여준다.
    }

    logPrint(param, callback) {
        console.log("logPrint param : "+param);
        param += param
        callback(param);
    }

    render() {
        return (
            <h1>Callback Function</h1>
        )
    }
}

export default R063_CallbackFunc;