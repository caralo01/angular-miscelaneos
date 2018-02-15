import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styles: []
})
export class UsuarioComponent implements OnInit {

  constructor(private _router: ActivatedRoute) {
    this._router.params.subscribe( params => {
        console.log("Ruta Padre");
        console.log(params);
    })
  }

  ngOnInit() {
  }

}
