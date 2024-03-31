import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderComponent } from '../slider/slider.component';
import { PeliculasComponent } from '../peliculas/peliculas.component';
import { Pelicula } from '../../models/pelicula';

@Component({
  selector: 'app-pelicula',
  standalone: true,
  imports: [CommonModule, SliderComponent, PeliculasComponent],
  templateUrl: './pelicula.component.html',
  styleUrl: './pelicula.component.css'
})
export class PeliculaComponent {
  @Input()
  pelicula!: Pelicula;
  @Output() MarcarFavorita = new EventEmitter(); 
  
  constructor(){}

  ngOnInit(): void{}

  seleccionar(event: any, pelicula: any){
    this.MarcarFavorita.emit({
      pelicula: pelicula
    })
  }
}
