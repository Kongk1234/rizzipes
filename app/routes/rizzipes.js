import Route from '@ember/routing/route';

export default class RizzipesRoute extends Route {
  queryParams = {
    id: {
      refreshModel: true,
    },
  };

  async model(params) {
    let response = await fetch(
      `http://172.16.115.36:3000/recipe/category/${params.id}`
    );
    let parsed = await response.json();
    return parsed;
  }
}
