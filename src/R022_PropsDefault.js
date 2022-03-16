import React, { Component } from 'react';

class R022_PropsDefault extends Component {
    render() {
        let {
            ReactString,
            ReactNumber
        } = this.props
        return (
            <div style={{padding: "0px"}}>
                {ReactString}{ReactNumber}
            </div>
        )
    }
}

//props의 기본값은 부모 컴포넌트에서 값이 넘어오지 않았을 때 사용
//defaultProps라는 문법 사용
R022_PropsDefault.defaultProps = { //기본값 할당
    ReactString: "리액트",
    ReactNumber: 400 //상위 컴포넌트에서 값이 할당되었기 때문에 기본값은 무시됨
}

export default R022_PropsDefault;