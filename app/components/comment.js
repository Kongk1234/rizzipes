import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';

export default class FormComponent extends Component {
    @tracked content = '';
    @service router;

    @action async onSubmit(e) {
        let id = window.location.href.split('=')[1];

        let cookies = document.cookie.split('; ');
        let result = cookies.filter((word) => word.includes('auth='));
        let token = result[0].split('auth=')[1];

        e.preventDefault();
        const data = {
            content: this.content,
        };

        const response = await fetch(
            `https://api.theredwiking.com/recipe/${id}/comment`,
            {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(data),
            }
        );
        if (response.ok) {
            console.log('yes');
        } else {
            console.log('fuck');
        }
    }

    @action async like() {
        let id = window.location.href.split('=')[1];
        let cookies = document.cookie.split('; ');
        let result = cookies.filter((word) => word.includes('auth='));
        let token = result[0].split('auth=')[1];

        let response = await fetch(
            `https://api.theredwiking.com/recipe/like/${id}`,{
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                }
            }
        );
        let parsed = await response.json();
        console.log(parsed);
    }
}
