import { CommonModule, JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormArray, FormsModule,FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule,JsonPipe,CommonModule],
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class Register {
userRegisterForm : FormGroup
constructor(){
  this.userRegisterForm = new FormGroup({
    name:new FormControl('',[Validators.required,Validators.minLength(3)]),
    email:new FormControl(''),
    password:new FormControl(''),
    address:new FormGroup({
      city:new FormControl(''),
      street:new FormControl('')
    }),
    phoneNums : new FormArray([new FormControl('',[Validators.pattern('')])])

  })
}

get phoneNums (){
  return this.userRegisterForm.get('phoneNums') as FormArray
}
addNewPhone (){
  this.phoneNums.push(new FormControl('',[Validators.pattern('')]))
}
}
