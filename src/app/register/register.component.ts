import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  onClick = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.createForm();

  }

  createForm() {
    this.registerForm = this.formBuilder.group( {
      firstName: ['', [Validators.required]],
      lastName:  ['', [Validators.required]],
      email: ['', [Validators.required]],
      number: ['', [Validators.required]],
    });

  }



}
