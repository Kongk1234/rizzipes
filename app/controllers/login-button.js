import Controller from '@ember/controller';
import Ember from 'ember';

export default Ember.Controller.extend({
  isExpanded: false,

  actions: {
    toggleBody() {
      this.toggleProperty('isExpanded');
    },
  },
});
