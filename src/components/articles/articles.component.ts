import { Component, Input } from '@angular/core';
import { Article } from '../../models/article';
import { Global } from '../../services/global';
import { CustomDatePipe } from '../../pipes/custom-date.pipe';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-articles',
  standalone: true,
  imports: [CustomDatePipe, RouterLink],
  templateUrl: './articles.component.html',
  styleUrl: './articles.component.css'
})
export class ArticlesComponent {
  
  public url!: string;
  @Input() articles!:Article[];

  constructor () {
    this.url = Global.url;
  }
}
