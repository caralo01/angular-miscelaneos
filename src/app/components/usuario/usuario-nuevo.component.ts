import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-usuario-nuevo',
  template: `
    <p>
      usuario-nuevo works!
    </p>
  `,
  styles: []
})
export class UsuarioNuevoComponent implements OnInit {

  constructor(private _router: ActivatedRoute) {
    this._router.parent.params.subscribe( params => {
        console.log("Ruta Hijo Nuevo");
        console.log(params);
    })
  }

  ngOnInit() {
  }

}
