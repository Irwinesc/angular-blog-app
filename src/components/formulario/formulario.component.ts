import { Component } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { SliderComponent } from '../slider/slider.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [SidebarComponent, SliderComponent, FormsModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {
  public user: any;
  public campo!: string;
  public campo2!: string;

  constructor() {
    this.user = {
      nombre: '',
      apellidos: '',
      bio: '',
      genero: ''
    };
  }

  ngOnsubmit() {

  }

  onSubmit() {
    alert('Formulario enviado con éxito!')
    console.log(this.user);
  }

  hasDadoClick() {
    alert('Has dado click!!!')
  }

  hasSalido() {
    alert('Has salido!!!');
  }

  enter() {
    alert('Has dado enter!!!');
  }
}
