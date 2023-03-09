import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';

let rizzipeImage = "";

export default class FormComponent extends Component {
  @tracked title = '';
  @tracked duration = '';
  @tracked steps = '';
  @tracked ingredients = '';
  @service router;

  @action baseEncode(element) {
    let file = element.target.files[0];
    let reader = new FileReader();
    reader.onloadend = function() {
        rizzipeImage = reader.result;
    }
    reader.readAsDataURL(file);
  }

  @action async onSubmit(e) {
    e.preventDefault();
    const data = {
      title: this.title,
      categoryid: parseInt(document.getElementById("category").value),
      duration: parseInt(this.duration),
      steps: this.steps,
      ingredients: this.ingredients.split(", "),
      image: rizzipeImage
    };
    let cookies = document.cookie.split('; ');
    let result = cookies.filter((word) => word.includes('auth='));
    let token = result[0].split('auth=')[1];

    console.log(data);
    var myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
    myHeaders.append('Authorization', 'Bearer ' + token);

    // const response = await fetch('http://172.16.115.36:3000/recipe/', {
    //   method: 'POST',
    //   mode: 'cors',
    //   headers: myHeaders,
    //   credentials: 'same-origin',
    //   body: JSON.stringify(data),
    // });
    // if (response.ok) {
    //   this.router.transitionTo('Index');
    // } else {
    //   console.log('fuck');
    // }
  }
}