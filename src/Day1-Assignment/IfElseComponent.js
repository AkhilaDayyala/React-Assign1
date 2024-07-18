import { Component } from "react"

export default class IfElseComponent extends Component{
    state={
        IsLoggedIn:true
    }
   
    render(){
       
        let IsLoggedIn=this.state
        const renderButton =()=>{
            if(!IsLoggedIn){
                return <button>Login</button>
            }
            else{
                return <button>Logout</button>
            }}
      
        return(
            <>
            {renderButton()}
            </>
        )
    }
}