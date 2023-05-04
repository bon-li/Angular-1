import { Component, Input, OnInit } from '@angular/core';
import { MYSONGS } from '../mySongs';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  mysongs = MYSONGS;

  onClick(i: number) {
    (<HTMLInputElement>document.getElementById('songArea')).style.display = 'flex';
    (<HTMLInputElement>document.getElementById('img')).src= this.mysongs[i].picture;
    (<HTMLDivElement>document.getElementById('info')).innerHTML = 
        `<strong>Song Name: </strong>${this.mysongs[i].songName}<br><br>
        <strong>Artist: </strong>${this.mysongs[i].artist}<br><br>
        <strong>Genre: </strong>${this.mysongs[i].genre}<br><br>
        <strong>Year Released: </strong>${this.mysongs[i].yearReleased}<br>`
  }

  constructor() { }

  ngOnInit(): void {
  }

}
