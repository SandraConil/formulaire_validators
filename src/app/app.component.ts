import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

import { emailValidator } from './email-validator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'formulaire_validation';
 
user : User | undefined ;

constructor(public formBuilder : FormBuilder){}

userForm = this.formBuilder.group({
  username: ['', [Validators.required]],
  
  address: this.formBuilder.group({
      street: ['', [Validators.required]],
      city: ['', [Validators.required]],
      zipCode: ['', [Validators.required, Validators.maxLength(4)]]
 }),
 credentials: this.formBuilder.group({
  email: ['', [Validators.required, emailValidator]]
})

});



onSubmit(){
  console.log(this.userForm.value)
  }
  
}

