import { Component, OnInit, OnDestroy } from '@angular/core';
import { BreadcrumbService } from '../../services/breadcrumb.service';

@Component({
  selector: 'students',
  styleUrls: ['./students.component.css'],
  templateUrl: './students.component.html'
})
export class StudentsComponent implements OnInit, OnDestroy {
  constructor(private breadServ: BreadcrumbService) {
    // TODO
  }

  public ngOnInit() {
    // setttings the header for the home
    this.breadServ.set({
      display: true,
      header: '学员列表',
      levels: [
        {
          icon: 'user',
          link: ['/students'],
          title: '学员列表'
        }
      ]
    });
  }

  public ngOnDestroy() {
    // removing the header
    this.breadServ.clear();
  }

}
