/** @jsx React.DOM */
var React = require('react'),
    Router = require('react-router'),
    Bootstrap = require('react-bootstrap'),
    Navbar = Bootstrap.Navbar,
    Nav = Bootstrap.Nav,
    NavItem = Bootstrap.NavItem,
    RouteHandler = Router.RouteHandler,
    Navigation = Router.Navigation,
    userStore = require('../stores').users,
    actions = require('../actions');

var Main = React.createClass({
  mixins: [ Navigation ],
  getInitialState: function () {
    return {
      user: userStore.getUser()
    };
  },
  onUserChange: function () {
    this.setState(this.getInitialState());
  },
  componentDidMount: function () {
    this.unsubscribe = userStore.listen(this.onUserChange);
  },
  componentWillUnmount: function () {
    this.unsubscribe();
  },
  onSelect: function (eventKey) {
    if (eventKey === "login") {
      actions.loginWithFacebook();
    } else {
      this.transitionTo(eventKey);
    }
  },
  renderLoggedInUser: function () {
    var user = this.state.user,
      me = user.get('me');
    if (!me) {
      return "Unknown";
    }
    return user && ("Signed in as " + me.first_name);
  },
  render: function () {
    return <div className="container">
      <header>
        <Navbar>
          <Nav >
            <NavItem eventKey="lobby" href="#" onSelect={this.onSelect}>Lobby</NavItem>
            <NavItem eventKey="component" href="#" onSelect={this.onSelect}>Component</NavItem>
            <NavItem eventKey="/nowhere" href="#" onSelect={this.onSelect}>Nowhere</NavItem>
          </Nav>
          <Nav right={true}>
            {!this.state.user && <NavItem eventKey="login" href="#" onSelect={this.onSelect}>Login with Facebook</NavItem>}
            {this.state.user && <NavItem>{this.renderLoggedInUser()}</NavItem>}
          </Nav>
        </Navbar>
      </header>
      <RouteHandler />
    </div>;
  }
});

module.exports = Main;
