import React, {Component} from 'react';
import classes from './Person.module.css';
import Aux from '../../../hoc/Auxiliary';
import withClass from '../../../hoc/withClass';
import AuthContext from '../../../context/auth-context'

class Person extends Component{
  constructor(props){
    super(props)
    this.inputElement = React.createRef()
  }
  static contextType = AuthContext;
  componentDidMount(){
  // this.inputElement.focus();
    this.inputElement.current.focus()
   console.log(this.context.authenticated)
  }

  render(){
    console.log('[Person.js] rendering...')
    return (
   <Aux>
     {this.context.authenticated ? <p>Authenticated!</p>
      : <p>Please Log in</p>}
    <p key = 'as1' onClick = {this.props.click}>My name is {this.props.name} and my age is : {this.props.age}</p>
    <p key = 'ds2'>{this.props.children}</p>
    <input 
    key = 'df3'
     type="text" 
     ref = {this.inputElement}
    onChange = {this.props.changed} 
    value = {this.props.name}/>
    </Aux> 
    )
  }
  
};

export default withClass(Person, classes.Person);