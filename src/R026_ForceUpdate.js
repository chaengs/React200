import React, { Component } from 'react';

class R026_ForceUpdate extends Component {
    constructor (props) {
        super(props);
        this.state = {
            StateString: 'react', //초깃값
        }
    }

    StateChange = () => {
        this.state.StateString = '리액트';
        this.forceUpdate(); //화면 강제 새로고침 -> 변경된 StateString 값이 화면에 표시됨
    }

    render() {
        return (
            <div style={{padding:"0px"}}>
                <button onClick={(e) => this.StateChange('direct', e)}>state 직접 변경</button><br/>
                [state 변경하기] StateString : {this.state.StateString}
            </div>
        )
    }
}

export default R026_ForceUpdate;