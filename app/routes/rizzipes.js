import Route from '@ember/routing/route';

export default class RizzipesRoute extends Route {
  queryParams = {
    id: {
      refreshModel: true,
    },
  };

  async model(params) {
    let response = await fetch(
      `https://api.theredWiking.com/recipe/category/${params.id}`
    );
    let parsed = await response.json();
    return parsed;
  }
}
