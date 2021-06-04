import { Component } from '@angular/core';
import { Tareas } from './persona.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'Listado de pendientes';
  ArregloTareas: Tareas[] = [new Tareas('Hola, aquí empiezan tus tareas pendientes')];

  idInput:number = 0;
  tareaImput:string = '';

  // tslint:disable-next-line: typedef
  agregarTarea(){
      let tarea1 = new Tareas(this.tareaImput);
      this.ArregloTareas.push(tarea1);
  }
  // tslint:disable-next-line: typedef__
  eliminarTarea(index:number){
      this.ArregloTareas.splice(index, 1);
}
}
