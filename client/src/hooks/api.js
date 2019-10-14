import  {useEffect} from 'react'
import { useLocalStorage } from './useLocalStorage';

export const useDarkMode = ( ) => {
    const [ darkMode, setDarkMode ] = useLocalStorage('isDarkMode', false);
    const body = document.querySelector("body");
    useEffect(()=>{

    }, [darkMode]);

   darkMode ?
        body.classList.add('dark-mode')
    :
        body.classList.remove('dark-mode')
    
    
    return [darkMode, setDarkMode]
}

