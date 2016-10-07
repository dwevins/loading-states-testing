import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('top', function() {
    this.route('inner');
    this.route('loading');
  });
  this.route('loading');
});

export default Router;
