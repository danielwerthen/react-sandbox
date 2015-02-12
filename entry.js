require("./style.css");

var React = require('react/addons');

var App = React.createClass({
  getInitialState: function () {
    return { name: 'Daniel' };
  },
  onChange: function (e) {
    var val = e.target.value;
    this.setState({ name: val });
  },
  render: function () {
    var name = this.state.name,
      nameTag = <span className="highlight">{name}</span>,
      adj = "plain";

    if (name.toLowerCase() === "daniel") {
      adj = "awesome";
    }
    if (name.toLowerCase() === "ella") {
      adj = "kick-ass";
    }

    return <div>
      <h1>Hello {nameTag} how do you you?</h1>
      <input type="text" value={this.state.name} onChange={this.onChange}/>
      <p>{name.toUpperCase()} is a {adj} name</p>
    </div>;
  }
});

React.render(<App />, document.body);
