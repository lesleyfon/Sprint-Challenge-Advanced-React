import React, { Component } from 'react';
import axios from 'axios'
import Table from './Components/Table/Table';
import Navbar from './Components/Nav/Navbar';
import styled from 'styled-components'
import './../src/App.css'

 class App extends Component {
   constructor(){
     super();
     this.state = {
      playerData: []
    };
   }

   componentDidUpdate(){

   }
   componentDidMount(){
    this.fetchPlayerData();
  }

  fetchPlayerData = () => {
    axios.get('http://localhost:5000/api/players')
    .then(res=>{
      this.setState({ playerData: res.data })
    }).catch(err=>{console.log(err)})
    }
    render() {
      
    return (
      <AppStyles className='app'>
        <Navbar />
        <Table playerData = { this.state.playerData }/>
      </AppStyles>
    )
  }
}

export default App;


const AppStyles = styled.div`
.app {
  font-family: sans-serif;
  text-align: center;
  width: 100%;
}

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

a{
  text-decoration: none;
  color: #313843;
}
.dark-mode {
  color: #fff;
  background-color: #313843;
  height: 100%;
  a{
    text-decoration: none;
    color: #fff;
  }
  .navbar {
    background-color: #1F2022;
    border: none;
  }
}
.buttons{
    margin: 0 auto;
    width : 60%;
    display: flex;
    justify-content: space-between; 
    button{
      width: 49%;
      height: 20px;
    }
   }
   
`;