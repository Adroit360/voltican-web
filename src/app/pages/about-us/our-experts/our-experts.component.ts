import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-our-experts',
  templateUrl: './our-experts.component.html',
  styleUrls: ['./our-experts.component.scss'],
})
export class OurExpertsComponent implements OnInit {
  modalStatus = false;
  constructor() {}

  ngOnInit(): void {}

  onShowExpert() {
    this.modalStatus = !this.modalStatus;
  }
}
