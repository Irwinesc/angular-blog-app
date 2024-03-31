import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Pelicula } from '../../models/pelicula';
import { SliderComponent } from '../slider/slider.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { PeliculaComponent } from '../pelicula/pelicula.component';
import { PeliculaService } from '../../services/peliculas.service';

@Component({
  selector: 'app-peliculas',
  standalone: true,
  imports: [CommonModule, SliderComponent, SidebarComponent, PeliculaComponent],
  templateUrl: './peliculas.component.html',
  styleUrl: './peliculas.component.css',
  providers: [PeliculaService]
})
export class PeliculasComponent implements OnInit {
  public title: string;
  // public peliculas: Array<any>;
  // public peliculas: Array<Pelicula>;
  public peliculas: Pelicula[];
  public favorita!: Pelicula;
  public fecha: any;

  constructor(
    private _peluclaService:PeliculaService
  ){

    this.title = "componente peliculas";
    this.peliculas = this._peluclaService.getPeliculas();
    this.fecha = new Date(2020, 8, 12);
  }

  ngOnInit(): void {
    // console.log(this.peliculas)
    console.log(this._peluclaService.holaMundo());
  }

  cambiarTitulo(){
    this.title = 'El titulo ha sido cambiado'
  }

  mostrarFavorita(event: any){
    this.favorita = event.pelicula;
  }
}
