var Reflux = require('reflux'),
    users = require('../api/users'),
    actions = require('../actions');

var userStore = Reflux.createStore({
  init: function () {
    var self = this;
    users.initialize().then(function (usr) {
      self.loadUser(usr);
    });
    this.listenTo(actions.loginWithFacebook, this.loginWithFB);
  },
  getUser: function () {
    return this.user;
  },
  loadUser: function (user) {
    var self = this;
    users.graph.me().then(function (res) {
      self.user = res;
      self.trigger(res);
    });
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
