var React = require('react');
var Router = require('react-router');
var Route = Router.Route;


var Component = require('./component');

var routes = (
    <Route name="app" path="/" handler={Component}>
    </Route>
);

module.exports = routes;
