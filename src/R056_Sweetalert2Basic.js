import React, { Component } from 'react';
import Swal from 'sweetalert2';

class R056_Sweetalert2Basic extends Component {
    componentDidMount() {
        // Swal.fire('1. SweetAlert')
        // alert('2. alert()')
        Swal.fire('1. SweetAlert').then(result => { alert('2. result.value : '+result.value)})
    } // Swal.fire() 함수 알림 창에서 [OK] 버튼을 누르면 result 값이 true로 반환됨.

    render() {
        return (
            <h1>sweetalert2</h1>
        )
    }
}

export default R056_Sweetalert2Basic;

// sweetalert2는 비동기적으로 동작해 Swal.fire() 함수를 실행시켜 놓고 완료 여부에 상관없이 다음 코드 alert를 실행한다.
// alert()는 동기적으로 동작하기 때문에 [확인] 버튼을 누르지 않으면 다음 작업으로 넘어가지 않음.