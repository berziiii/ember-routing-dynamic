import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
});

Router.map(function () {
  this.route('about');
  this.route('team', function() {
    this.route('leadership');
    this.route('leader', { path: '/leadership/:id' });
    this.route('engineering');
    this.route('engineer', { path: '/engineering/:id' });
  });
  this.route('contact', function() {
    this.route('boston');
    this.route('nyc');
  });
  this.route('products');
  this.route('product', { path: '/products/:product_id' });
});

export default Router;
