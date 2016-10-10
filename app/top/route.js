import Ember from 'ember';
import delay from 'ember-delay/delay';

export default Ember.Route.extend({
  model() {
    this.setTimeout(() => {
      return 'inner';
    }, 3000);
  }
});
