import React, { Component } from 'react'

export default class OnClick extends Component{

    state={ 
        name:"Hellow"
    };
     bye=()=>{
        this.setState({name:"Bye"});
    }
    Hai=()=>{
      this.setState({name:"Hai"})
    }
    
    render(){
     
    
  
  return (
    <div>
      <h5 style={{color:'violet'}}>Onclick Event by using CC</h5>
        <h6>{this.state.name}</h6>
      <button onClick={this.bye } >changeText</button>
      <button onClick={this.Hai} >Change</button>
    </div>
  )}
}
