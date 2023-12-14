import { Component, Input } from '@angular/core';
import { CommonModule, IMAGE_LOADER, ImageLoaderConfig } from '@angular/common';
import { NgOptimizedImage } from '@angular/common';

const myCustomLoader = (config: ImageLoaderConfig) => {
  let url = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/${config.src}`;
  let queryParams = '';
  if (config.loaderParams?.['roundedCorners']) {
    queryParams='?mask=corners&corner-radius=5';
  }
  return url + queryParams;
};

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss'],
  providers:[
    {
      provide: IMAGE_LOADER,
      useValue: myCustomLoader,
    }
  ]
})
export default class AboutUsComponent {
  todayDate = new Date();

  test= '';

  @Input() query?: string; // this will come from the query params
  @Input() id?: string; // this will come from the path params
  @Input() title?: string; // this will come from the data
  @Input() searchData?: any; // this will come from the resolved data


  // @Input() query?: string; 
  // @Input('id') pathId?: string; 
  // @Input('title') dataTitle?: string;
  // @Input('searchData') resolvedData?: any; 


  constructor(){   
  }

  ngOnInit(){
    console.log(this.query, this.id, this.title, this.searchData);
  }
}
