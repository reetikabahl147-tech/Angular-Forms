import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-form.html',
  styleUrl: './reactive-form.css',
})
export class ReactiveForm {
  form1: FormGroup<any> = new FormGroup({
    name: new FormControl('', [Validators.required]),
    age: new FormControl('', [Validators.required, Validators.max(80)]),
    gender: new FormControl('', [Validators.required]),
  });

  nestedForm: FormGroup<any> = new FormGroup({
    name: new FormControl('', [Validators.required]),
    age: new FormControl('', [Validators.required, Validators.max(80)]),
    gender: new FormControl('', [Validators.required]),
    address: new FormGroup({
      city: new FormControl(''),
      country: new FormControl('')
    })
  })

  dynamicForm: FormGroup<any> = new FormGroup({
    name: new FormControl('', [Validators.required]),
    age: new FormControl('', [Validators.required, Validators.max(80)]),
    gender: new FormControl('', [Validators.required]),
    address: new FormArray([new FormControl('')])
  })

  submitForm1() {
    console.log(this.form1.value);
  }

  submitNestedForm() {
    console.log(this.nestedForm.value);
  }

  submitDynamicForm() {
    console.log(this.dynamicForm.value);
  }

  get addressLines() {
    return this.dynamicForm.get('address') as FormArray;
  }

  addNewAddressLine() {
    this.addressLines.push(new FormControl(''));
  }

  updateUserData() {
    this.nestedForm.patchValue({
      name: 'Reetika',
      address: {
        city: "Prayagraj",
        country: "India"
      }
    })
  }
}
