import { Component } from "react"

export default class Props extends Component{
    state={
        name:this.props.name,
        address:this.props.address
    }
      changeText=()=>{
        this.setState({name:"Akhila", address:"Knr"})
    }
    render(){
        
        return(
            <h6>
                <h4 style={{color:'blue'}}>Change Text by using Props in CC</h4>
               <h5>{this.state.name}{this.state.address}</h5>
               <button onClick={this.changeText}>changeText</button>
            </h6>
        )
    }
}