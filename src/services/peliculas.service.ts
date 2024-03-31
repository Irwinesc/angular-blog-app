import { Injectable } from "@angular/core";
import { Pelicula } from "../models/pelicula";

@Injectable()
export class PeliculaService {

    public peliculas: Pelicula[];

    constructor() {
        this.peliculas = [
            new Pelicula('Spiderman 4', 2017, 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSfsbJjQlmPIQ6v4tHP_m8wlVB6LafjMLGgDmimLmqJ6uuVnpTT'),
            new Pelicula('Los vengadores Endgame', 2019, 'https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2019/03/vengadores%202.jpg?tf=3840x'),
            new Pelicula('Batman vs Superman', 2016, 'https://m.media-amazon.com/images/I/81GpJfqOTmL._AC_SY500_.jpg'),
            new Pelicula('Leo Shark y Giodzilla', 2024, 'https://miweb.com')
            // {year: 2017, title: "Spiderman 4", image: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSfsbJjQlmPIQ6v4tHP_m8wlVB6LafjMLGgDmimLmqJ6uuVnpTT'},
            // {year: 2019, title: "Los vengadores Endgame", image: 'https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2019/03/vengadores%202.jpg?tf=3840x'},
            // {year: 2016, title: 'Batman vs Superman', image: 'https://m.media-amazon.com/images/I/81GpJfqOTmL._AC_SY500_.jpg'},
            // {year: 2024, title: 'Leo Shark y la Gio Cocodrilo', image:"#"}
        ];
    }

    holaMundo() {
        return 'Hola mundo desde el servicio de angular!!!'
    }

    getPeliculas() {
        return this.peliculas;
    }

}