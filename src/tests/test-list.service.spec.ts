import { TestBed, inject, async } from '@angular/core/testing';
import {
  HttpModule,
  Http,
  Response,
  ResponseOptions,
  XHRBackend
} from '@angular/http';
import { MockBackend } from '@angular/http/testing';

import { TestListService } from '../app/test-list.service';
import { TestList } from '../app/test-list/test-list';

describe('TestListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [
        { provide: XHRBackend, useClass: MockBackend},
        TestListService
      ]
    });
  });

  describe('getTestLists()', () => {
    it('should return all the test-lists',
      inject(
        [TestListService, XHRBackend], (testListService, mockBackend) => {
          const mockResponse =
            [
              {"_id":"1","message":"hello world","__v":0},
              {"_id":"2","message":"testing1","__v":0},
              {"_id":"3","message":"hello","__v":0},
              {"_id":"4","message":"try another approach","__v":0}
            ];

          mockBackend.connections.subscribe((connection) => {
            connection.mockRespond(new Response(new ResponseOptions({
              body: JSON.stringify(mockResponse)
            })));
          });

          testListService.getTestLists().subscribe((testLists) => {
            expect(testLists.length).toBe(4);
            expect(testLists[0].message).toEqual('hello world');
          });
        }));
  });
});
