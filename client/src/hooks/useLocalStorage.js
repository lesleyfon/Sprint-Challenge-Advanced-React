import { useState } from 'react';

export const useLocalStorage = (key, intval) => {
    const [storedVal, setStoredVal] = useState( () => {
        const item = window.localStorage.getItem(key);
        return item ? JSON.parse(item) : intval ;
   })

  const setValue = val => {
       setStoredVal(val);
       window.localStorage.setItem(key, val)
   }
   return [storedVal, setValue] 
}