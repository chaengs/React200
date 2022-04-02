import React, { Component } from "react";
import axios from "axios";

class R062_AxiosPost extends Component {
    componentDidMount(){
        axios.post('http://date.jsontest.com/', {
            a:"react", b:200
        }) // axios.post('호출 url', json 데이터)
        .then( Response => {alert(Response.data.date)})
    }

    render() {
        return (
            <h1>axios post</h1>
        )
    }
}

export default R062_AxiosPost;