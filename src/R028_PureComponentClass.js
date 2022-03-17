import React, { PureComponent } from 'react';

class R028_PureComponentClass extends PureComponent {
    constructor (props) {
        super(props);
        this.state = {
            StateString: 'react',
            StateArrayObj: ['react', { react: '200' }]
        }
    }

    buttonClick = (type) => {
        if(type === 'String') {
            this.setState({ StateString: 'react' }); //컴포넌트는 state 값이 동일하다고 간주해 render() 함수를 실행하지 않는다. PureComponent에서는 새로운 state 변수가 선언됐지만 변숫값만 비교
        }else {
            this.setState({ StateArrayObj: ['react', { react: '200' }] });
            //컴포넌트는 state 값이 변경됐다고 간주해 render() 함수를 실행.
            //PureComponent는 기본적으로 변숫값만 비교하지만 예외적으로 객체에 대해서는 참조값을 비교.
            //**완전 동일한 객체라도 새로 선언하면 다른 참조값을 갖음**
        }
    }
    // setState() 함수로 실행한 값은 이전에 있던 state 변숫값과 동일하더라도 Component에서는 새로운 state 변수가 같은 이름으로 생성되었다고 인식.

    render() {
        console.log('render() 실행')
        return (
            <div>
                <button onClick={e => this.buttonClick('String')}>문자열 변경</button>
                <button onClick={e => this.buttonClick('ArrayObject')}>객체 배열 변경</button>
            </div>
        )
    }
}

export default R028_PureComponentClass;

//class형 컴포넌트에는 Component와 PureComponent가 있다.
//두 컴포넌트 모두 props와 state 변경에 따라 render() 함수를 호출하는데, 변경에 대한 기준이 다름.
//PureComponent에서는 비교 대상의 값을 비교해 동일하지 않으면 변경이 발생했다고 여김. 불필요한 render() 함수 실행을 줄이면 페이지 성능을 향상시킬 수 있다.