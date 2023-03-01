import Component from '@glimmer/component';
import {action} from '@ember/object';
import { tracked } from '@glimmer/tracking';
import Route from '@ember/routing/route';
import {inject} from '@ember/service';
export default class FormComponent extends Component
{
    url = 'https://api.theredwiking.com/auth/login';
    @tracked Username='';
    @tracked Password='';
    @tracked Email ='';
   


    @action async onSubmit(){
        const data = {
            username: this.Username,
            password: this.Password,
            email: this.Email
        }
        const response = await fetch (this.url,{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body: JSON.stringify(data),
        });
        if(response.ok){
            console.log("yes")
            inject().transitionTo('Index')
            //route to homepage?
        }else{
            console.log("no")
            //create error message and route user back to login
        }
    }
}