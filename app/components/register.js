import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';

export default class FormComponent extends Component {
  url = 'https://api.theredwiking.com/user';
  @tracked Username = '';
  @tracked Password = '';
  @tracked Email = '';
  @service router;

  @action async onSubmit(e) {
    e.preventDefault();
    const data = {
      username: this.Username,
      password: this.Password,
      email: this.Email,
    };
    const response = await fetch(this.url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    if (response.ok) {
      this.router.transitionTo('Index');
    } else {
      this.router.transitionTo('Login');
      //create error message and route user back to login
    }
  }
}
