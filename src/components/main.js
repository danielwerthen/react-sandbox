var React = require('react'),
    Router = require('react-router'),
    Bootstrap = require('react-bootstrap'),
    Navbar = Bootstrap.Navbar,
    Nav = Bootstrap.Nav,
    NavItem = Bootstrap.NavItem,
    RouteHandler = Router.RouteHandler,
    Navigation = Router.Navigation;

var Main = React.createClass({
  mixins: [ Navigation ],
  onSelect: function (eventKey) {
    this.transitionTo(eventKey);
  },
  render: function () {
    return <div className="container">
      <header>
        <Navbar>
          <Nav >
            <NavItem eventKey="component" href="#" onSelect={this.onSelect}>Component</NavItem>
            <NavItem eventKey="/nowhere" href="#" onSelect={this.onSelect}>Nowhere</NavItem>
          </Nav>
          <Nav >
          </Nav>
        </Navbar>
      </header>
      <RouteHandler />
    </div>;
  }
});

module.exports = Main;
