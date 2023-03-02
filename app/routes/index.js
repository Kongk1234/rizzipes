import Route from '@ember/routing/route';

export default class IndexRoute extends Route {
  async model() {
    let response = await fetch('https://api.theredwiking.com/recipe/all');
    let parsed = await response.json();
    return parsed;
  }
}
