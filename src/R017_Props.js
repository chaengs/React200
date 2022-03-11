import React, { Component } from 'react';

// props는 부모 컴포넌트가 자식 컴포넌트에 데이터를 전달할 때 사용
// props를 전달받은 컴포넌트에서는 데이터 수정이 불가
// 데이터 변경하려면 -> 컴포넌트 내부에서만 사용하는 변수에 값을 넣어 변경
class R017_Props extends Component {
    render() {
        let props_value = this.props.props_val; // this.props. 뒤에 상위 컴포넌트(App.js)에서 전달받은 props 변수명을 붙이면 해당 데이터를 사용할 수 있음.
        props_value += 'from App.js' // 데이터를 수정해야 할 경우, props 자체가 아닌 컴포넌트 내부 변수(props_value)에 옮겨 가공.
        return (
            <div>{props_value}</div> // This is Props from App.js
        )
    }
}

export default R017_Props;