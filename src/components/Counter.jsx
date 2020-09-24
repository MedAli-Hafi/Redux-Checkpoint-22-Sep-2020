import React, { useState } from 'react'
import {connect} from 'react-redux'

function Counter(props) {
 
    return (
        <div style={{backgroundColor:'Orange ', display:'flex',  justifyContent: '  space-around', alignItems:'center'}}>
            <h1 style={{color:'#fff'}}> The counter value is : {props.counterState} </h1>
            <div >
             
            <button style={{color:'red' ,margin:'10px 20px' }} onClick={() => props.dispatch({type: 'INCREMENT'}) }>+</button>
            
            <button style={{color:'red'}} onClick={() => props.dispatch({type: 'DECREMENT'})}>-</button>
            </div>
        </div>
    )
}



const mapStateToProps = (stateInStore) => {
    return ({
        counterState: stateInStore.counter,
        
    })
}

export default connect(mapStateToProps)(Counter)
