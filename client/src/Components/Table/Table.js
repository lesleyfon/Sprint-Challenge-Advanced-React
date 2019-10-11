import React, { Component } from 'react'
import TableHeader from './TableHeader';
import TableBody from './TableBody';

export default class Table extends Component {
    constructor(props){
        super(props);
    }
    render() {
        console.log(this.props)
        return (
            <>
                <table  >  
                    <TableHeader />
                    <TableBody
                        playerData = {this.props.playerData}
                     />
                </table>
            </>
        )
    }
}

