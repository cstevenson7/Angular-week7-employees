import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class EmployeeCrudService {

  constructor(public afs:AngularFirestore) { }

  //Returns a collection from reference and adds information to the firestore database
  //returns a promise of out newly create data response
  
    create_Employee(employeeFirstName, employeeLastname, employeeAddress, employeeDOB){
      return this.afs.collection('employee').add({
        employeeFirstName: employeeFirstName,
        employeeLastname: employeeLastname,
        employeeAddress: employeeAddress,
        employeeDOB: employeeDOB
      })
    }
  
  
    /**
     * 
     * No params needed
     * returns an Observable of the document from the  firebase
     * collection and exposes the document ID and the array index of the single
     * document( Employees - Fred, Barney or Wilma)
     */
    retrieve_Employee(){
      return this.afs.collection('employee').snapshotChanges();
    }
    
    /**
    * 
    * @param employeeId 
    *  * 
    * @param employeeFirstName 
    * @param employeeLastname 
    * @param employeeAddress
    * @param employeeDOB
    * 
    * Update given todo by its documentId and place newly
    * updates infrmation inside of the databse
    */
    //looking at the specific document 
    update_Employee(employeeId,employeeFirstName,employeeLastname, employeeAddress, employeeDOB){
      this.afs.doc('employee/' + employeeId).update({
        employeeFirstName: employeeFirstName,
        employeeLastname: employeeLastname,
        employeeAddress: employeeAddress,
        employeeDOB: employeeDOB
      })
    }
  
  /**
   * 
   * @param employeeId 
   * Delete given todo by its documetnID
   */
      delete_Employee(employeeId){
        this.afs.doc('employee/' + employeeId).delete()
  
      }
  
}
