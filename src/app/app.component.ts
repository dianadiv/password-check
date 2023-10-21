import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'password-check';

  password = '';
  showPassword = false;
  colors = ["grey", "grey", "grey"];

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  reset() {
    this.password = '';
    this.colors = ["grey", "grey", "grey"]
  }

  checkPassword() {
    if (this.password.length === 0) {
      this.colors = ["grey", "grey", "grey"];
    } else if (this.password.length < 8) {
      this.colors = ["red", "red", "red"];
    } else if (/[a-zA-Z]/.test(this.password) && /[0-9]/.test(this.password) && /[!"№;%:?*()_+=\-*&^%$#@!|":}{\][\';\/.<>,]/.test(this.password)) {
      this.colors = ["green", "green", "green"];
    } else if (/[a-zA-Z]/.test(this.password)
        && /[0-9]/.test(this.password) || /[a-zA-Z]/.test(this.password)
        && /[!"№;%:?*()_+=\-*&^%$#@!|":}{\][\';\/.<>,]/.test(this.password) || /[0-9]/.test(this.password)
        && /[!"№;%:?*()_+=\-*&^%$#@!|":}{\][\';\/.<>,]/.test(this.password)) {
      this.colors = ["yellow", "yellow", "grey"];
    } else {
      this.colors = ["green", "grey", "grey"];
    }
  }
}
