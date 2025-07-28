import { Component } from '@angular/core';
import { signIn } from 'aws-amplify/auth';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'serendipity-FE';
  formFields = {
  signUp : {
    given_name : { order:1, placeholder: 'First Name',label: 'First Name',name: 'given_name' },
    family_name : {order:2, placeholder: 'Last Name' ,label: 'Last Name',name: 'family_name' },
    email : { order:3 ,placeholder: 'Email' ,label: 'Email' },
    password : { order:4 ,placeholder: 'Password' },
    confirm_password : {order:5, placeholder: 'Confirm Password' }
  }
}
}
