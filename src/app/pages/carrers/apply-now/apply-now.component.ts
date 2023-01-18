import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Component, OnInit } from '@angular/core';
import { Job } from 'src/app/@types';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-apply-now',
  templateUrl: './apply-now.component.html',
  styleUrls: ['./apply-now.component.scss'],
})
export class ApplyNowComponent implements OnInit {
  job: Job = {} as Job;

  constructor(
    private firestore: AngularFirestore,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    if (!localStorage.getItem('job')) {
      this.route.params.subscribe((params) => {
        let id = params['id'];
        this.getJob(id).subscribe((item: Job) => {
          this.job = item;
        });
      });
    } else {
      this.job = JSON.parse(localStorage.getItem('job') || '{}');
    }
  }

  getJob(itemId: string) {
    return this.firestore
      .collection('jobs')
      .doc(itemId)
      .valueChanges({ idField: 'jobId' }) as Observable<Job>;
  }
}
