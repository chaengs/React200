import React, { Component } from "react";

class R074_ReactCurrying extends Component {
    plusNumOrString(c, d){
        return c + d;
    }

    PlusFunc1(a){
        return function(b){
            return this.plusNumOrString(a, b)
        }.bind(this)
    }

    PlusFunc2 = a => b => this.plusNumOrString(a, b) // PlusFunc1을 화살표 함수로 표현한 완전히 동일한 함수

    PlusFunc(a){
        return this.PlusFunc1(a)(200)
    }

    render(){
        return (
            <>
                <input type="button" value="NumberPlus" onClick={e => alert(this.PlusFunc(100))}/>
                <input type="button" value="StringPlus" onClick={e => alert(this.PlusFunc("react"))}/>
            </>
        )
    }
}

export default R074_ReactCurrying;