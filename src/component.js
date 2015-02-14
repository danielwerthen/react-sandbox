/** @jsx React.DOM */

var React = require('react');

/* start-webpack-block */
require('./css/style.css');
/* end-webpack-block */

var Component = React.createClass({
  render: function () {
    return <div>Hello world</div>;
  }
});

module.exports = Component;
