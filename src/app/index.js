var React = require("react");
var ReactDOM = require("react-dom");
import {
  BrowserRouter as Router,
  Route,
  browserHistory,
  Link,
} from "react-router-dom";

//modules requires
var TodoItem = require("./todoItem");
require("./css/index.css");
var AddItem = require("./addItem");
var About = require("./about");

class App extends React.Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route exact path={"/"} component={TodoComponent}></Route>
        <Route path={"/about"} component={About}></Route>
      </Router>
    );
  }
}

class TodoComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: ["wash up", "eat some cheese", "take a nap", "buy flowers"],
    };
    this.onDelete = this.onDelete.bind(this);
    this.onAdd = this.onAdd.bind(this);
  }

  render() {
    var todos = this.state.todos;
    todos = todos.map((item, index) => {
      return <TodoItem item={item} key={index} onDelete={this.onDelete} />;
    });
    return (
      <div id="todo-list">
        <Link to={"/about"}>About</Link>
        <p>The busiest people have the most leisure...</p>
        <ul>{todos}</ul>
        <AddItem onAdd={this.onAdd} />
      </div>
    );
  }

  onDelete(item) {
    var updatedTodos = this.state.todos.filter((val, index) => {
      return item !== val;
    });
    this.setState({
      todos: updatedTodos,
    });
  }

  onAdd(item) {
    var updatedTodos = this.state.todos;
    updatedTodos.push(item);
    this.setState({
      todos: updatedTodos,
    });
  }

  //lifecycle methods
  // componentWillMount() {
  //   console.log("componentWillMount");
  // }

  // componentDidMount() {
  //   console.log("componentDidMount");
  // }

  // componentWillUpdate() {
  //   console.log("componentWillUpdate");
  // }
}

//put component into html page
ReactDOM.render(<App />, document.getElementById("todo-wrapper"));
