import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return [
      {
        id: 1,
        name: 'Carl Yaz',
        title: 'Lead Engineer',
      },
      {
        id: 2,
        name: 'Jeff Horn',
        title: 'Lead BAD-ASS',
      },
      {
        id: 3,
        name: 'Chris Payne; AKA: C_PAYNE',
        title: 'Director of nothing',
      },
    ],[params.id - 1];
  }
});
