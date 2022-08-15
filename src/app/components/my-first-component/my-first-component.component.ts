import { Component, OnInit } from '@angular/core';
import { UsersDatasService } from 'src/app/services/users-datas.service';


@Component({
  selector: 'app-my-first-component',
  templateUrl: './my-first-component.component.html',
  styleUrls: ['./my-first-component.component.scss']
})

export class MyFirstComponentComponent implements OnInit {

  users:any;

  constructor(private usersDatas: UsersDatasService) {
    this.users = usersDatas.users();
  }
  
  ngOnInit(): void {
    // alert("I'm on ngOnInit In app-my-first-component");
  }

  displayMyFirstName(pFirstName:string, pEvent:Event): void {
    alert ("The firstname is : " + pFirstName);
    console.log(pEvent);
  }
}
