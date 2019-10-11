import React, { Component } from 'react'
import styled from 'styled-components';
import TableHeader from './TableHeader';
import TableBody from './TableBody';

export default class Table extends Component {
    render() {
        return (
            <>
                <TableStyles  >  
                    <TableHeader />
                    <TableBody
                        playerData = {this.props.playerData}
                     />
                </TableStyles>
            </>
        )
    }
}

const TableStyles = styled.table`
    font-family: arial, sans-serif;
    border-collapse: collapse;
    width: 60%;

    td, th {
    border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;
    }

    tr:nth-child(even) {
    background-color: #dddddd;
    }
`