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

  addTestList(newTestList: string): Observable<any> {
    const headers = new Headers({ 'Content-Type': 'application/json'});
    const options = new RequestOptions({
      headers: headers
    });

    const body = { message: newTestList };

    return this.http.post('api/test', body, options)
      .catch((error: any) => Observable
        .throw( error.json().error || 'Server error'));
  }

  deleteTestList(id: string) {
    return this.http.delete('api/test/' + id);
  }
}
