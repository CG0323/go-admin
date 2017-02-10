import { Component, OnInit, Input } from '@angular/core';
import { Account } from '../../models/index';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-aside',
  styleUrls: ['./menu-aside.component.css'],
  templateUrl: './menu-aside.component.html'
})
export class MenuAsideComponent implements OnInit {
  @Input() private links: Array<any> = [];
  @Input() private user: string = "";

  constructor(public router: Router) {
    // getting the current url
  }

  public ngOnInit() {
    // TODO
  }

}
