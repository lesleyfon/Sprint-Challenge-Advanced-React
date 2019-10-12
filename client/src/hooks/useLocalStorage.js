import { useState } from 'react';

export function usePlayer(key){

    const [value, setValue] = useLocalStorage(key, []);
    const getMore = int =>{
        setValue(int);
    }
    return [ value, getMore, setValue]
}

const useLocalStorage = (key, initialValue) =>{

    const [storedData, setStoredData ] = useState (()=>{
        
        const player = window.localStorage.getItem(key);
        return player ? JSON.parse(player) : initialValue;
    });

    const setPlayer = (val) => {
        setStoredData(val);
        window.localStorage.setItem(key, JSON.stringify(storedData));
    }
    return [storedData, setPlayer]
}

//more 