import React, { Component } from "react";

class R069_onMouseOver extends Component {
    MouseOut(tag) {
        console.log('TAG : '+tag);
    }

    render() {
        return (
            <>
                <div onMouseOut={e => this.MouseOut("div")}>
                    <h3>DIV onMouseOver</h3>
                </div>
                <input type="text" onMouseOut={e => this.MouseOut("input")}/>
                <select onMouseOut={e => this.MouseOut("select")}>
                    <option value="react">react</option>
                    <option value="200">200</option>
                </select>
            </>
        )
    }
}

export default R069_onMouseOver;