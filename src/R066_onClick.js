import React, { Component } from 'react';

class R065_Promise extends Component {
    buttonClick = (param) => {
        if(typeof param != 'string') param = 'Click a'
        console.log('param : '+param);
    }

    render() {
        return (
            <>
                <button onClick={e => this.buttonClick("Click button")}>
                    Click button
                </button>
                <div onClick={e => this.buttonClick("click div")}>Click div</div>
                <a href="javascript:" onClick={this.buttonClick}>Click a</a>
            </>
        )
    }
}
// react에서 이벤트명은 카멜케이스 사용
export default R065_Promise;