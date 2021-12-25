import { Component, OnInit,Input } from '@angular/core';
import { Employee } from '../employee';
import { EmployeesComponent } from '../employees/employees.component';
import { MessageService } from '../sendmail-message.service';

@Component({
  selector: 'app-sendmail',
  templateUrl: './sendmail.component.html',
  styleUrls: ['./sendmail.component.css']
})
export class SendmailComponent implements OnInit {

  constructor(private messageService: MessageService) { }

  ngOnInit(): void {
  }
  @Input() employee?: Employee;

  sendmail(){
    
    this.messageService.add(`Your mail to ${this.employee?.fname} ${this.employee?.lname} was sent!`);
  }

}
