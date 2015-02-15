var React = require('react');


var Html = React.createClass({
  render: function () {
    return (
      <html>
        <head>
          <title>{ this.props.title }</title>
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap.min.css" />
          <script src="//www.parsecdn.com/js/parse-1.3.4.min.js"></script>
        </head>
        <body dangerouslySetInnerHTML={{__html: this.props.markup}}></body>
        <script src="/src/bundle.js"></script>
      </html>
    );
  }
});

module.exports = Html;
