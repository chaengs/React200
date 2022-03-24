import React, { Component } from "react";
import { Jumbotron, Button } from 'reactstrap';

class R046_Reactstrapumbotron extends Component {
    render() {
        return (
            <>
                <Jumbotron style={{backgroundColor: "#D38C7C"}}>
                    <h1 className="display-4">REACT 200</h1>
                    <p className="h4">안녕 리액트 200제</p>
                    <hr className="my-2"/>
                    <p className="lead">
                        <Button color="danger">Go Detail</Button>
                    </p>
                </Jumbotron>
            </>
        )
    }
}

export default R046_Reactstrapumbotron;