import { Injectable } from '@angular/core';
import { Article } from './models/article';
import { of, Observable } from 'rxjs';
import { delay } from 'rxjs/operators';

const Articles: Article[] = [
  {
    id: '1',
    title: 'angular1',
    content: 'code angular no1',
  },
  {
    id: '2',
    title: 'angular2',
    content: 'code angular no2 ',
  },
];
@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  constructor() {}

  getArticles(): Observable<Article[]> {
    return of(Articles).pipe(delay(500));
  }
}
