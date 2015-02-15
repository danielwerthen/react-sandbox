/** @jsx React.DOM */
var React = require('react'),
    Bootstrap = require('react-bootstrap'),

    Grid = Bootstrap.Grid;
    Col = Bootstrap.Col;
    Row = Bootstrap.Row;
    ListGroup = Bootstrap.ListGroup;
    ListGroupItem = Bootstrap.ListGroupItem;
    Reflux = require('reflux'),
    userStore = require('../stores').users,
    _ = require('lodash');

var Lobby = React.createClass({
  mixins: [Reflux.listenTo(userStore, "onUserChange")],
  getInitialState: function () {
    return {
      activeUsers: userStore.getActiveUsers()
    };
  },
  onUserChange: function () {
    this.setState(this.getInitialState());
  },
  onSelectUser: function (usr) {
    var self = this;;
    return function (e) {
      self.setState({
        selectedUser: usr
      });
    };
  },
  renderChat: function () {
    var usr = this.state.selectedUser;
    return <div className="chat">
      <h2>Send {usr.get('me').first_name} a message!</h2>
    </div>;
  },
  render: function () {
    var self = this;
    return <div className="lobby">
        <Row>
          <Col xs={4}>
            <ListGroup>
              {_.map(this.state.activeUsers, function (usr) {
                var me = usr.get('me');
                if (!me) {
                  return false;
                }
                return <ListGroupItem key={usr.id}
                  active={usr === self.state.selectedUser}
                  onClick={self.onSelectUser(usr)}>
                    {me.first_name + " " + me.last_name}
                  </ListGroupItem>;
              })}
            </ListGroup>
          </Col>
          <Col xs={8}>
            {this.state.selectedUser && this.renderChat() }
          </Col>
        </Row>
    </div>;
  }
});

module.exports = Lobby;
