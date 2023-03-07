import Component from '@glimmer/component';

export default class NavigationComponent extends Component {
  get showRizzipe() {
    let cookies = document.cookie.split('; ');
    let result = cookies.filter((word) => word.includes('auth='));
    if (result.length > 0) {
      return true;
    } else {
      return false;
    }
  }
}
