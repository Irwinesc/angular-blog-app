import { Component, OnInit } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { SliderComponent } from '../slider/slider.component';
import { ArticleService } from '../../services/article.service';
import { Article } from '../../models/article';
import { HttpClientModule } from '@angular/common/http';
import { ArticlesComponent } from '../articles/articles.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SidebarComponent, SliderComponent, HttpClientModule, ArticlesComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  providers: [ArticleService]
})
export class HomeComponent implements OnInit {
  public title: string;
  public articles!: Article[];
  
  constructor(
    private _articleService: ArticleService
  ) {
    this.title = 'Últimos articulos';
  }

  ngOnInit(): void {
    this._articleService.getArticles(true).subscribe(
      response => {
        if (response.articles){
          this.articles = response.articles;
          // console.log(this.articles);
        }else {}
        // console.log(response);
      },
      error => {
        console.log(error);
      }
    );
  }
}
