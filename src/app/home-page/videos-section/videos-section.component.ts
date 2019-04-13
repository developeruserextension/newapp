import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-videos-section',
  templateUrl: './videos-section.component.html',
  styleUrls: ['./videos-section.component.css']
})
export class VideosSectionComponent implements OnInit {
  videoUrl = 'https://vimeo.com/channels/staffpicks/93951774';
  imageUrl = '../../../assets/images/hero_bg_2.jpg';
  constructor() { }

  ngOnInit() {
  }

}
