import {Component, ViewChild} from '@angular/core';
import {MatButton} from "@angular/material/button";
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations: [
    trigger('slip', [
      state('left', style({textAlign: 'left'})),
      state('center', style({textAlign: 'center'})),
      state('right', style({textAlign: 'right'})),
      transition('* => *', [
        animate('.1s')
      ])
    ])
  ]
})
export class LoginComponent {
  @ViewChild('loginButton') loginButton!: MatButton;
  loginButtonAnimationState = 'left';
  username: string = '';
  password: string = '';
  showInvalidFields: boolean = false;

  onMouseEnter() {
    if(!this.isFormValid()) {
      this.showInvalidFields = true;
      this.slipButton();
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

  private slipButton() {
    const states = ['left', 'center', 'right', 'left'];
    this.loginButtonAnimationState = states[states.indexOf(this.loginButtonAnimationState) + 1];
    console.log(this.loginButtonAnimationState);
  }
}
