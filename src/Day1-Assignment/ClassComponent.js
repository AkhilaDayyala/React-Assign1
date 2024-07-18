import { Component } from "react";

export default class ClassComponent extends Component{


    state={
        name:"Akhila"
    };
    changeText= () => {
        this.setState({ name:"Akki"});
    }
    render(){
        return(
            <>
            <h5 style={{color:'GrayText'}}> change Text by using CC</h5>
            <h1> {this.state.name}</h1>
            <button onClick={this.changeText} >changetext</button>
            </>
        )
    }
}
