import { EmployeeService } from './../../shared/employee.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  constructor(private service: EmployeeService,
              private firestore: AngularFirestore) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if(form!=null)
      form.resetForm();
    this.service.formData = {
      id: null,
      fullName: "",
      empCode: "",
      position: "",
      mobile: "",
    }
  }

  onSubmit(form: NgForm) {
    let data = form.value;
    this.firestore.collection('employees').add(data);
    this.resetForm(form);
  }

}
