import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { OldValidators } from './old.validators';

@Component({
  selector: 'app-passwordform',
  templateUrl: './passwordform.component.html',
  styleUrls: ['./passwordform.component.css']
})
export class PasswordformComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  form = new FormGroup({
      old:new FormControl('',Validators.required, OldValidators.invalidPassword),
      new:new FormControl('', Validators.required),
      confirm:new FormControl('', Validators.required)
    }, OldValidators.passwordsDonotMatch)
  
  get old(){
    return this.form.get('old');
  }

  get new() {
    return this.form.get('new');
  }

  get confirm() {
    return this.form.get('confirm');
  }
  change() {
    console.log(OldValidators.passwordsDonotMatch);
  }
}
