import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute, Params, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [FormsModule, RouterLink, RouterLinkActive],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  
  public searchString!: String;
  
  constructor (
    private _router: Router,
    private _route: ActivatedRoute
  ){

  }

  ngOnInit(){}

  goSearch(){
    this._router.navigate(['/buscar', this.searchString]);
  }
}
