import { Component,NgModule } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../../services/dataService/data-service';



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

  constructor(
    private _formBuilder: FormBuilder,
    private http: HttpClient,
    private map: DataService
  ) {
    //console.log('http ',http);
    //http.get('').subscribe(
    //  res => console.log('>>',res), err =>{ console.log('<<',err)}
    //
    //);
  }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }
  completeStep1(){
    console.log('working', this.info);
    //console.log('province', this.province)
    //console.log('district', this.district)
  }

  completeStep2(){
    this.info.latitude = this.map.map.latitude;
    this.info.longitude = this.map.map.longitude;
    console.log('working', this.info);
  }
}
