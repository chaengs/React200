import React, { Component } from "react";
import Swal from 'sweetalert2';

class R057_Sweetalert2Position extends Component {
    saveAlert = (flag, positionflag, e) => {
        Swal.fire({
            position: positionflag,
            icon: 'success',
            title: flag+'됐습니다.',
            slowConfirmButton: false,
            timer: 1500
        })
    }
    // position 옵션 값 : top, top-start(좌측 상단), top-end(우측 상단), center, center-start(중앙 좌측), center-end(중앙 우측), bottom-start, bottom-end
    render() {
        return (
            <>
                <h1>sweetalert2</h1>
                <button onClick={e => this.saveAlert('저장', 'center')}>저장</button>
                <button onClick={e => this.saveAlert('수정', 'bottom-end')}>수정</button>
            </>
        )
    }
}

export default R057_Sweetalert2Position;