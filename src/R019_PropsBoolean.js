import React, { Component } from 'react';

class R019_PropsDatatype extends Component {
    render() { // render 함수 내에서 지역변수를 선언해 props로 전달된 값을 할당
        let {
            BooleanTrueFalse
        } = this.props
        return (
            <div style={{padding: "0px"}}>
                {BooleanTrueFalse ? '2. ' : '1. '}
                {BooleanTrueFalse.toString()}
                {/* 값이 없을 경우 기본값은 true */}
                {/* Boolean 변수는 직접 화면에 출력 못함 -> toString() 함수 사용 */}
            </div>
        )
    }
}

export default R019_PropsDatatype;