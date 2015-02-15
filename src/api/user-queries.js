var Promise = require('promise');
module.exports = function (Parse) {
  return {
    activeUsers: function () {
      return new Promise(function (resolve, reject) {
        var query = new Parse.Query(Parse.User);
        query.find({
          success: function(users) {
            resolve(users);
          }
        });
      });
    }
  };
};
