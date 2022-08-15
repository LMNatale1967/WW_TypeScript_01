import { Component, Input } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  title = 'WW_TypeScript_01';
  language_TypeScript = "TypeScript";
  language_Angular = "Angular";
  language_Ionic = "Ionic";
  language_Firebase = "Firebase";

  async ngOnInit(): Promise<void> {
    const coordinates = await Geolocation.getCurrentPosition();
    console.log('Current position', coordinates);
  }

}
