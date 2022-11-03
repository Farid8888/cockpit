import React from 'react';


const style = {
    padding: '16px',
    display: 'inline-block',
    border: '1px solid black',
    margin: '16px',
    textALign:'center'

}
const char = (props) =>{
    return(
      <div style = {style} onClick = {props.clicked}>
        {props.character}
      </div>
    )
}

export default char