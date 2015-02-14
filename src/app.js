/* start-webpack-block */
require('./css/style.css');
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
