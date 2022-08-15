import { Component, OnInit } from '@angular/core';
import { UsersDatasService } from 'src/app/services/users-datas.service';

@Component({
  selector: 'app-my-third-component',
  templateUrl: './my-third-component.component.html',
  styleUrls: ['./my-third-component.component.scss']
})

export class MyThirdComponentComponent implements OnInit {

  users:any;

  constructor(private usersDatas: UsersDatasService) {     
    this.users = usersDatas.users();
  }

  ngOnInit(): void {
    // alert("I'm on ngOnInit In app-my-third-component");
  }

  displayMyGender(pGender:string, pEvent:Event): void {
    alert ("The gender is : " + pGender);
    console.log(pEvent);
  }

}
