import Route from '@ember/routing/route';

export default class TestrouteRoute extends Route {
  model() {
    return ['hej', 'dig'];
  }
}
