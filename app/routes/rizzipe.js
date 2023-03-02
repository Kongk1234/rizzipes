import Route from '@ember/routing/route';

export default class RizzipeRoute extends Route {
  async model() {
    let response = await fetch('https://api.theredwiking.com/recipe/1');
    let parsed = await response.json();
    return parsed;
  }
}
