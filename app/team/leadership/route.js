import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return [
      {
        id: 1,
        name: 'Esther Cordova',
        title: 'Chancellor of All',
      },
      {
        id: 2,
        name: 'Brian B-dawg',
        title: 'Custodial master',
      },
      {
        id: 3,
        name: 'Jacob Hereforrrrrrd',
        title: 'From Texas',
      },
    ];
  }
});
