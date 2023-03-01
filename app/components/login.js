import Component from '@glimmer/component';
import {action} from '@ember/object';

export default class FormComponent extends Component
{
     url = '';
    @tracked Username='';
    @tracked Password='';

    get disableSubmit(){
        return !this.Username.length ||!this.Password.length
    }
    @action async onSubmit(){
        const data = {
            Username: this.Username,
            Password: this.Password
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