// versiones anteriores de angular

// Importar los modulos del router de angular

// import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule} from "@angular/router"

//Importar componentes que tienen página exclusiva
import { HomeComponent } from "./home/home.component";
import { BlogComponent } from "./blog/blog.component";
import { FormularioComponent } from "./formulario/formulario.component";
import { PeliculasComponent } from "./peliculas/peliculas.component";
import { PaginaComponent } from "./pagina/pagina.component";


//Array de rutas
const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent},
    {path: 'blog', component: BlogComponent},
    {path: 'formulario', component: FormularioComponent},
    {path: 'peliculas', component: PeliculasComponent},
    {path: 'pagina-de-pruebas', component: PaginaComponent},
    {path: 'pagina-de-pruebas/:nombre/:apellidos', component: PaginaComponent},
];

// exportar el modulo de rutas
export const appRoutingProviders: any[] = [];
// export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
