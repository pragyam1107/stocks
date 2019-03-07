import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ApiCallService } from './api-call.service';
import { HttpClient } from '@angular/common/http';
import _ from 'lodash';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  restItems: any; search; showDialog; dataDialog;
  sortedItems: any;
  url = 'http://0.0.0.0:8000';

  constructor (
    private http: HttpClient,
    private apiService: ApiCallService,
     ) {}

  ngOnInit() {
    this.showDialog = false;
    this.dataDialog = '';
    this.search = '';
    this.getRestItems();
  }

  getRestItems(): void {
    this.apiService.getAll()
      .subscribe(
        restItems => {
          restItems = _.orderBy(restItems, ['high'], ['desc']);
          this.restItems = restItems;
          // console.log(this.restItems);
        }
      );
  }

  openSymbol(x) {
    this.showDialog = ! this.showDialog;
    this.dataDialog = x;
    // console.log(x);
  }

  searchSymbol (keyword, skip, limit) {
    // this.search = keyword;
    if (keyword !== '') {
      this.apiService.getSymbol(keyword)
      .subscribe(
        symbolData => {
          // console.log(symbolData);
          this.restItems = symbolData;
          return this.restItems;
        }
      );
    } else {
      this.getRestItems();
    }
  }
}
