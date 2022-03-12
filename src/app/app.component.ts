import { Component } from '@angular/core';
import { Tareas } from './tareas.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  ArregloTareas: Tareas[] = [
    new Tareas('Hola, aquí empiezan tus tareas pendientes'),
  ];

  tareaImput: string = '';

  // tslint:disable-next-line: typedef
  agregarTarea() {
    this.tareaImput === ''
      ? alert('No puedes dejar el campo vacío')
      : this.ArregloTareas.push(new Tareas(this.tareaImput));
    this.tareaImput = '';
  }

  // tslint:disable-next-line: typedef__
  eliminarTarea(index: number) {
    this.ArregloTareas.splice(index, 1);
  }
}
