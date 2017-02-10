import { Component, OnInit, OnDestroy } from '@angular/core';
import { BreadcrumbService } from '../../services/breadcrumb.service';

@Component({
  selector: 'teachers',
  styleUrls: ['./teachers.component.css'],
  templateUrl: './teachers.component.html'
})
export class TeachersComponent implements OnInit, OnDestroy {
  public date: Date = new Date();

  constructor(private breadServ: BreadcrumbService) {
    // TODO
  }

  public ngOnInit() {
    // setttings the header for the home
    this.breadServ.set({
      // description: '教师列表',
      display: true,
      header: '教师列表',
      levels: [
        {
          icon: 'user',
          link: ['/teachers'],
          title: '教师列表'
        }
      ]
    });
  }

  public ngOnDestroy() {
    // removing the header
    this.breadServ.clear();
  }

}
