import Route from '@ember/routing/route';

export default class RizzipeRoute extends Route {
  async model(params) {
    let response = await fetch(
      `https://api.theredwiking.com/recipe/${params.id}`
    );
    let parsed = await response.json();
    return parsed;
  }
}
