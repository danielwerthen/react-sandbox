/** @jsx React.DOM */

// __tests__/CheckboxWithLabel-test.js

jest.dontMock('../component');
describe('Entry', function() {
  it('changes the text after click', function() {
    var React = require('react/addons'),
      TestUtils = React.addons.TestUtils,
      Entry = require('../component');

    var rendered = TestUtils.renderIntoDocument(<Entry />);

    expect(rendered).toBeDefined();
  });
});
