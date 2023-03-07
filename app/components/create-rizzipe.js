import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';

export default class FormComponent extends Component {
  @tracked title = '';
  @tracked category = '';
  @tracked duration = '';
  @tracked steps = '';
  @tracked ingredients = '';
  @service router;

  @action async onSubmit(e) {
    e.preventDefault();
    const data = {
      title: this.title,
      categoryid: parseInt(this.category),
      duration: parseInt(this.duration),
      steps: this.steps,
      ingredients: this.ingredients,
    };
    let cookies = document.cookie.split('; ');
    let result = cookies.filter((word) => word.includes('auth='));
    let token = result[0].split('auth=')[1];

    var myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
    myHeaders.append('Authorization', 'Bearer ' + token);

    const response = await fetch('https://api.theredwiking.com/recipe/', {
      method: 'POST',
      mode: 'cors',
      headers: myHeaders,
      credentials: 'same-origin',
      body: JSON.stringify(data),
    });
    if (response.ok) {
      this.router.transitionTo('Index');
    } else {
      console.log('fuck');
    }
  }
}
