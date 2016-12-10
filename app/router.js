import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('overwatch', function() {
    this.route('competetive', function() {
      this.route('input');
      this.route('output');
    });
  });
});

export default Router;
