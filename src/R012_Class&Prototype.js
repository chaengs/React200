import React, { Component } from 'react';

class ClassPrototype extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        //ES5 prototype
        var ExamCountFunc = (function() {
            function ExamCount(num) {
                this.number = num; //파라미터로 전달받은 num 값을 객체 변수 number에 저장
            }
            ExamCount.prototype.showNum = function() { //생성자함수명.prototype.함수명 으로 선언
                console.log('1. react_' + this.number);
            };
            return ExamCount;
        }());

        var cnt = new ExamCountFunc('200');
        cnt.showNum(); //객체 내부 함수를 객체 외부에서 사용

        //ES6 class
        class ExamCountClass { //ES6에서는 class로 선언
            constructor(num2) {
                this.number2 = num2;
            }
            showNum() { //객체에 접근할 때 실행할 함수는 class {} 중괄호 안에 선언
                console.log(`2. react_${this.number2}`);
            }
        }

        var cnt2 = new ExamCountClass('2hundred');
        cnt2.showNum();
    }

    render() {
        return (
            <h2>[THIS IS CLASS]</h2>
        )
    }
}

export default ClassPrototype;