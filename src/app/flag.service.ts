import { Injectable } from '@angular/core';
import { Article } from './article/article.model';

@Injectable({
  providedIn: 'root'
})
export class FlagService {

  constructor() { }

  flagArticle(index: number): void {
    console.log('In FlagService.flagArticle()');
    console.log(index);
   }
}
