var React = require("react");
var ReactDOM = require("react-dom");

class TodoComponent extends React.Component {
  render() {
    return (
      <div>
        <h1>Hellooo</h1>
        <p>Hellooo</p>
        <p>{this.props.msg}</p>
        <p>
          <strong>Cheese Name:</strong>
          {this.props.cheese.name}
        </p>
      </div>
    );
  }
}

var myCheese = {
  name: "Camembert",
  smellFactor: "Extreme Pong",
  price: "3.50",
};

//put component into html page
ReactDOM.render(
  <TodoComponent msg="I like cheese" cheese={myCheese} />,
  document.getElementById("todo-wrapper")
);
