import { Component, Input } from '@angular/core';
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

  async ngOnInit(): Promise<void> {
    const coordinates = await Geolocation.getCurrentPosition();
    console.log('Current position', coordinates);
  }

}
