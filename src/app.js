/* start-webpack-block */
require('./less/style');
/* end-webpack-block */

var React = require('react'),
    Component = require('./component');

var App = React.createClass({
  render: function () {
    return <div>
      <Component />
    </div>;
  }
});

React.render(<App />, document.body);
