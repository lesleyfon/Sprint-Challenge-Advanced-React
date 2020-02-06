import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
import TableHeader from './TableHeader';
import TableBody from './TableBody';

const Table = ( {playerData} ) => {
    const [display, setDisplay] = useState([])
    const [number, setNumber] = useState(5)
    useEffect(() => {
        if(number <= 5){
            setNumber(5)
        }
        setDisplay(playerData.slice(0, number))
    },[playerData, number]);

    const handleNumber = (e, moreLess) => {
        e.preventDefault();
        if(number < 5){
            setNumber(5)
        }
        else if(moreLess === 'more'){
            setNumber(number + 5);
        } else if(moreLess === 'less'){
            setNumber(number - 5);
        }
    }
    return (
        <>
            <TableStyles  >  
                <TableHeader />
                <TableBody
                    playerData = { display }
                    />
            </TableStyles>
            <div className='buttons'>
                <button onClick={e=> handleNumber(e, 'more')}>More</button>
                <button  onClick={e=> handleNumber(e, 'less')}>Less</button>
            </div>
        </>
    )
    
}

export default Table;

const TableStyles = styled.table`
    font-family: arial, sans-serif;
    border-collapse: collapse;
    width: 60%;
    margin: 10px auto;

    td, th {
    border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;
    }

    tr:nth-child(even) {
    background-color: #dddddd;
    }
  
`