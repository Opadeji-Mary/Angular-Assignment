import { Component } from '@angular/core';

interface objectsignup{
  username: string,
  email:string,
  password:string,
}

@Component({
  selector: 'app-signuppage',
  standalone: true,
  imports: [],
  templateUrl: './signuppage.component.html',
  styleUrl: './signuppage.component.css'
})
export class SignuppageComponent {

    public username =""
    public email = ""
    public password = ""
  

  onSubmit() {
    console.log('Form submitted!');
    console.log('Username:', this.username);
    console.log('Email:', this.email);
    console.log('Password:', this.password);
}
