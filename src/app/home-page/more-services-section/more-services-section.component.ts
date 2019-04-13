import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-more-services-section',
  templateUrl: './more-services-section.component.html',
  styleUrls: ['./more-services-section.component.css']
})
export class MoreServicesSectionComponent implements OnInit {
  AllMoreServices: moreServices[];
  constructor() { 
    this.AllMoreServices = [
      {
        Icon: 'flaticon-travel',
        Title: 'Air Air Freight',
        Description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.'
      },
      {
        Icon: 'flaticon-sea-ship-with-containers',
        Title: 'Ocean Freight',
        Description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.'
      },
      {
        Icon: 'flaticon-frontal-truck',
        Title: 'Ground Shipping',
        Description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.'
      },
      {
        Icon: 'flaticon-barn',
        Title: 'Warehousing',
        Description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.'
      },
      {
        Icon: 'flaticon-platform',
        Title: 'Storage',
        Description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.'
      },
      {
        Icon: 'flaticon-car',
        Title: 'Delivery Van',
        Description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.'
      }
    ]
  }

  ngOnInit() {
  }

}

export class moreServices {
    Icon: String;
    Title: String;
    Description: String;
}
