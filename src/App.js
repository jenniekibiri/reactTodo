

import React, { Component } from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom'
import Todos from './components/Todos.js'
import './App.css';
import AddItem from './layout/AddItem'
import Header from './layout/Header'
import * as uuid from "uuid";
import About from './components/pages/About'
import axios from 'axios'
 
class App extends Component {
 state = {
   todos: []
 }


componentDidMount(){
  axios.get ('https://jsonplaceholder.typicode.com/todos?_limit=10 ')
  .then(res=>this.setState({todos:res.data}))
}
 
  //todo tog gle
 markComplete =(id )=>{
  this.setState({todos:this.state.todos.map(todo=>{
    if(todo.id === id){
      todo.completed =!todo.completed
    }
    return todo;  
  })}) 
}
//deletebutton
delTodo = (id)=>{
  axios.delete(`https://jsonplaceholder.typicode.com/todos${id}`)
  .then(res => this.setState({todos:[...this.state.todos.filter(todo =>todo.id !==id )]  }))
}


addTodo =(title)=>{
  axios.post('https://jsonplaceholder.typicode.com/todos',{
    title,
    completed:false
  })
  .then(res=>  this.setState({todos: [...this.state.todos,res.data]}))

}
 render(){ 
   
  return ( 
    <Router>
       <div className="App"> 

<Header/>


<Route exact  path='/' render={props=>(
 <React.Fragment>
 <AddItem addTodo ={this.addTodo}/>
<Todos todos= {this.state.todos} delTodo = {this.delTodo} markComplete = {this.markComplete}/>
 </React.Fragment>
)

}
 
/>
<Route path='/about'   component={About}/>
</div>
    </Router> 
   
  );
 }
} 

export default App;
