import React, { Component } from "react";
import datatype from 'prop-types';

class R018_PropsDatatype extends Component {
    render() {
        let {
            String, Number, Boolean, Array, ObjectJson, Function
        } = this.props //지역 변수를 선언해 props로 전달된 값들을 할당
        return ( // 부모 컴포넌트에 전달한 props 변수들을 화면에 표시
            <div style={{padding: "0px"}}>
                <p>StringProps: {String}</p>
                <p>NumberProps: {Number}</p>
                <span>BooleanProps: {Boolean.toString()}</span>
                <p>ArrayProps: {Array.toString()}</p>
                <p>ObjectJsonProps: {JSON.stringify(ObjectJson)}</p>
                <p>FunctionProps: {Function}</p>
            </div>
        )
    }
}

R018_PropsDatatype.propTypes = { // props 값 각각에 적합한 자료형 선언
    String: datatype.number, // <- 경고 메세지 뜸
    Number: datatype.number,
    Boolean: datatype.bool,
    Array: datatype.array,
    Object: datatype.object,
    Fucntion: datatype.func,
}

export default R018_PropsDatatype;

// 자식 컴포넌트에서 props에 대한 자료형을 선언해 놓으면, 부모 컴포넌트에서 넘어오는 props 변수들의 자료형과 비교한다.
// 자료형이 일치하지 않는다면 경고 메세지가 뜸.