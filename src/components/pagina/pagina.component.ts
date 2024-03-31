import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router'; 
import { SliderComponent } from '../slider/slider.component';
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
  selector: 'app-pagina',
  standalone: true,
  imports: [SliderComponent, SidebarComponent],
  templateUrl: './pagina.component.html',
  styleUrl: './pagina.component.css'
})
export class PaginaComponent implements OnInit{
    
  public nombre!: string;
  public apellidos!: string;

  // @Input() paginaId!: string;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router
    ){} 

  ngOnInit(): void {

    this._route.params.subscribe((params: Params) => {
      console.log(params);
      this.nombre = params['nombre'];
      this.apellidos = params['apellidos']

    })
  }

  redireccion(){
    // this._router.navigate(['/pagina-de-pruebas', 'Irwin', 'Escalante']);
    this._router.navigate(['formulario']);
  }
}

