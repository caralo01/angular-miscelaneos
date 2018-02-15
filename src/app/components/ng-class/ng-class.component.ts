import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-class',
  template: `
    <div [ngClass]="alerta" class="alert" role="alert">
      This is a primary alert with <a href="#" class="alert-link">an example link</a>. Give it a click if you like.
    </div>

    <button class="btn btn-primary" (click)= "alerta = 'alert-primary'">
      Primary
    </button>

    <button class="btn btn-success" (click)= "alerta = 'alert-success'">
      Danger
    </button>

    <br><br>

    <h3 [ngClass]=" { 'text-danger': propiedades.danger, 'text-info': !propiedades.danger } ">
      Hola Mundo
    </h3>

    <button class="btn" [ngClass]="{ 'btn-danger': propiedades.danger, 'btn-info': !propiedades.danger }" (click)= "propiedades.danger = !propiedades.danger">
      Cambiar
    </button>

    <br><br>

    <h3>Proceso Asíncrono</h3>

    <button class="btn btn-primary" (click)="ejecutar()" [disabled] = "cargando" >
      <i  class="fa" [ngClass]="{ 'fa-save': !cargando, 'fa-refresh fa-spin': cargando}"></i>
      <span *ngIf="!cargando">Guardar cambios</span>
      <span *ngIf="cargando">Espere por favor</span>
    </button> 
  `,
  styles: []
})
export class NgClassComponent implements OnInit {


  alerta:string = "alert-danger";
  cargando:boolean = false;


  propiedades:Object = {
    danger: false
  };

  constructor() { }

  ngOnInit() {
  }

  ejecutar(){
    this.cargando = true;

    setTimeout( () => this.cargando = false, 3000);
  }

}
