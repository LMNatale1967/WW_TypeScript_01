import { Component, Input, OnInit } from '@angular/core';
import { UsersDatasService } from 'src/app/services/users-datas.service';


@Component({
  selector: 'app-my-first-component',
  templateUrl: './my-first-component.component.html',
  styleUrls: ['./my-first-component.component.scss']
})

export class MyFirstComponentComponent implements OnInit {

  users: any;
  @Input() language_TypeScript!: String;


  constructor(private pUsersDatas: UsersDatasService) 
  {
    this.users = pUsersDatas.users();    
  }
  
  ngOnInit(): void {
    // alert("I'm on ngOnInit In app-my-first-component");
  }

  displayMyFirstName(pFirstName:string, pEvent:Event): void {
    alert ("The firstname is : " + pFirstName);
    console.log(pEvent);
  }
}

function input() {
  throw new Error('Function not implemented.');
}

