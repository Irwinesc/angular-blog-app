import { Component, OnInit } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { Article } from '../../models/article';
import { FormsModule } from '@angular/forms';
import { ArticleService } from '../../services/article.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { CommonModule } from '@angular/common';
import swal from 'sweetalert';
import { FileUploadComponent } from '../file-upload/file-upload.component';

@Component({
  selector: 'app-article-new',
  standalone: true,
  imports: [SidebarComponent, FormsModule, HttpClientModule, CommonModule, FileUploadComponent],
  templateUrl: './article-new.component.html',
  styleUrl: './article-new.component.css',
  providers: [ArticleService]
})
export class ArticleNewComponent implements OnInit {
  public article!: Article;
  public status!: string;

  constructor(
    private _router: Router,
    private _route: ActivatedRoute,
    private _articleService: ArticleService,
    // private _http: HttpClient,
  ) {
    this.article = new Article('', '', '', '', '');
  }

  ngOnInit(): void {
    
  }

  onSubmit() {
    this._articleService.create(this.article).subscribe(
      response => {
        if (response.status == 'success') {
          this.status = 'success';
          this.article = response.article;
          //Alerta
          swal(
            'Articulo creado!!',
            'El articulo se ha creado correctamente',
            'success'
          );

          // console.log(response);
          this._router.navigate(['/blog'])
        } else {
          this.status = 'error';
        }
      },
      error => {
        // console.log(error);
        this.status = 'error';
      }
    )
  }

}
