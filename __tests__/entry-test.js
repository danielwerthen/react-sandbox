/** @jsx React.DOM */

// __tests__/CheckboxWithLabel-test.js

jest.dontMock('../entry.js');
describe('CheckboxWithLabel', function() {
  it('changes the text after click', function() {
    var React = require('react/addons');
    var Entry = require('../entry.js');
    var TestUtils = React.addons.TestUtils;

    // Render a checkbox with label in the document
    var rendered = TestUtils.renderIntoDocument(
      <Entry />
    );

    expect(rendered).toBeDefined();
    expect(1).toEqual(2);

  });
});
