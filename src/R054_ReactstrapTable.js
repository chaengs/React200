import React, { Component } from 'react';
import { Table } from 'reactstrap';

class R054_ReactstrapTable extends Component {
    render() {
        return (
            // <Table>
            // <Table dark bordered>
            // <Table striped hover>
            <Table borderless size="sm">
                <thead>
                    <tr>
                        <th>number</th>
                        <th>Book Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scrope="row">1</th>
                        <td>React 100</td>
                        <td>₩10000</td>
                    </tr>
                    <tr>
                        <th scrope="row">2</th>
                        <th>React 200</th>
                        <th>₩20000</th>
                    </tr>
                </tbody>
            </Table>
        )
    }
}

export default R054_ReactstrapTable;