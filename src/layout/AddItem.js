import React, { Component } from 'react'

export class AddItem extends Component {
state ={
    title: ''

}

onchange = (e)=>this.setState({[e.target.name]:e.target.value})


onSubmit =(e)=>{
    e.preventDefault();
    this.props.addTodo(this.state.title)
    this.setState({title:""})
}
    render() {
        return (
            <form onSubmit= {this.onSubmit } style ={{display:'flex'}}>
              <input type='text'
              name='title'
              style ={{flex:'10',padding:'5px'}}
              placeholder =' Add item ...'
              value ={this.state.title}
              onChange = {this.onchange}
              />


 
              <input 
              type ='submit'
              value='Submit'
              className ='btn'
              style = {{flex:'1'}}
              /> 
            </form>
        )
    }
}

export default AddItem
