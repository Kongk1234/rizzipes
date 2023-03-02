import EmberRouter from '@ember/routing/router';
import config from 'ember-quickstart/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('Index');
  this.route('Users');
  this.route('Rizzipe');
  this.route('Login');
  this.route('Register');
  this.route('testroute');
  this.route('rizzipe');
});
