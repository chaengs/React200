import React, { Component } from "react";
import { Button, Fade } from 'reactstrap';

class R043_ReactstrapFade extends Component {
    constructor(props) {
        super(props);
        this.state = { fadeInOut : true }
    }

    toggle = (e) => {
        this.setState({ fadeInOut: !this.state.fadeInOut })
    }

    render() {
        return (
            <div>
                <Button color="success" onClick={this.toggle}>Fade In/Out</Button>
                <Fade in={this.state.fadeInOut} tage="h1">안녕, 반가워!</Fade>
            </div>
        )
    }
}
// <Fade> 태그는 in 속성이 true이면 표시됨.
export default R043_ReactstrapFade;