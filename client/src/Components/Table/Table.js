import React, { useState } from 'react'
import styled from 'styled-components';
import TableHeader from './TableHeader';
import TableBody from './TableBody';

const Table = (props ) => {

    return (
        <>
            <TableStyles  >  
                <TableHeader />
                <TableBody
                    playerData = { props.playerData}
                    />
            </TableStyles>
        </>
    )
    
}

export default Table;
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