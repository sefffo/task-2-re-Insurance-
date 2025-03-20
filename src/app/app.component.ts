import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MainForm1Component } from "./mainForm/main-form1/main-form1.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatSlideToggleModule, MainForm1Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'task-2';
}
