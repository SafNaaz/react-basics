var React = require("react");
var ReactDOM = require("react-dom");

class TodoComponent extends React.Component{
  render(){
    return (
      <h1>Hellooo</h1>
    );
  }
}

//put component into html page
ReactDOM.render(<TodoComponent />, document.getElementById('todo-wrapper'));
