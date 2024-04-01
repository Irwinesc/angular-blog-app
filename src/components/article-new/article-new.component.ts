import { Component, OnInit} from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { Article } from '../../models/article';
import { FormsModule } from '@angular/forms';
import { ArticleService } from '../../services/article.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { CommonModule } from '@angular/common';
import swal from 'sweetalert';

import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-article-new',
  standalone: true,
  imports: [SidebarComponent, FormsModule, HttpClientModule, CommonModule],
  templateUrl: './article-new.component.html',
  styleUrl: './article-new.component.css',
  providers: [ArticleService]
})
export class ArticleNewComponent implements OnInit {
  public article!: Article;
  public status!: string;

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
    private _http: HttpClient,
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

    this._http.post('http://localhost:3900/api/upload-image', formData)
      .subscribe(res => {
        console.log(res);
        alert('Uploaded Successfully.');
        this.data = res;
        this.image = this.data.image;
      })
  }

  asignar (){
    this.article.image = this.image;
  }
}
