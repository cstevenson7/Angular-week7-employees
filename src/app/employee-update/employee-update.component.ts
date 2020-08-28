import { Component, OnInit } from '@angular/core';
import { EmployeeCrudService } from '../services/employee-crud.service'
import { FormGroup,FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-employee-update',
  templateUrl: './employee-update.component.html',
  styleUrls: ['./employee-update.component.scss']
})
export class EmployeeUpdateComponent implements OnInit {

  data;
  public show:boolean = false;
​
  constructor( public crudService: EmployeeCrudService) { }
​
  employeeLastnameDisplay;
  employeeFirstNameDisplay;
  employeeAddressDisplay;
  employeeDOBDisplay;

  // update Reactive Form​
  updateForm = new FormGroup({
    employeeFirstName: new FormControl('', [Validators.required, Validators.minLength(2)]),
    employeeLastname: new FormControl('',[Validators.required,Validators.minLength(2)]),
    employeeAddress: new FormControl('',[Validators.required,Validators.minLength(5)]),
    employeeDOB: new FormControl('',[Validators.required])
  })
​
​
  get employeeFirstName() {return this.updateForm.get('employeeFirstName')};
​
  get employeeLastname() {return this.updateForm.get('employeeLastname')};
​
  get employeeAddress() { return this.updateForm.get('employeeAddress')};

  get employeeDOB() { return this.updateForm.get('employeeDOB')};
​
  // Getter Methods for input values from reactive form
  get employeeFirstNameValue() {return this.updateForm.get('employeeFirstName').value}
​
  get employeeLastnameValue() {return this.updateForm.get('employeeLastname').value}
​
  get employeeAddressValue() {return this.updateForm.get('employeeAddress').value}

  get employeeDOBValue() {return this.updateForm.get('employeeDOB').value}
  
  // Form handler for Employee Reactive Form
  onSubmit(id, employeeFirstName,employeeLastname,employeeAddress, employeeDOB){
    this.crudService.update_Employee(id,employeeFirstName,employeeLastname,employeeAddress,employeeDOB)
    console.log(`${this.updateForm.value.employeeFirstName}`)
  }
​
  // Method for toggle of update form (show/don't show)
  toggle(){
    this.show = !this.show;
  }

  delete(id){
    this.crudService.delete_Employee(id)
  }
​
​
  ngOnInit(): void {
    this.crudService.retrieve_Employee().subscribe(data => {
      this.data = data.map(rawData => {
        return {
          id: rawData.payload.doc.id,
          employeeFirstName: rawData.payload.doc.data()['employeeFirstName'],
          employeeLastname: rawData.payload.doc.data()['employeeLastname'],
          employeeAddress: rawData.payload.doc.data()['employeeAddress'],
          employeeDOB: rawData.payload.doc.data()['employeeDOB']
        }
      })
      console.log(this.data[0].id)
    })
  }
​
}
