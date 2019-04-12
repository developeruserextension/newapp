import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services-section',
  templateUrl: './services-section.component.html',
  styleUrls: ['./services-section.component.css']
})
export class ServicesSectionComponent implements OnInit {
  AllServices: Services[];
  constructor() { 
    this.AllServices = [
      {
        Name: 'Storage',
        Description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos tempore ullam minus voluptate libero.',
        Image: '../../../assets/images/img_1.jpg'
      },
      {
        Name: 'StorAir Transportsage',
        Description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos tempore ullam minus voluptate libero.',
        Image: '../../../assets/images/img_2.jpg'
      },
      {
        Name: 'Cargo Transports',
        Description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos tempore ullam minus voluptate libero.',
        Image: '../../../assets/images/img_3.jpg'
      },
      {
        Name: 'Cargo Ship',
        Description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos tempore ullam minus voluptate libero.',
        Image: '../../../assets/images/img_4.jpg'
      },
      {
        Name: 'Ware Housing',
        Description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos tempore ullam minus voluptate libero.',
        Image: '../../../assets/images/img_5.jpg'
      }
    ]
  }

  ngOnInit() {
  }

}

export class Services {
  Name: String;
  Description: String;
  Image: String;
}
