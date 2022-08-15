import { Component, OnInit } from '@angular/core';
import { UsersDatasService } from 'src/app/services/users-datas.service';

@Component({
  selector: 'app-my-second-component',
  templateUrl: './my-second-component.component.html',
  styleUrls: ['./my-second-component.component.scss']
})
export class MySecondComponentComponent implements OnInit {

  users:any;

  constructor(private usersDatas: UsersDatasService) {     
    this.users = usersDatas.users();
  }

  ngOnInit(): void {
    // alert("I'm on ngOnInit In app-my-second-component");
  }

  displayMyFullName(pFullName:string, pEvent:Event): void {
    alert ("The fullname is : " + pFullName);
    console.log(pEvent);
  }
}
