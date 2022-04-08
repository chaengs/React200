import React from "react";
import {Consumer} from './R076_ContextApi'; // 부모 컴포넌트의 데이터를 사용함

class contextChildren2 extends React.Component {
    render() {
        return (
            <Consumer>
                {contextValue => <h3>{`contextValue : ${contextValue}`}</h3>}
            </Consumer>
        )
    }
}

export default contextChildren2;