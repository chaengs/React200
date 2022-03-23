import React, { Component } from "react";
import {
    Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button
} from 'reactstrap';

class R040_ReactstrapCard extends Component {
    render() {
        return (
            <div>
                <Card>
                    <CardImg top height="200px" src="https://cdn.newscj.com/news/photo/201912/newscj_%EC%B2%9C%EC%A7%80%EC%9D%BC%EB%B3%B4_695191_717311_4829.jpg" alt="Card image" />
                    <CardBody>
                        <CardTitle>카드 제목</CardTitle>
                        <CardSubtitle>카드 부제목</CardSubtitle>
                        <CardText>카드 내용: 안녕안녕안녕</CardText>
                        <Button>버튼</Button>
                    </CardBody>
                </Card>
            </div>
        )
    }
}

export default R040_ReactstrapCard;