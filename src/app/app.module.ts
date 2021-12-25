import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EmployeesComponent } from './employees/employees.component';

import { FormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { DetailsOfEmployeeComponent } from './details-of-employee/details-of-employee.component';
import { SendmailComponent } from './sendmail/sendmail.component';
import { MessagesComponent } from './messages/messages.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    FooterComponent,
    DetailsOfEmployeeComponent,
    SendmailComponent,
    MessagesComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
