import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-sign-in-rf',
  templateUrl: './sign-in-rf.component.html',
  styleUrls: ['./sign-in-rf.component.css'],
})
export class SignInRfComponent implements OnInit {
  signInForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
    rememberMe: new FormControl(false),
  });
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  // this.signInForm = this.fb.group({
  //   username: [
  //     '',
  //     Validators.compose([
  //       Validators.required,
  //       Validators.minLength(6),
  //       Validators.pattern(/^[a-z]{6,32}$/i),
  //     ]),
  //   ],
  //   password: [
  //     '',
  //     Validators.compose([
  //       Validators.required,
  //       Validators.minLength(6),
  //       Validators.pattern(/^(?=.*[!@#$%^&*]+)[a-z0-9!@#$%^&*]{6,32}$/),
  //     ]),
  //   ],
  //   rememberMe: false,
  // });
}
