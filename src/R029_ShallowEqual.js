import React, { Component } from 'react';
import { shallowEqualArrays } from 'shallow-equal';

class R029_ShallowEqual extends Component {
    constructor(props) {
        super(props);
        this.state = { StateString: 'react' }
    }

    // shouldComponentUpdate() 함수는 변경된 props와 state 값을 파라미터로 받아 반환값이 true일 때 render()함수를 실행
    shouldComponentUpdate(nextProps, nextState){
        return !shallowEqualArrays(this.state, nextState)
    }

    componentDidMount() {
        const object = { react : '200' };
        const Array1 = ['리액트', object];
        const Array2 = ['리액트', object];
        const Array3 = ['리액트', { react : '200' }];

        console.log('shallowEqualArrays(Array1, Array2) :' + shallowEqualArrays(Array1, Array2)); //true
        console.log('shallowEqualArrays(Array2, Array3) :' + shallowEqualArrays(Array2, Array3)) //false
        this.setState({StateString : 'react'})
        // **원래, Component 클래스에서 변경으로 인식해 render()함수를 실행해야함.
        // **그러나, shouldComponentUpdate()에서 shallowEqualArrays()로 값만 비교하기 때문에 !true (== false)를 반환하기 때문에 render()함수가 실행되지 않음.
    }

    render() {
        console.log('render() 실행')
        return (<div></div>)
    }
}

export default R029_ShallowEqual;

//shallow-equal 패키지는 PureComponent에서 state 값의 변경을 비교하는 것과 동일한 기능을 하는 함수를 제공한다. shallowEqualArrays() 함수를 사용하면 문자열과 배열은 값만 비교한다. 객체는 참조값 비교.

//브라우저 콘솔창 결과 
// render() 실행
// shallowEqualArrays(Array1, Array2) :true
// shallowEqualArrays(Array2, Array3) :false