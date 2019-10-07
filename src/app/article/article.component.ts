import { Component, OnInit, HostBinding, Input, RootRenderer } from '@angular/core';
import { Article } from './article.model';
import { FlagService } from '../flag.service';
import { componentFactoryName } from '@angular/compiler';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  @HostBinding('attr.class') cssClass = 'row';
  @Input() article: Article;
  @Input() index: number;

  constructor(private flagService: FlagService) {
    // article property is populated by the @Input
  }

  voteUp(): boolean {
    this.article.voteUp();
    return false;
}

  voteDown(): boolean {
    this.article.voteDown();
    if (this.flagService.lowestVotesTotal > this.article.votes) {
      this.flagService.lowestVotesTotal = this.article.votes;
    }
    return false;
}

  flagArticle(): boolean {
    this.flagService.flagArticle(this.article);
    return false;
  }

  ngOnInit() {
  }

}
