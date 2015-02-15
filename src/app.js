/** @jsx React.DOM */

/* start-webpack-block */
require('./less/style');
/* end-webpack-block */

var React = require('react'),
    Router = require('react-router'),
    routes = require('./routes');

var stores = require('./stores');

Router.run(routes, Router.HistoryLocation, function (Handler, state) {
  React.render(<Handler params={state.params}/>, document.body);
});
