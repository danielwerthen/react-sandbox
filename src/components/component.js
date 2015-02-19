/** @jsx React.DOM */

var React = require('react'),
    _ = require('lodash');


var Component = React.createClass({
  getInitialState: function () {
    return {
      movieName: '',
      movieUrl: '',
      movies: {
        "batman": {
          src: "http://www.freedesign4.me/wp-content/gallery/posters/free-movie-film-poster-the_dark_knight_movie_poster.jpg"
        },
        "the-grey": {
          src: "http://gdj.gdj.netdna-cdn.com/wp-content/uploads/2011/12/grey-movie-poster.jpg"
        },
        "harry-potter": {
          src: "http://www.freedesign4.me/wp-content/gallery/posters/free-movie-film-poster-harry-potter-phoenix.jpg"
        },
        "Star wars - the New Hope": {
          src: "http://netdna.webdesignerdepot.com/uploads/2012/12/newhope.jpg"
        }
      }
    };
   },
  onClick: function (e) {
    var movies = this.state.movies;
    movies[this.state.movieName] = {
      src: this.state.movieUrl
    };
     this.setState({
       movies: movies
     });
  },
  changeMovieUrl: function (e) {
    this.setState({
      movieUrl: e.target.value
    });
  },
  changeMovieName: function (e) {
    this.setState({
      movieName: e.target.value
    });
  },
  render: function () {
    var movies = this.state.movies;

    return <div>
      <div className="adder">
        <input type="text" placeholder="Movie name" value={this.state.movieName} onChange={this.changeMovieName} />
        <input type="text" placeholder="Poster img url" value={this.state.movieUrl} onChange={this.changeMovieUrl} />
        <button type="button" onClick={this.onClick}>Add poster</button>
      </div>
      <hr />
      <div className="posters">
        {_(_.keys(movies)).reverse().map(function (key) {
          return <div className="poster">
            <h2>{ key.toUpperCase() }</h2>
            <img style={{  width: 400 }} key={key} src={movies[key].src} />
          </div>;
        }).value()}
      </div>
    </div>;
  }
});

module.exports = Component;
