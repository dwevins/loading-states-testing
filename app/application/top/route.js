import Ember from 'ember';
import delay from 'ember-delay/delay';

export default Ember.Route.extend({
  model() {
    return delay(3000).then(() => {
      return 'inner';
    })
  }
});
