import React, { Component } from 'react';
import { UncontrolledCarousel } from 'reactstrap';
// UncontrolledCarousel은 태그나 함수를 생략해도 기본 기능을 제공. 기본 기능만 사용할 것이라면 Carousel보다 UncontrolledCarousel을 사용.
const items = [
    {
        src : "https://www.linefriends.com/im/img_ip_thumb1_v2.jpg",
        altText : "라인프렌즈",
        caption : "사진의 설명",
        header : "사진의 제목"
    }, {
        src : "https://www.linefriends.com/im/img_ip_thumb1_v2.jpg",
        altText : "라인프렌즈",
        caption : "사진의 설명",
        header : "사진의 제목"
    }, {
        src : "https://www.linefriends.com/im/img_ip_thumb1_v2.jpg",
        altText : "라인프렌즈",
        caption : "사진의 설명",
        header : "사진의 제목"
    }
];

class R041_ReactstrapCarousel extends Component {
    render() {
        return (
            <UncontrolledCarousel items={items} />
        )
    }
}
// 한 슬라이드에 머무는 시간은 기본값이 5초
export default R041_ReactstrapCarousel;