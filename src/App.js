import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

import Todo from './components/Todo';
import Info from './components/Info';

class App extends Component {

  state = { 
    todos: [
        // {id: 101, title: 'Learn React', desc: 'Some description about React'},
        // {id: 102, title: 'Make Project', desc: 'Some description about Project'},
        // {id: 103, title: 'Learn Redux', desc: 'Some description about Redux'}
    ],
    error: null
 }

 componentDidMount(){
   console.log('Iam in the mounting Phase App')
   axios.get('http://jsonplaceholder.typicode.com/todos')
    .then(resolve => {
      // console.log(resolve.data)
      this.setState({
        todos: resolve.data.slice(0, 10)
      })
    })
    .catch(reject => {
      this.setState({
        error: reject
      })
    })
   
 }

 componentDidUpdate(prevProps, prevState){
  console.log('Iam in the updating Phase App', prevProps, prevState)
  console.log('New State ',this.state)
 }

//  componentDidMount(){
//   //  if(localStorage.getItem('data')){
//   //    this.setState({
//   //      todos: localStorage.getItem('data')
//   //    })
//   //  }
//  }

//  persistData = () => {
//    localStorage.setItem('data', this.state.todos)
//  }

 addTodo = (newTodo) => {
    newTodo.id = this.state.todos.length + 101;
    // console.log(newTodo)
    let todoArr = [...this.state.todos, newTodo]
    this.setState({
      todos: todoArr
    })
    // this.persistData()
    //console.log(this.state);
 }

 deleteTodo = (id) => {
  //  console.log(id)
   let todoArr = this.state.todos.filter(todo => todo.id!==id)
  //  console.log(todoArr)
  this.setState({
    todos: todoArr
  })
  // this.persistData()
 }

  render() {
    console.log('Rendering App')
    return (
      <div className="App">
        <Info addTodo={this.addTodo}/>
        <Todo todos={this.state.todos} deleteTodo={this.deleteTodo} />
      </div>
    );
  }
}

export default App;
