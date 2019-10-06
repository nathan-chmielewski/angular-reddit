import { Component, OnInit, HostBinding, Input } from '@angular/core';
import { Article } from './article.model';
import { FlagService } from '../flag.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  @HostBinding('attr.class') cssClass = 'row';
  @Input() article: Article;

  constructor(private flagService: FlagService) {
    // article property is populated by the @Input
  }

  voteUp(): boolean {
    this.article.voteUp();
    return false;
}

  voteDown(): boolean {
    this.article.voteDown();
    return false;
}

  flagArticle(): boolean {
    console.log('flag Article method called');
    this.flagService.flagArticle(this.article);
    return false;
  }

  ngOnInit() {
  }

}
