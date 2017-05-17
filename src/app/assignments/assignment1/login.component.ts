import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'login',
  template: `
    <div class="container">
      <div class="row">
        <form class="form-signin">
          <h2 class="form-signin-heading">Please sign in</h2>
          <label for="inputEmail">Email address</label>
          <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required autofocus>
          <label for="inputPassword">Password</label>
          <input type="password"
                 id="inputPassword"
                 class="form-control" placeholder="Password" required>
          <div class="checkbox">
            <label>
              <input type="checkbox"
                     value="remember-me"> Remember me
            </label>
          </div>
          <button class="btn btn-lg btn-primary btn-block"
                  type="submit">Sign in</button>
          <button class="btn btn-lg btn-primary btn-block"
                  type="submit">Register</button>
        </form>
      </div>
    </div>
  `,
  styles: [`
    input {
      margin-bottom: 5px;
    }
  `]
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
}
