import React, { Component } from 'react'
import TodoItem from './TodoItem'
export class Todos extends Component {
    render() {
        return this.props.todos.map((todo)=>
       <TodoItem key={todo.id}  delTodo = {this.props.delTodo} todo ={todo} markComplete={this.props.markComplete}/>
        )
    } 
}

export default Todos
 