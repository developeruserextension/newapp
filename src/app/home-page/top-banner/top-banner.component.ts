import { Component, OnInit } from '@angular/core';
import AOS from 'aos';

@Component({
  selector: 'app-top-banner',
  templateUrl: './top-banner.component.html',
  styleUrls: ['./top-banner.component.css']
})
export class TopBannerComponent implements OnInit {

  imageUrl:any = '../../../assets/images/hero_bg_1.jpg';
  constructor() { 
    
  }

  ngOnInit() {
    AOS.init({
      duration: 400,
      })
  }

}
