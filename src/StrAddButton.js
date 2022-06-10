import React, {Component} from 'react';
import {add} from './actions'

class StrAddButton extends Component {
    render() {
        return (
            <input value="Add200" type="button" onClick={this.addString}/>
        )
    }

    addString = () => {
        this.props.store.dispatch(add());
    }
    // dispatch 함수를 통해 add 함수의 반환값을 스토어에 전달
    // dispatch : 리듀서에 액션 전달 -> 리듀서 : 액션에 작성된 내용을 토대로 스토어 데이터를 변경
}

export default StrAddButton;