import { Injectable } from '@angular/core';
import { TestList } from './test-list/test-list';
import {
  Http,
  Response,
  Headers,
  RequestOptions
} from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class TestListService {
  constructor(private http: Http) {
  }

  getTestLists(): Observable<TestList[]> {
    return this.http.get('/api/test')
      .map((res:Response) => res.json() as TestList[])
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  addTestList(newTestList: string) {
    console.log('addTestList is called');

    const body = { message: newTestList };

    return this.http.post('api/test', body)
      .subscribe(result => console.log(result));
  }

  deleteTestList(id: string) {
    return this.http.delete('api/test/' + id)
      .subscribe(result => console.log(result));
  }
}
