import { Component, OnInit } from '@angular/core';
import { MOCKED_PAGES } from './mock-pages';
import { Page } from '../models/page';
import { Bookmark } from '../models/bookmark';
import { Folder } from '../models/folder';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  title = 'header';

  pages: Page[];
  page: Page;
  folders: Folder[];

  constructor() { }

  ngOnInit() {
    this.pages = MOCKED_PAGES;
    this.page = this.pages[0];
    this.folders = this.page.folders;
  }

}
