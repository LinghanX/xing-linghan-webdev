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
      .subscribe(
        testLists => this.testLists = testLists as TestList[],
        err => console.log(err)
      );
  }

  addTestList(newTestList: string): void {
    this.testListService.addTestList(newTestList)
      .subscribe(
        response => this.testLists.push(response as TestList),
        error => console.log(error)
      );
  }

  /**
   *
   * @param testList is a TestList, however here the type
   *        is set `any` since we want to visit the `_id`
   *        parameter
   */
  deleteTestList(testList: any): void {
    this.testListService.deleteTestList(testList._id)
      .subscribe(
        response => {
          if(response.ok){
            let newTestLists = this.testLists.filter(
              item => item.message != testList.message
            );
            this.testLists = newTestLists;
          }
        },
        error => console.log(error.json())
      );
  }
}
