import { Component, OnInit } from '@angular/core';

import { TestList } from './test-list';
import { TestListService } from '../test-list.service';

@Component({
  selector: 'app-test-list',
  templateUrl: './test-list.component.html',
  styleUrls: ['./test-list.component.css'],
  providers: [TestListService]
})

export class TestListComponent implements OnInit {
  testLists: TestList[];

  constructor(private testListService: TestListService) {
  }

  ngOnInit() {
    this.testListService.getTestLists()
      .then(testLists => this.testLists = testLists);
  }

  addTestList(newTestList: string): void {
    this.testListService.addTestList(newTestList);
  }

  deleteTestList(testList: TestList): void {
    this.testListService.deleteTestList(testList);
  }
}
