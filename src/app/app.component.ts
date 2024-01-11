import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { WindowComponent } from './components/window/window.component';
import { HeadComponent } from './components/head/head.component';
import { TrunkComponent } from './components/trunk/trunk.component';
import { LegsComponent } from './components/legs/legs.component';
import { FeetComponent } from './components/feet/feet.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,WindowComponent,HeadComponent,TrunkComponent,LegsComponent,FeetComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'anubis';
}
