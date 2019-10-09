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

  constructor(public flagService: FlagService) {
    this.articles = this.flagService.getArticles();

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
        return 1;
      }
      if (b.isFlagged === true) {
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
