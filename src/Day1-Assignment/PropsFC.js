import React from 'react'

export default function PropsFC(props) {
  return (
    <div>
        <h4 style={{color:'blue'}}>Functional component by using props</h4>
      <h5>Name: {props.name}</h5>
      <h5> Address: {props.address}</h5>
      <h5> Score: {props.score}</h5>
    </div>
  )
}
