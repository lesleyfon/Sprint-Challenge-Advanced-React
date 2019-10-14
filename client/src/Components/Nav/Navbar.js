import React, { useEffect, useState} from 'react';
import styled from 'styled-components';
import { useDarkMode } from './../../hooks/api'

const Navbar = () => {
  const [darkMode, setMode] = useDarkMode();

  useEffect(() => {

  }, [darkMode]);
  return (
    <NavStyles className="navbar">
      <div className="dark-mode__toggle">
        <div
          onClick={() => { setMode(!darkMode) } }
          className={darkMode ? 'toggle toggled' : 'toggle'}
        />
      </div>
    </NavStyles>
  );
};

export default Navbar;


const NavStyles = styled.div`
    .navbar {
        align-items: center;
        border-bottom: 1px solid rgb(221, 221, 221);
        display: flex;
        height: 70px;
        justify-content: space-between;
        padding: 0 3%;
        width: 100%;
        -webkit-box-shadow: 0px 2px 15px -8px rgba(0, 0, 0, 0.42);
        -moz-box-shadow: 0px 2px 15px -8px rgba(0, 0, 0, 0.42);
        box-shadow: 0px 2px 15px -8px rgba(0, 0, 0, 0.42);
    }
    .dark-mode__toggle {
    background: papayawhip;
    border-radius: 50px;
    border: 1px solid black;
    height: 20px;
    position: relative;
    width: 40px;
    }

    .toggle {
    background: #f68819;
    border-radius: 50px;
    height: 18px;
    left: 0;
    position: absolute;
    transition: 0.2s;
    width: 20px;
    }

    .toggled {
    left: 18px;
    }
    
`;