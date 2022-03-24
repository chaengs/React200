import React, { Component } from "react";
import { ListGroup, ListGroupItem, Badge } from "reactstrap";

class R047_ReactstrapListGroup extends Component {
    render() {
        return (
            <>
                <ListGroup>
                    <ListGroupItem color="danger" className="justify-content-between">
                        Badge <Badge pill>200</Badge>
                    </ListGroupItem>
                    <ListGroupItem disabled tag="a" href="#">Disable</ListGroupItem>
                    <ListGroupItem tag="a" href="http://example.com">Link</ListGroupItem>
                    <ListGroupItem tag="button" action onClick={e => alert("button")}>Button</ListGroupItem>
                </ListGroup>
            </>
        )
    }
}

export default R047_ReactstrapListGroup;

// <ListGroup>과 <ListGroupItem> 태그는 html에서 <ul>과 <li> 태그로 변환됨.