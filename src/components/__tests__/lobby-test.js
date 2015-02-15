jest.dontMock('../lobby');
describe('Lobby', function () {
  it('should render OK', function () {
    var React = require('react/addons'),
      Lobby = require('../lobby'),
      TestUtils = React.addons.TestUtils;

    var lobby = TestUtils.renderIntoDocument(<Lobby />);

    expect(lobby).toBeDefined();

  });
});
