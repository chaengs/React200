import React, { Component } from 'react';

class R023_PropsNode extends Component {
    render() {
        return (
            <div style={{padding: "0px"}}>
                {this.props.children}
            </div>
        )
    }
}
// 상위 컴포넌트에서 전달한 노드는 this.props.children으로 접근해 사용 가능
export default R023_PropsNode;