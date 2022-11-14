import { Component, OnInit } from '@angular/core';
import { NguCarouselConfig } from '@ngu/carousel';
import { CarouselInterval } from '@ngu/carousel/lib/ngu-carousel/ngu-carousel';
import * as AOS from 'aos';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  apiData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  customOptions: OwlOptions = {
    loop: true,
    autoplay: true,
    center: true,
    dots: false,
    autoHeight: true,
    autoWidth: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  };
  constructor() {}

  ngOnInit(): void {
    AOS.init();
    // this.carouselTileItems.forEach((el) => {
    //   this.carouselTileLoad(el);
    // });
  }
}
