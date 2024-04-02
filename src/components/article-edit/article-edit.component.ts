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

import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-article-edit',
  standalone: true,
  imports: [SidebarComponent, FormsModule, HttpClientModule, CommonModule],
  templateUrl: './article-edit.component.html',
  styleUrl: './article-edit.component.css',
  providers: [ArticleService]
})
export class ArticleEditComponent implements OnInit {

  public article!: Article;
  public status!: string;
  public url!: string;

  public data!: any;
  public image!: string;
  public fileName: any;
  /*------------------------------------------
    --------------------------------------------
    Declare Form
    --------------------------------------------
    --------------------------------------------*/
  myForm = new FormGroup({
    file: new FormControl('', [Validators.required]),
    fileSource: new FormControl('', [Validators.required])
  });

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

  /**
   * Write code on Method
   *
   * @return response()
   */
  get f() {
    return this.myForm.controls;
  }

  /**
   * Write code on Method
   *
   * @return response()
   */
  onFileSelected(event: any) {

    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.fileName = file.name;
      this.myForm.patchValue({
        fileSource: file
      });
    }
  }

  /**
   * Write code on Method
   *
   * @return response()
   */
  subir() {
    const formData = new FormData();

    const fileSourceValue = this.myForm.get('fileSource')?.value;

    if (fileSourceValue !== null && fileSourceValue !== undefined) {
      formData.append('file0', fileSourceValue);
    }
    this._articleService.upload(formData).subscribe(
      response => {
        if (response.status === 'success'){
        this.status = 'success'
        console.log(response);
        alert('Uploaded Successfully.');
        this.data = response;
        this.image = this.data.image;
        }
        
      })
  }

  asignar (){
    this.article.image = this.image;
  }
}
