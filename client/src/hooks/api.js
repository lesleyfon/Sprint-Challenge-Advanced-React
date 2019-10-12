import {useState, useEffect } from 'react';
import axios from 'axios';



export  function usePlayerInfo ( moreLess){

    const [playerInfo, setPlayerInfo ] =  useState([]);
    console.log(moreLess);
    useEffect(()=>{
        axios.get('http://localhost:5000/api/players')
        .then(res=>{
            setPlayerInfo(res.data.slice(0, count))
        }).catch(err=>{console.log(err)})
        })

    return [playerInfo, setPlayerInfo]
}
