import React,{ Component } from 'react';
import classes from './App.module.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import withClass from '../hoc/withClass';
import Aux from '../hoc/Auxiliary';
import AuthContext from '../context/auth-context'



class App extends Component {
  constructor(props){
    super(props);
    console.log('[App.js] constructor');
  }
  state = {
    persons:[
      {id:'csac1',name:"Farid", age:28},
      {id:'efwfg2',name:'Manu', age:30},
      {id:'vrvev3',name:'emin', age:33},
    ],
    otherState : 'some other text',
    showPersons: false,
    showCockpit: true,
    changeCounter: 0,
    authenticated: false
   };

   static getDerivedStateFromProps(props,state){
     console.log('[App.js] getDerivedStatteFormProps', props)
    return state
   };
   componentDidMount(){
     console.log('[App.js] componentDidMount')
   }
   shouldComponentUpdate(nextProps,nextState){
     console.log('[App.js] shouldComponentUpdate')
   return true
   }

   componentDidUpdate(){
     console.log('[App.js] componentDidUpdate')
   }
   
   switchNameHandler = (newValue) =>{
    this.setState({persons:[
      {name:"Arif", age:28},
      {name:newValue, age:30},
      {name:'emin', age:73},
    ],
    // otherState: personState.otherState
   });
  };
  nameChangedHandler = (event, id) =>{
    const personsIndex = this.state.persons.findIndex(p =>{
      return p.id === id
    });
    const person = {...this.state.persons[personsIndex]};
    // const person = Object.assign({},this.state.persons[personsIndex])
    person.name = event.target.value; 
    const persons = [...this.state.persons]; 
    persons[personsIndex] = person; 

    this.setState((prevProps,props) => {
      return {persons:persons  
        ,changeCounter:prevProps.changeCounter + 1 };
       });
      }
  deleteHandlerPersons = (personIndex) =>{
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons:persons});
  }
  togglePersonsHandler = () =>{
    const doesShow = this.state.showPersons;
    this.setState({showPersons : !doesShow})
  }
  loginHandler = () =>{
   this.setState({authenticated:true})
  }
 
  render(){
    console.log('[App.js] render')
    let persons = null;
    if(this.state.showPersons){
      persons = (
       <Persons persons = {this.state.persons}
       clicked = {this.deleteHandlerPersons}
       changed = {this.nameChangedHandler}
       isAuthenticated = {this.state.authenticated}
       />
      );
    }
    
    return (
      <Aux>
        <button onClick={() =>{this.setState({showCockpit:false})}}>
          Remove Cockpit
        </button>
        <AuthContext.Provider value = {{authenticated:this.state.authenticated,
      login:this.loginHandler}}>
      { this.state.showCockpit ? <Cockpit 
      title = {this.props.appTitle}
      showPersons = {this.state.showPersons}
      personsLength = {this.state.persons.length}
      clicked = {this.togglePersonsHandler}/> : null}
      {persons}
      </AuthContext.Provider>
     </Aux> 
    );
    } 
  }
    export default withClass(App, classes.App);