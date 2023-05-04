import { Component, Input, OnInit } from '@angular/core';
import { libon } from '../libon';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  @Input() footerInfo!: libon;

  ngOnInit(): void {
  }

}
