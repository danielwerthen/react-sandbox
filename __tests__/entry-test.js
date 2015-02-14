/** @jsx React.DOM */

// __tests__/CheckboxWithLabel-test.js

jest.dontMock('../entry.js');
describe('CheckboxWithLabel', function() {
  it('changes the text after click', function() {
    var React = require('react/addons');
    var Entry = require('../entry');
    var TestUtils = React.addons.TestUtils;

    var rend = TestUtils.renderIntoDocument(<Entry />);
    expect(rend).toBeDefined();


  });
});
