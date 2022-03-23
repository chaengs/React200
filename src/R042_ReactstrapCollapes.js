import React, { Component } from 'react';
import { UncontrolledCollapse, Button, CardBody, Card } from 'reactstrap';

class R042_ReactstrapCollapes extends Component {
    render() {
        return (
            <div>
                <Button color="warning" id="toggle">펼치기/접기</Button>
                <UncontrolledCollapse toggler="#toggle">
                    <Card>
                        <CardBody>
                            REACT 200
                        </CardBody>
                    </Card>
                </UncontrolledCollapse>
            </div>
        )
    }
}
// UncontrolledCollapse 패키지에 toggle 함수가 내부적으로 선언되어 있음.
export default R042_ReactstrapCollapes;