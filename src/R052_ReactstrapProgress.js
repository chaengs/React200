import React, { Component } from "react";
import { Progress } from 'reactstrap';

class R052_ReactstrapProgress extends Component {
    constructor (props) {
        super(props);
        this.state = { progress:0 }
    }

    componentDidMount(){ this.progress() }
    //componentDidMount() 함수가 실행되면서 progress() 함수를 호출한다.
    progress =()=>{
        if(this.state.progress !== 100){
            setTimeout(function() {
                this.setState({progress: this.state.progress+1});
                this.progress();
            }.bind(this), 100); //setTimeout() 함수가 0.1초마다 실행
        }
    }

    render() { //setState() 함수가 실행될 때마다 render() 함수가 실행
        return (
            <>
            <Progress color="info" value={this.state.progress}>
                {this.state.progress}%
            </Progress><br/>
            <Progress multi>
                <Progress bar color="warning" value="25">25%</Progress>
                <Progress bar color="success" value="35">Wow!</Progress>
                <Progress bar value="15">Meh</Progress>
                <Progress bar color="danger" value="25">LOOK OUT!!</Progress>
            </Progress>
            </>
        )
    }
}

export default R052_ReactstrapProgress;

// <Progress> 태그의 속성
// 1. 바 형태 : bar, animated, striped
// 2. 색상 : color
// 3. 진행률 : value