var Reflux = require('reflux'),
    users = require('../api/users'),
    actions = require('../actions');

var userStore = Reflux.createStore({
  init: function () {
    var self = this;
    users.initialize().then(function (usr) {
      self.loadUser(usr);
      self.loadActiveUsers();
    });
    this.listenTo(actions.loginWithFacebook, this.loginWithFB);
  },
  getUser: function () {
    return this.user;
  },
  getActiveUsers: function () {
    return this.activeUsers;
  },
  loadActiveUsers: function () {
    var self = this;
    users.query.activeUsers().then(function (users) {
      self.activeUsers = users;
      self.trigger(users);
    });
  },
  loadUser: function (user) {
    var self = this;
    self.user = user;
    self.trigger(user);
  },
  loginWithFB: function () {
    var self = this;
    users.loginWithFacebook().then(function (user) {
      self.loadUser(user);
    }, function () {
      self.user = null;
      console.log('Failed to login');
      this.trigger(null);
    });
  }
});

module.exports = userStore;
