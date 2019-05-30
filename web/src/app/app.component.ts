import { Component } from '@angular/core';
import { Player } from 'src/models/player';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';


model = new Player(18, 'Dr IQ');

submitted = false;

onSubmit() { this.submitted = true; }

newPlayer() {
  this.model = new Player(42, '');
}

}
