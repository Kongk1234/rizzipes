import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class FormComponent extends Component {
  url = '';
  @tracked Username = '';
  @tracked Password = '';

    @action async onSubmit(){
        const data = {
            email: this.Username,
            password: this.Password
        }
        const response = await fetch (url,{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body: JSON.stringify(data),
        });
        if(response.ok){
            //route to homepage?
        }else{
            //create error message and route user back to login
        }
    }
}
