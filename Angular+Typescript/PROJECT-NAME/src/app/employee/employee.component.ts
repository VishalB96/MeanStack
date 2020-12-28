import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  columnSpan: number = 2;
      imagePath: string = 'Tom.png';
      firstName: string = 'Tom';
      lastName: string = 'Hopkins';
      gender: string = 'Male';
      age: number = 20;
  

}
