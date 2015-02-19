var Reflux = require('reflux'),
    movieActions = require('./movieActions');

var movieStore = Reflux.createStore({
  init: function () {
    this.movies = {};
    this.listenTo(movieActions.add, this.addMovie);
  },
  getMovies: function () {
    return this.movies;
  },
  addMovie: function (name, url) {
    this.movies[name] = {
      src: url
    };
    this.trigger(this.movies);
  }
});

module.exports = movieStore;
