var React = require('react');
var Router = require('react-router');
var Route = Router.Route,
    DefaultRoute = Router.DefaultRoute,
    NotFoundRoute = Router.NotFoundRoute;


var Main = require('./components/main'),
    Component = require('./components/component'),
    NotFound = require('./components/not-found');

var routes = (
    <Route name="app" path="/" handler={Main}>
      <Route path="component" handler={Component} path="/component"/>
      <NotFoundRoute handler={NotFound} />
    </Route>
);

module.exports = routes;
