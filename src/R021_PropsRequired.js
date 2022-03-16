import React, { Component } from 'react';
import datatype from 'prop-types';
//prop-types : 자료형을 선언할 때 사용

class R021_PropsRequired extends Component {
    render() {
        let {
            //ReactString이라는 props값을 필수 값으로 지정. 상위 컴포넌트에서 ReactString이라는 변수를 전달하지 않았기 때문에 경고 메세지 발생
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

R021_PropsRequired.propTypes = {
    ReactString: datatype.isRequired,
    //자료형 설정 대신 isRequired를 조건으로 추가하면 변숫값이 없는 경우 경고 메세지 발생
}

export default R021_PropsRequired;