/** @jsx React.DOM */

/* start-webpack-block */
require('./less/style');
/* end-webpack-block */

var React = require('react'),
    Component = require('./component');


React.render(React.createElement(Component, null), document.body);
