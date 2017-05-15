import { Injectable } from '@angular/core';
import { TestList } from './test-list/test-list';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class TestListService {
  constructor(private http: Http) {
  }

  getTestLists(): Observable<TestList[]> {
    return this.http.get('/api/test')
      .map((res: Response) => res.json() as TestList[])
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  addTestList(newTestList: string): Observable<TestList> {
    const body = { message: newTestList };

    return this.http.post('api/test', body)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  deleteTestList(id: number): Observable<any> {
    return this.http.delete('api/test/' + id)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }
}