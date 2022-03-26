import React, { Component } from "react";
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

class R048_ReactstrapModal extends Component {
    constructor(props) {
        super(props);
        this.state = { Collapsed: false }
    }

    toggle = () => {
        this.setState({ collapsed: !this.state.collapsed })
    }

    render() {
        return (
            <>
                <Navbar color="faded" light>
                    <NavbarBrand href="/" className="mr-auto">Navbar</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} className="mr-2"/>
                    <Collapse isOpen={this.state.collapsed} navbar>
                        <Nav navbar>
                            <NavItem>
                                <NavLink href="#">react</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="http://example.com">200</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </>
        )
    }
}

export default R048_ReactstrapModal;

// <NavbarBrand> 태그는 네비게이션에서 무조건 표시되는 영역
// <NavbarToggler> 태그는 오른쪽에 표시되는 버튼을 클릭 시 toggle 함수를 실행
// <Collapse> 태그는 toggle 함수가 실행되면 표시 or 미표시되는 변수.
// Nav 안에 표시할 메뉴 리스트는 <NavItem> 태그로 나열.