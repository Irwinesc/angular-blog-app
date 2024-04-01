import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Article } from '../../models/article';

@Component({
  selector: 'app-file-upload',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, HttpClientModule],
  templateUrl: './file-upload.component.html',
  styleUrl: './file-upload.component.css'
})
export class FileUploadComponent {
  public fileName: any;
  public article!: Article;

  public data!: any;
  public image!: string;
  /*------------------------------------------
    --------------------------------------------
    Declare Form
    --------------------------------------------
    --------------------------------------------*/
  myForm = new FormGroup({
    file: new FormControl('', [Validators.required]),
    fileSource: new FormControl('', [Validators.required])
  });

  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(private http: HttpClient) { }

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
  submit() {
    const formData = new FormData();

    const fileSourceValue = this.myForm.get('fileSource')?.value;

    if (fileSourceValue !== null && fileSourceValue !== undefined) {
      formData.append('file0', fileSourceValue);
    }

    this.http.post('http://localhost:3900/api/upload-image', formData)
      .subscribe(res => {
        console.log(res);
        alert('Uploaded Successfully.');
        this.data = res;
        this.image = this.data.image;
      })
  }
}
