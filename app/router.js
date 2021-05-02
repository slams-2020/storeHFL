import EmberRouter from '@ember/routing/router';
import config from 'store/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('users', function() {
    this.route('add');
  });
  this.route('products', function() {
    this.route('add');
    this.route('update',{path:'update/:product_id'});
  });
  this.route('section', function() {
    this.route('add');
    this.route('update',{path:'update/:section_id'});
  });
  this.route('accueil');
  this.route('catalogue');
  this.route('profil');
  this.route('panier');

});
