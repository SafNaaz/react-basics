var React = require("react");
var ReactDOM = require("react-dom");

//modules requires
var TodoItem = require("./todoItem");

class TodoComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: ["wash up", "eat some cheese", "take a nap", "buy flowers"],
    };
    this.onDelete = this.onDelete.bind(this);
  }

  render() {
    var todos = this.state.todos;
    todos = todos.map((item, index) => {
      return <TodoItem item={item} key={index} onDelete={this.onDelete} />;
    });
    return (
      <div id="todo-list">
        <p>The busiest people have the most leisure...</p>
        <ul>{todos}</ul>
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
}

//put component into html page
ReactDOM.render(<TodoComponent />, document.getElementById("todo-wrapper"));
