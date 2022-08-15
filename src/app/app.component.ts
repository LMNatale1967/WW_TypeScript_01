import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  @Input() firstName!: string;
  @Input() lastName!: string;
  @Input() fullName!: string;

  title = 'WW_TypeScript_01';


  displayMyFirstName(pFirstname:string, pEvent:Event): void {
    alert ("The firstname is : " + pFirstname);
    console.log(pEvent);
  }

  displayMyLastName(pLastName:string, pEvent:Event): void {
    alert ("The lastname is : " + pLastName);
    console.log(pEvent);
  }

  displayMyFullName(pFullName:string, pEvent:Event): void {
    alert ("The fullname is : " + pFullName);
    console.log(pEvent);
  }
}
