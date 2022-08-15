import { Component, Input } from '@angular/core';
import { async } from '@angular/core/testing';
import { Geolocation } from '@capacitor/geolocation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  @Input() public firstName!: string;
  @Input() public lastName!: string;
  @Input() public fullName!: string;

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

  // const printCurrentPosition = async() => {
  //   const coordinates = await Geolocation.getCurrentPosition();
  //   console.log('Current position', coordinates);
  // }
}
