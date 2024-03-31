import { Component, OnInit } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { SliderComponent } from '../slider/slider.component';
import { ArticleService } from '../../services/article.service';
import { Article } from '../../models/article';
import { Router, ActivatedRoute, Params, RouterLink, RouterLinkActive } from '@angular/router'; 
import { HttpClientModule } from '@angular/common/http';
import { CustomDatePipe } from '../../pipes/custom-date.pipe';
import { Global } from '../../services/global';
import swal from 'sweetalert';

@Component({
  selector: 'app-article',
  standalone: true,
  imports: [SidebarComponent, SliderComponent, HttpClientModule, CustomDatePipe, RouterLink, RouterLinkActive],
  templateUrl: './article.component.html',
  styleUrl: './article.component.css',
  providers: [ArticleService]
})
export class ArticleComponent implements OnInit{
  
  public article!: Article;
  public url!: string;

  constructor(
    private _articleService: ArticleService,
    private _route: ActivatedRoute,
    private _router: Router
  ){
    this.url = Global.url;
  }

  ngOnInit(): void {
    this._route.params.subscribe(params => {
      let id = params['id'];

      this._articleService.getArticle(id).subscribe(
        response => {
          // console.log(response);
          if(response.article){
            this.article = response.article;
          } else {
            this._router.navigate(['/home']);
          }
        },
        error => {
          // console.log(error);
          this._router.navigate(['/home']);
        }
      );

    });
  }

  delete(id:any){

    swal({
      title: "¿Estás Seguro?",
      text: "Una vez borrado, no podrás recuperarlo!",
      icon: "warning",
      buttons: [true, true],
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        this._articleService.delete(id).subscribe(
          response => {
            swal("El articulo ha sido borrado!", {
              icon: "success",
            })
            this._router.navigate(['/blog']);
          }, error => {
            console.log(error);
            this._router.navigate(['/blog']);
          }
        )
      } else {
        swal("Tranquilo, nada se ha borrado!");
      }
    });
  }
}
