import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../components/header/header.component';
import { SliderComponent } from '../components/slider/slider.component';
import { SidebarComponent } from '../components/sidebar/sidebar.component';
import { FooterComponent } from '../components/footer/footer.component';
import { PeliculasComponent } from '../components/peliculas/peliculas.component';
import { PeliculaComponent } from '../components/pelicula/pelicula.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, SliderComponent, SidebarComponent, FooterComponent, PeliculasComponent, PeliculaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-proyect';
}
