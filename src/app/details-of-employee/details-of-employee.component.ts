import { style } from '@angular/animations';
import { Component, OnInit, Input } from '@angular/core';
import { Employee } from '../employee';


@Component({
  selector: 'app-details-of-employee',
  templateUrl: './details-of-employee.component.html',
  styleUrls: ['./details-of-employee.component.css']
})
export class DetailsOfEmployeeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input() employee?: Employee;
  status : boolean = false;

  shownow()
    {this.status = !this.status}
  
}
