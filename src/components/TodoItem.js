import React, { Component } from 'react'

export class TodoItem extends Component {

    //we write function above the render
    getStyle =()=>{
    if(this.props.todo.completed){
        return{
            background:'#f4f4f4',
            textDecoration:'line-through ',
            padding:'10px',
            borderBottom:'1px #ccc dotted',

        }
    }
    else{
        return{
            background:'#f4f4f4',
            textDecoration:'none',
            padding:'10px',
            borderBottom:'1px #ccc dotted',
        }
    }//you can use ternary operator
    }


    render() {
        //we destructure
        const {id,title} = this.props.todo
        return (
            <div style ={ this.getStyle()}>
              
            <p>  <input type='checkbox' onChange={this.props.markComplete.bind(this,id)}/> {'    '}
            {title} <button onClick = {this.props.delTodo.bind(this,id)}   style ={btnStyle}>X</button> </p> 

            </div>
        )
    }
}
const btnStyle ={
    background:'#ff0000',
    color:'#fff',
    padding :'5px 9px',
    border:'none',
    borderRadius:'50%',
    cursor:'pointer',
    float:'right'

}
export default TodoItem
