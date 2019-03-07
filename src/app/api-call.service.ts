import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { map } from 'rxjs/operators';
// import { environment } from '../../environments/environment';

@Injectable()
export class ApiCallService {
  uri = 'http://0.0.0.0:8000';
  constructor(
    private http: HttpClient,
    public sanitizer: DomSanitizer
    ) { }

    getAll() {
      return this.http
      .get<any[]>(this.uri)
      .pipe(map(data => data));
    }

    getSymbol(key) {
      return this.http
      .get<any[]>(this.uri + '/' + key)
      .pipe(map(sData => {
        return sData;
      }));
    }
}
