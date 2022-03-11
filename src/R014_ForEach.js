import React, { Component } from "react";

class R014_ForEach extends Component {
    
    componentDidMount() {
        let For_Arr = [3, 2, 8, 8];
        let For_newArr = [];

        for (let i=0; i<For_Arr.length; i++) {
            For_newArr.push(For_Arr[i]);
        }
        console.log("1. For_newArr : ["+For_newArr+"]");

        let ForEach_Arr = [3, 3, 9, 8];
        let ForEach_newArr = [];
        ForEach_Arr.forEach((result) => { //콜백 함수
            ForEach_newArr.push(result);
        })
        console.log("2. ForEach_newArr : ["+ForEach_newArr+"]");
    }

    render() {
        return (
            <h2>[THIS IS ForEach]</h2>
        )
    }
}

export default R014_ForEach;