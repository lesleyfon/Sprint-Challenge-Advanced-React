import React from 'react'

function TableRow({playerInfo}) {

    return (
        <>
            <tr>
                <td>{playerInfo.name}</td>
                <td>{playerInfo.country}</td>
                <td>{playerInfo.searches}</td>
            </tr>
        </>
    )
}

export default TableRow
