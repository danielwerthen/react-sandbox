var React = require('react'),
    Router = require('react-router'),
    RouteHandler = Router.RouteHandler;

var Main = React.createClass({
  render: function () {
    return <div className="container">
      <RouteHandler />
    </div>;
  }
});

module.exports = Main;
