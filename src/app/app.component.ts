import { Component } from '@angular/core';
import { Article } from './article/article.model';
import { FlagService } from './flag.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  articles: Article[];

  constructor(private flagService: FlagService) {
    this.articles = [
      new Article('Angular', 'http://angular.io', 0, 'user'),
      new Article('Fullstack', 'http://fullstack.io', 0, 'user'),
      new Article('ng book', 'http://ng-book.com/2', 0, 'user'),
      new Article('Hacker News', 'http://news.ycombinator.com',
                  0, 'administrator')
  ];
  }

  addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean {
    console.log(`Adding article title: ${title.value} and link: ${link.value}`);
    this.articles.push(new Article(title.value, link.value, 0));
    title.value = '';
    link.value = '';
    return false;
  }

  sortedArticles(): Article[] {
    this.articles.sort((a: Article, b: Article) => {
      if (a.isFlagged === true) {
        this.flagService.flagArticle(a);
        return 1;
      }
      if (b.isFlagged === true) {
        this.flagService.flagArticle(b);
        return -1;
      }
      if (b.votes > a.votes) { return 1; }
      if (b.votes < a.votes) { return -1; }
      return 0;
    }
    );
    // b.votes - a.votes);
    return this.articles;
  }
}
