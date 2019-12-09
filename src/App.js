import React,{Component} from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';

import Header from './components/Header';
import AddTodo from './components/AddTodo';
import Todos from './components/Todos';
import About from './components/pages/About';
// import uuid from 'uuid';

import './App.css';
import Axios from 'axios';


class App extends Component {
  state = {
    todos: []
  }

  async componentDidMount(){
    try {
      let res = await Axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10');
      this.setState({todos:res.data})
    } catch (error) {
      console.error(error);
    }
  }

  // Toggle Complete
  markComplete = (id) => {
    this.setState({todos: this.state.todos.map(todo => {
      if(todo.id === id){
        todo.completed = !todo.completed
      } 
      return todo;
    })});
  }

  delTodo = async (id) => {
    try {
      await Axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
      this.setState({todos: [...this.state.todos.filter(todo => todo.id !== id)]});
    } catch (error) {
      console.error(error);
    }
  }

   addTodo = async (title) => {
    try {
      let res = await Axios.post('https://jsonplaceholder.typicode.com/todos',{
        title,
        completed: false
      });
      this.setState({todos: [...this.state.todos,res.data]})
    } catch (error) {
      console.error(error);
    }
  }

  render(){
    return (
      <Router>
        <Header />
        <Route exact path="/" render={props => (
          <React.Fragment>
            <AddTodo addTodo={this.addTodo}/>
            <Todos todos={this.state.todos} 
              markComplete={this.markComplete}
              delTodo={this.delTodo}/>
          </React.Fragment>
        )}/>
        <Route path="/about" component={About}/>
      </Router>
    );
  }
}

export default App;
