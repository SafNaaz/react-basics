var React = require("react");
var ReactDOM = require("react-dom");

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

//create TodoItem component

class TodoItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }

  render() {
    return (
      <li>
        <div className="todo-item">
          <span className="item-name">{this.props.item}</span>
          <span className="item-delete" onClick={this.handleDelete}>
            -x
          </span>
        </div>
      </li>
    );
  }

  handleDelete() {
    this.props.onDelete(this.props.item);
  }
}

//put component into html page
ReactDOM.render(<TodoComponent />, document.getElementById("todo-wrapper"));
