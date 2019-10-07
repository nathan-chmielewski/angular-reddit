import { Injectable } from '@angular/core';
import { Article } from './article/article.model';

@Injectable({
  providedIn: 'root'
})
export class FlagService {
  lowestVotesTotal: number;

  constructor() {
    this.lowestVotesTotal = 0;
   }

  flagArticle(article: Article): void {
    console.log('In FlagService.flagArticle()');
    console.log(article.title);
    console.log(article.votes);
    article.votes = this.lowestVotesTotal - 1;
    this.lowestVotesTotal--;
   }
}
