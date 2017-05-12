import { Injectable } from '@angular/core';
import { TestList } from './test-list/test-list';
import { Http, Response } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

@Injectable()
export class TestListService {
  testLists: TestList[];

  constructor(private http: Http) {
  }

  getTestLists() {
    return this.http.get('/api/test');
  }

  addTestList(newTestList: string): void {
  }

  deleteTestList(testList: TestList): void {
  }
}
