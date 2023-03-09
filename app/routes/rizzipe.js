import Route from '@ember/routing/route';

export default class RizzipeRoute extends Route {
  async model(params) {
    let response = await fetch(
      `http://172.16.115.36/recipe/${params.id}`
    );
    let parsed = await response.json();
    console.log(parsed);
    return parsed;
  }
}
