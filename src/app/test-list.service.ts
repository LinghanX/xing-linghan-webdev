import { Injectable } from '@angular/core';
import { TestList } from './test-list/test-list';

@Injectable()
export class TestListService {
  initialTestLists: TestList[];

  constructor() {
    this.initialTestLists = [
      new TestList("first test"),
      new TestList("second test"),
      new TestList("third test"),
      new TestList("fourth test")
    ]
  }

  getTestLists(): Promise<TestList[]> {
    return Promise.resolve(this.initialTestLists);
  }

  addTestList(newTestList: string): void {
    let testList: TestList = new TestList(newTestList);
    this.initialTestLists.push(testList);
  }

  deleteTestList(testList: TestList): void {
    let index : number = this.initialTestLists.indexOf(testList);
    if(index > -1){
      this.initialTestLists.splice(index, 1);
    }
  }
}
