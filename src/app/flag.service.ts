import { Injectable } from '@angular/core';
import { Article } from './article/article.model';

@Injectable({
  providedIn: 'root'
})
export class FlagService {
  articles: Article[];
  lowestVotedArticle: Article;

  constructor() {
    this.articles = [
      new Article('Angular', 'http://angular.io', 0, 'user'),
      new Article('Fullstack', 'http://fullstack.io', 0, 'user'),
      new Article('ng book', 'http://ng-book.com/2', 0, 'user'),
      new Article('Hacker News', 'http://news.ycombinator.com',
                  0, 'administrator'),
      new Article('Techmeme', 'http://techmeme.com', 0, 'administrator'),
      new Article('Daring Fireball', 'http://daringfireball.net', 0, 'administrator')
    ];
    this.lowestVotedArticle = this.articles[this.articles.length - 1];
   }

   getArticles() {
     return this.articles;
   }

   flagArticle(article: Article, indexToRemove: number): void {
     // Remove the article from the list
     this.articles.splice(indexToRemove, 1);
     // Add the article to the end of the list
     this.articles.push(article);

     // Set article votes to be the lowest in the list
     // Once flagged, votes can be cast but will not change article position
     if (!article.isFlagged) {
      article.votes = this.lowestVotedArticle.votes - 1;
      this.lowestVotedArticle = article;
      article.isFlagged = true;
     }

   }
}
