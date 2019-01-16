import { Hobby } from './../models/hobbies.model';
import { Component, OnInit } from '@angular/core';
import { NgForm, FormControl, FormGroup, Validators } from '@angular/forms';
import { formArrayNameProvider } from '@angular/forms/src/directives/reactive_directives/form_group_name';

@Component({
  selector: 'app-hobbies',
  templateUrl: './hobbies.component.html',
  styleUrls: ['./hobbies.component.css']
})
export class HobbiesComponent implements OnInit {


  hobbiesForm: FormGroup;

  constructor() { }

  ngOnInit() {

    this.hobbiesForm = new FormGroup({
      name: new FormControl('', { validators: [Validators.required]}),
      hobby: new FormControl('', { validators: [Validators.required]})
    });
  }

  onSubmit(): void {
    if (this.hobbiesForm.invalid) {
      return;
    }

    const hobby: Hobby = {
      name: this.hobbiesForm.value.name,
      hobby: this.hobbiesForm.value.hobby
    };

    this.hobbiesForm.reset();
  }

}
