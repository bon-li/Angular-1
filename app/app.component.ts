import { Component } from '@angular/core';
import { libon } from './libon';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'libonA3';
  bio:libon = {
    studentNum:991358694,
    name: "Bonita Li",
    login: "libon",
    campus: "Trafalgar",
    assignmentTitle: "Assignment #3"
  };
}
