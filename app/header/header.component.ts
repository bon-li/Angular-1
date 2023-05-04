import { Component, Input, OnInit } from '@angular/core';
import { libon } from '../libon';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  @Input() headerInfo!: libon;

  ngOnInit(): void {
  }

}
