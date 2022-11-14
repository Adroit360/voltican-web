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
  headerInfo = [
    {
      title: 'Data Analytics & Modern BI ',
      info: 'The insights that can be drawn from good analytics will help your business to properly understand industry and market data and place you in a better position ',
    },
    {
      title: 'Big Data Engineering',
      info: 'We employ cost-effective, innovative forms of information processing for enhanced insight and decision-making.',
    },
    {
      title: 'Strategy & Architecture ',
      info: 'Following widely accepted and proven data strategy standards, Voltican has put together custom strategies for various companies that address your specific organizational needs',
    },
    {
      title: ' Data Science & ML ',
      info: 'At Voltican, we help your company employ the best tools and technology for the application of AI and ML in your business processes',
    },
  ];

  constructor() {}

  ngOnInit(): void {
    AOS.init();
    // this.carouselTileItems.forEach((el) => {
    //   this.carouselTileLoad(el);
    // });
  }
}
