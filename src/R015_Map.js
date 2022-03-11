import React, { Component } from "react";

class R015_Map extends Component {

    componentDidMount() {
        let Map_Arr = [3, 2, 8, 8]
        let Map_newArr = Map_Arr.map(x => x) //콜백함수
        console.log("1. Map_newArr : ["+Map_newArr+"]")

        let Map_multiArr = Map_Arr.map(x => x*2)
        console.log("2. Map_multiArr : ["+Map_multiArr+"]")

        let ObjArray = [{key:'react', value:'200'},
                        {key:'리액트', value:'TwoHundred'}]
        let Map_objArr = ObjArray.map((obj, index) => { //모든 반복이 끝나면 반환값을 Map_objArr에 저장
            console.log((index+3)+". obj : "+JSON.stringify(obj))
            let Obj = {};
            Obj[obj.key] = obj.value;
            return Obj;
        })
        console.log("5. Map_objArr : "+JSON.stringify(Map_objArr))
    }

    render() {
        return (
            <h2>[THIS IS Map]</h2>
        )
    }
}

export default R015_Map;
// map()과 forEach()의 차이점 : map()은 return을 사용해 반환값을 받을 수 있음.

// 1. Map_newArr : [3,2,8,8]
// 2. Map_multiArr : [6,4,16,16]
// 3. obj : {"key":"react","value":"200"}
// 4. obj : {"key":"리액트","value":"TwoHundred"}
// 5. Map_objArr : [{"react":"200"},{"리액트":"TwoHundred"}]