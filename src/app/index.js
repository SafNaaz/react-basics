var React = require("react");
var ReactDOM = require("react-dom");

class TodoComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: ["wash up", "eat some cheese", "take a nap", "buy flowers"],
    };
  }

  render() {
    var todos = this.state.todos;
    todos = todos.map((item, index) => {
      return <TodoItem item={item} key={index} />;
    });
    return (
      <div id="todo-list">
        <p onClick={this.clicked}>
          The busiest people have the most leisure...
        </p>
        <ul>{todos}</ul>
      </div>
    );
  }

  //custom functions

  clicked() {
    console.log("you clicked me");
  }
}

//create TodoItem component

class TodoItem extends React.Component {
  render() {
    return (
      <li>
        <div className="todo-item">
          <span className="item-name">{this.props.item}</span>
        </div>
      </li>
    );
  }
}

//put component into html page
ReactDOM.render(<TodoComponent />, document.getElementById("todo-wrapper"));
