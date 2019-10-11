import React from 'react'
import TableRow from './TableRow';

function TableBody({ playerData }) {

    return (
        <>
            <tbody>
                {playerData.map(playerInfo => {
                   return <TableRow 
                            playerInfo = { playerInfo }
                    />
                })}
                
            </tbody>
        </>
    )
}

export default TableBody
