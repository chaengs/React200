//component란, 특정 코드 뭉치를 다른 부분에 이식하거나 재사용하기 위해 사용하는 코드 블록 단위
import React, { Component } from 'react';

//import한 Component를 상속받아 클래스에서 사용
class R003_ImportComponent extends Component {
    render () { //return된 html코드를 render함수를 사용해 화면에 표시
        return (
            <h2>[ THIS IS IMPORTED COMPONENT ]</h2>
        )
    }
}

export default R003_ImportComponent;