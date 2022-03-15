import React, { Component } from 'react';
import datatype from "prop-types";

class R020_PropsObjVal extends Component {
    render() {
        let {
            ObjectJson
        } = this.props
        return (
            <div style={{padding: "0px"}}>
                {JSON.stringify(ObjectJson)}
            </div>
        )
    }
}

R020_PropsObjVal.protoTypes = {
    ObjectJson: datatype.shape({ //shape을 사용해 ObjectJson의 key값에 자료형을 선언
        react: datatype.string,
        twohundred: datatype.number //자료형이 일치하지 않아 에러메세지
    })
}

export default R020_PropsObjVal;