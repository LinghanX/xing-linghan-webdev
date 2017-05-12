import { Component, OnInit } from '@angular/core';

import { TestList } from './test-list';
import { TestListService } from '../test-list.service';
import { Observable } from 'rxjs/Observable';

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
    this.getTestLists();
  }

  getTestLists(): void {
    this.testListService.getTestLists()
      .subscribe(response => {
        console.log(response.json());
        this.testLists = response.json() as TestList[];
      });
  }

  addTestList(newTestList: string): void {
    this.testListService.addTestList(newTestList);
  }

  deleteTestList(testList: TestList): void {
    this.testListService.deleteTestList(testList);
  }
}
