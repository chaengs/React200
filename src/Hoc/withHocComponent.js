import React from 'react';
export default function withHocComponent(InComponent, InComponentName) {
    return class OutComponent extends React.Component {
        componentDidMount() {
            console.log(`3. InComponentName : ${InComponentName}`)
        }
        render() {
            console.log('1. InComponent render')
            return (<InComponent {...this.props}/>) //props값을 R075_ReactHoc에 전달한다
            // 컴포넌트가 return 되면 R075_ReactHoc 컴포넌트의 render 함수가 실행된다.
        }
    }
}