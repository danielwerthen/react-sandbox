var React = require('react');


var Html = React.createClass({
  render: function () {
    return (
      <html>
        <head>
          <title>{ this.props.title }</title>
        </head>
        <body dangerouslySetInnerHTML={{__html: this.props.markup}}></body>
        <script src="/src/bundle.js"></script>
      </html>
    );
  }
});

module.exports = Html;
