/** @jsx React.DOM */

var React = require('react'),
    movieActions = require('../movieActions'),
    movieStore = require('../movieStore'),
    _ = require('lodash');

var Component = React.createClass({
  getInitialState: function () {
    return { 
      name: '',
      url: '',
      movies: movieStore.getMovies()
    };
  },
  componentDidMount: function () {
    this.unsubscribe = movieStore.listen(this.onStoreChange);
  },
  componentWillUnmount: function () {
    this.unsubscribe();
  },
  onStoreChange: function (movies) {
    this.setState({
      movies: movies
    });
  },
  nameChange: function (e) {
    this.setState({
      name: e.target.value
    });
  },
  urlChange: function (e) {
    this.setState({
      url: e.target.value
    });
  },
  addMovie: function () {
    movieActions.add(this.state.name, this.state.url);
  },
  render: function () {
    var movies = this.state.movies;

    return <div>
      <div className="adder">
        <input type="text" placeholder="Movie name" onChange={this.nameChange} value={this.state.name}/>
        <input type="text" placeholder="Movie url" onChange={this.urlChange} value={this.state.url}/>
        <button type="button" onClick={this.addMovie} >Add</button>
      </div>
      <div className="posters">
        {_(_.keys(movies)).map(function (key) {
          return <div className="poster" key={key}>
            <h2>{key}</h2>
            <img src={movies[key].src} width="400"/>
          </div>;
        }).value()}
      </div>
    </div>;
  }
});

module.exports = Component;
