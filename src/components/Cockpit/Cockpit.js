import React,{useEffect, useContext} from 'react';
import classes from './Cockpit.module.css';
import AuthContext from '../../context/auth-context'


const Cockpit = (props) =>{
  const authContent = useContext(AuthContext)
    useEffect(()=>{
      console.log('[Cockpit.js] useEffect');
      const timer = setTimeout(()=>{
         alert('saved data to cloud')
      },1000);
      return() =>{
        clearTimeout(timer);
         console.log('[Cockpit.js] cleanup work in useEffect')
        };
    },[]);
    useEffect(()=>{
      console.log('[Cockpit.js] 2nd useEffect');
      return() =>{
         console.log('[Cockpit.js] 2nd cleanup work in useEffect')
        };
    },);
    let assignClasses = [];
    let btnClass = '';
    if(props.showPersons){
      btnClass = classes.Red;
    }
    if(props.personsLength <= 2 ){
        assignClasses.push(classes.red) 
    }
    if(props.personsLength <= 1){
      assignClasses.push(classes.bold) 
    }
    return(
        <div className = {classes.Cockpit}>
        <h1>{props.title}</h1>
        <p className = {assignClasses.join(' ')}>this is p</p>
        <button className = {btnClass} alt = {props.showPersons} onClick={props.clicked}>Toogle Persons</button>
      
           <button onClick = {authContent.login}>
                Log in
            </button>
         
      
        </div>
    )
}

export default React.memo(Cockpit)