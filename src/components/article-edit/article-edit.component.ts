import { Component, OnInit } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { Article } from '../../models/article';
import { FormsModule } from '@angular/forms';
import { ArticleService } from '../../services/article.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Global } from '../../services/global';
import swal from 'sweetalert';
import { FileUploadComponent } from '../file-upload/file-upload.component';

@Component({
  selector: 'app-article-edit',
  standalone: true,
  imports: [SidebarComponent, FormsModule, HttpClientModule, CommonModule, FileUploadComponent],
  templateUrl: './article-edit.component.html',
  styleUrl: './article-edit.component.css',
  providers: [ArticleService]
})
export class ArticleEditComponent implements OnInit {

  public article!: Article;
  public status!: string;
  public url!: string;

  constructor(
    private _router: Router,
    private _route: ActivatedRoute,
    private _articleService: ArticleService,
    private _http: HttpClient
  ){
    this.article = new Article('', '', '', '', '');
    this.url = Global.url;
  }

  ngOnInit(): void {
    this.getArticle();
  }

  onSubmit() {
    this._articleService.update(this.article._id, this.article).subscribe(
      response => {
        if (response.status == 'success') {
          this.status = 'success';
          this.article = response.article;
          //Alerta
          swal(
            'Articulo editado!!',
            'El articulo se ha edtado correctamente',
            'success'
          );
          // console.log(response);
          this._router.navigate(['/blog/articulo', this.article._id])
        } else {
          this.status = 'error';
        }
      },
      error => {
        // console.log(error);
        this.status = 'error';
        swal(
          'Edición fallida!!',
          'El articulo no se ha edtado correctamente',
          'error'
        );
      }
    )
  }

  getArticle(){
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
}
