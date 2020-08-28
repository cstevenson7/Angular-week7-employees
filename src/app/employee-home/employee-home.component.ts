import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import{ EmployeeCrudService } from '../services/employee-crud.service'

@Component({
  selector: 'app-employee-home',
  templateUrl: './employee-home.component.html',
  styleUrls: ['./employee-home.component.scss']
})

export class EmployeeHomeComponent implements OnInit {

  employeeLastnameDisplay;
  employeeFirstNameDisplay;
  employeeAddressDisplay;
  employeeDOBDisplay;

  //Employee Reactive Form
    employeeForm = new FormGroup({
    employeeFirstName: new FormControl('',[Validators.required, Validators.minLength(2)]),
    employeeLastname: new FormControl('',[Validators.required,Validators.minLength(2)]),
    employeeAddress: new FormControl('',[Validators.required,Validators.minLength(5)]),
    employeeDOB: new FormControl('',[Validators.required])      

  })
  // getter methods
  get employeeFirstName() {return this.employeeForm.get('employeeFirstName')}

  get employeeLastname() {return this.employeeForm.get('employeeLastname')}

  get employeeAddress() {return this.employeeForm.get('employeeAddress')}

  get employeeDOB() {return this.employeeForm.get('employeeDOB')}


  // Form handler for the Reactive Form
  //using the crud service to send the form data to the database
  onSubmit(){
    this.crudService.create_Employee(this.employeeForm.value.employeeFirstName, this.employeeForm.value.employeeLastname, this.employeeForm.value.employeeAddress,this.employeeForm.value.employeeDOB,  )
    console.log(`${this.employeeForm.value.employeeAddress}`)
  }


  constructor( public crudService: EmployeeCrudService) { }

  ngOnInit(): void {
  }

}
