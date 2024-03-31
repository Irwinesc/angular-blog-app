import { Component, OnInit } from '@angular/core';
import { SliderComponent } from '../slider/slider.component';
import { ArticlesComponent } from '../articles/articles.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { ArticleService } from '../../services/article.service';
import { Article } from '../../models/article';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [SliderComponent, ArticlesComponent, SidebarComponent, HttpClientModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
  providers: [ArticleService]
})
export class SearchComponent implements OnInit {
  
  public articles!: Article[];
  public search!: string;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _articleSerivce: ArticleService
  ){}

  ngOnInit(): void {
    this._route.params.subscribe(params => {
      var search = params['search'];
      this.search = search

      this._articleSerivce.search(search).subscribe(
        response => {
          // console.log(response)
          if (response.articles){
            this.articles = response.articles;
          }
        },
        error => {
          // console.log(error);
          this.articles = [];
        }
      )
    })
  }
}
