import Route from '@ember/routing/route';

export default class UsersRoute extends Route {
  model() {
    return ['test1', 'test2', 'test3'];
  }
}
