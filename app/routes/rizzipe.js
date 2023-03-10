import Route from '@ember/routing/route';

export default class RizzipeRoute extends Route {
  async model(params) {
    let response = await fetch(
      `https://api.theredWiking.com/recipe/${params.id}`
    );
    let parsed = await response.json();
    parsed[0].image = "data:image/png;base64," + parsed[0].image;
    console.log(parsed);

    return parsed;
  }
}
