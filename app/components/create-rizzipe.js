import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class FormComponent extends Component {
  @tracked title = '';
  @tracked category = '';
  @tracked duration = '';
  @tracked steps = '';
  @tracked ingredients = '';

  @action async onSubmit(e) {
    e.preventDefault();
    const data = {
      title: this.title,
      categoryid: parseInt(this.category),
      duration: parseInt(this.duration),
      steps: this.steps,
      ingredients: this.ingredients,
    };

    var myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
    myHeaders.append(
      'Authorization',
      'Bearer ' +
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RAdGVzdC5jb20iLCJpZCI6MSwiaWF0IjoxNjc3NzU4MzIxLCJleHAiOjE2Nzc3NjE5MjF9.O7ENu14ZWFtlWmAOE25w30GqCrjcQ7kIJ2qB6tmVZ9I'
    );

    const response = await fetch('https://api.theredwiking.com/recipe/', {
      method: 'POST',
      mode: 'cors',
      headers: myHeaders,
      credentials: 'same-origin',
      body: JSON.stringify(data),
    });
    if (response.ok) {
      console.log('ska vi ikke det');
    } else {
      console.log('fuck');
    }
  }
}
