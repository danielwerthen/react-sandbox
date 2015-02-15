var Promise = require('promise');
(function (window) {
  var Parse = window.Parse || null;

if (Parse) {
  var options = {
      id: __PARSE_ID__,
      fb_id: __FB_ID__,
      key: __PARSE_KEY__
  };


  var funcs = {

    initialize: function () {
      return new Promise(function (res, rej) {
        Parse.initialize(options.id, options.key);
        window.fbAsyncInit = function() {
          Parse.FacebookUtils.init({ // this line replaces FB.init({
            appId      : options.fb_id, // Facebook App ID
            cookie     : true,  // enable cookies to allow Parse to access the session
            xfbml      : true,  // initialize Facebook social plugins on the page
            version    : 'v2.2' // point to the latest Facebook Graph API version
          });
          var usr = funcs.getCurrentFBUser();
          res(usr);
        };

        (function(d, s, id){
          var js, fjs = d.getElementsByTagName(s)[0];
          if (d.getElementById(id)) {return;}
          js = d.createElement(s); js.id = id;
          js.src = "//connect.facebook.net/en_US/sdk.js";
          fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
      });
    },

    getCurrentFBUser: function () {
      var currentUser = Parse.User.current();
      if (!currentUser) {
        return;
      }
      if (Parse.FacebookUtils.isLinked(currentUser)) {
        return currentUser;
      }
    },
    loginWithFacebook: function () {
      var prom = new Promise(function (resolve, reject) {
        var currentFB = funcs.getCurrentFBUser();
        if (currentFB) {
          return resolve(currentFB);
        }

        Parse.FacebookUtils.logIn(null, {
          success: function(user) {
            resolve(user);
          },
          error: function(user, error) {
            reject(user, error);
          }
        });
      });
      return prom;
    },
    graph: {
      me: function () {
        var promise = new Promise(function (resolve, reject) {
          FB.api(
            "/me",
            function (response) {
              if (response && !response.error) {
                resolve(response);
              } else {
                reject(response.error);
              }
            }
          );
        });
        return promise;
      }
    }
  }
    

  module.exports = funcs;

} else {
  module.exports = {
    initialize: function () {
      return new Promise(function (res, rej) {
        res();
      });
    },
    getCurrentFBUser: function () {},
    loginWithFacebook: function () {}
  };
}
})(this);
