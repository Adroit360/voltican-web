import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
@Component({
  selector: 'app-our-experts',
  templateUrl: './our-experts.component.html',
  styleUrls: ['./our-experts.component.scss'],
})
export class OurExpertsComponent implements OnInit {
  modalStatus = false;
  constructor() {}

  ngOnInit(): void {
    AOS.init();
    window.scroll(0, 0);
  }

  onShowExpert() {
    this.modalStatus = !this.modalStatus;
  }
}
