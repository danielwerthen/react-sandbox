require("./style.css");

var React = require('react/addons');
var Test = React.createClass({
  render: function () {
    return <div>test</div>;
  }
}); 
var CommentBox = React.createClass({
  render: function() {
    return (
      <div className="commentBox" style={{ width: 5 }}>
        Hello, world! I am a CommentBox.
        <form>
          <input type="text" value="4" />
          <Test />
        </form>
      </div>
    );
  }
});

module.exports = CommentBox;



/*var TestUtils = React.addons.TestUtils,
    _ = require('lodash');

var rendered = TestUtils.renderIntoDocument(<CommentBox />);
*/
