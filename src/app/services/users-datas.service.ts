import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class UsersDatasService {

  constructor() {     
  }

  users(): { firstName: string; lastName: string; fullname: string; gender: string; }[]
  {
    return [
      { firstName: "Luis Miguel", lastName: "Natale", fullname:"Luis Miguel Natale", gender:"Male" },
      { firstName: "Michelina", lastName: "Beck", fullname:"Michelina Bech", gender:"Female" },
      { firstName: "Daniel", lastName: "Racine", fullname:"Daniel Racine", gender:"Male" },
      { firstName: "Fabien", lastName: "Beck", fullname:"Fabien Beck", gender:"Male" },
      { firstName: "Veronica Anastasia", lastName: "Natale", fullname:"Veronica Anastasia Natale", gender:"Female" },
      { firstName: "Emanuel David", lastName: "Natale", fullname:"Emanuel David Natale", gender:"Female" }
    ]
  }  
}

