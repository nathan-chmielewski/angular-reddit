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
    if (!article.isFlagged) {
      article.votes = this.lowestVotesTotal - 1;
      this.lowestVotesTotal--;
      // console.log(this.lowestVotesTotal);
      article.isFlagged = true;
    }
    // } else if (article.votes !== this.lowestVotesTotal) {
    //   article.votes = this.lowestVotesTotal - 1;
    //   this.lowestVotesTotal--;
    // }
   }
}
