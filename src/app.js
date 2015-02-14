/** @jsx React.DOM */

/* start-webpack-block */
require('./less/style');
/* end-webpack-block */

var React = require('react'),
    Component = require('./component');


React.render(<Component />, document.body);
