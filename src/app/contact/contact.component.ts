import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, FormRecord, NonNullableFormBuilder, UntypedFormControl, UntypedFormGroup } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  title = "ContactUs";

  constructor(){
    //As of Angular 14, reactive forms are strictly typed by default.

    //strictly typed form
    const loginStrictly = new FormGroup({
      email: new FormControl(''),
      message: new FormControl(''),
    });

    //With strictly typed reactive forms, the below code does not compile, because there is no domain property on email.
    //const emailDomain = loginStrictly.value.email.domain;
    //login.value.email = 12;

    //untyped form -> UntypedFormGroup, UntypedFormArray
    const loginMixed = new UntypedFormGroup({
      email: new FormControl(''),
      message: new UntypedFormControl(''),
    });

    const loginUntype = new UntypedFormGroup({
      email: new FormControl(''),
      message: new FormControl(''),
    });

    const emailDomain1 = loginMixed.value.email.domain;
    const messageDomain = loginUntype.value.message.domain;
    loginMixed.value.email = 12;

    //Nullability 
    const email = new FormControl('angularrox@gmail.com',{nonNullable: true});
    email.reset();
    console.log(email.value); // null

    //Specifying an Explicit Type 
    const _email = new FormControl<string | null> (null);
    _email.setValue('angularrox@gmail.com'); // Error!
    console.log(email.value); // null


    //Optional Controls and Dynamic Groups
    interface LoginForm {
      email: FormControl<string>;
      password?: FormControl<string>;
    }
    const login = new FormGroup<LoginForm>({
        email: new FormControl('', {nonNullable: true}),
        password: new FormControl('', {nonNullable: true}),
    });
    login.removeControl('password');

    console.log(login);
    
    //In this form, we explicitly specify the type, which allows us to make the password control optional. 
    //TypeScript will enforce that only optional controls can be added or removed.


    const fb = new FormBuilder();
    const loginFormbuilder = fb.nonNullable.group({
        email: '',
        password: new FormControl(''),
    });
    loginFormbuilder.reset();
    console.log(loginFormbuilder);

    //https://angular.io/guide/typed-forms#formrecord
    const contact = new FormRecord({
      name1: new FormControl('apple'),
      name2: new FormControl('banana'),
    })

    let numbers = new FormRecord({
      bill: new FormControl('415-123-456')
    });
    numbers.addControl('bob', new FormControl('415-234-567'));
    numbers.removeControl('bill');
    
  }

}
