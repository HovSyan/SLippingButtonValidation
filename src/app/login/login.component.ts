import { Component } from '@angular/core';
import {FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  usernameFormControl = new FormControl('', Validators.required);
  password: string = '';
  showInvalidFields: boolean = false;

  onMouseEnter() {
    if(!this.isFormValid()) {
      this.showInvalidFields = true;
    }
  }

  isFormValid() {
    return this.isUsernameValid() && this.isPasswordValid();
  }

  isUsernameValid() {
    return this.username != '';
  }

  isPasswordValid() {
    return this.password != '';
  }
}
