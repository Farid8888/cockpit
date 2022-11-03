import React from 'react';


const validation = (props) =>{
    let result = 'too long';
    if(props.inputLength <= 5){
        return result = 'too short'
    }
    return(
         <div>
             {props.character}
        </div> 
    )
}

export default validation