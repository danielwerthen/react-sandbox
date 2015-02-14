var React = require('react'),
    Html = require('./src/html');
    Component = require('./src/component');

module.exports = function (req, res, next) {
  var markup = React.renderToString(<Component />);
  var html = React.renderToStaticMarkup(<Html markup={markup} title="Workshop"/>);
  res.send('<!DOCTYPE html>' + html);
};
