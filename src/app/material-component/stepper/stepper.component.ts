import { Component,NgModule } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss']
})
export class StepperComponent {
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  provinces: Array<string> = ['Sindh', 'Punjab', 'Balochistan', 'Khyber Pakhtunkhwa'];
  districts: Array<string> = ['Sukkur', 'Larkana', 'Jamshoro', 'Badin'];
  divisions: Array<string> = ['1', '2', '3', '4', '5', '6'];
  subDivisions: Array<string> = ['1', '2', '3', '4', '5', '6'];
  ucs: Array<string> = ['1', '2', '3', '4', '5', '6'];
  wards: Array<string> = ['1', '2', '3', '4', '5', '6'];
  blocks: Array<string> = ['1', '2', '3', '4', '5', '6'];

  info: Object  = {
    country: 'Pakistan'
  };

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }
  completeStep1(){
    console.log('working', this.info)
    //console.log('province', this.province)
    //console.log('district', this.district)
  }
}
