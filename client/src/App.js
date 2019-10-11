import React, { Component } from 'react';
import axios from 'axios'
import Table from './Components/Table/Table';

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
      <div>
        <Table playerData = { this.state.playerData }/>
      </div>
    )
  }
}

export default App;