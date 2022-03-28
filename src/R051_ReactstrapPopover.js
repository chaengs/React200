import React, { Component } from 'react';
import { Button, UncontrolledPopover, PopoverHeader, PopoverBody } from 'reactstrap';

class R051_ReactstrapPopover extends Component {
    render(){
        return(
            <>
            <Button id="Popover_id" type="button">
                Popover button
            </Button>
            <UncontrolledPopover placement='right' target="Popover_id">
                <PopoverHeader>React 200</PopoverHeader>
                <PopoverBody>안녕안녕.</PopoverBody>
            </UncontrolledPopover>
            </>
        )
    }
}

export default R051_ReactstrapPopover;

// UncontrolledPopover는 태그나 함수를 생략해도 기본 기능을 제공해준다. 그래서 기본 기능만 사용할 것이라면 Popover 보다 UncontrolledPopover 사용하는 것이 간편.