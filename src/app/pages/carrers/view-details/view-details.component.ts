import { Job } from 'src/app/@types';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CareerServiceService } from 'src/app/services/careers/career-service.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-view-details',
  templateUrl: './view-details.component.html',
  styleUrls: ['./view-details.component.scss'],
})
export class ViewDetailsComponent implements OnInit {
  job: Job = {} as Job;

  constructor(
    private route: ActivatedRoute,
    private firestore: AngularFirestore,
    private careerService: CareerServiceService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      let id = params['id'];
      this.getItem(id).subscribe((item: Job) => (this.job = item));
    });
  }

  getItem(itemId: string) {
    return this.firestore
      .collection('jobs')
      .doc(itemId)
      .valueChanges({ idField: 'jobId' }) as Observable<Job>;
  }
}
