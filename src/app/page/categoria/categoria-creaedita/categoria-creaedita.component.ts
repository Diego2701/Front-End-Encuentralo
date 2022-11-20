import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CategoriaService } from './../../../service/categoria.service';
import { Categoria } from 'src/app/model/categoria';
@Component({
  selector: 'app-categoria-creaedita',
  templateUrl: './categoria-creaedita.component.html',
  styleUrls: ['./categoria-creaedita.component.css']
})
export class CategoriaCreaeditaComponent implements OnInit {
  categoria: Categoria = new Categoria();
  mensaje: string = "";
  edicion: boolean = false;
  id: number=0;

  constructor(private CategoriaService: CategoriaService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.id = data ['id'];
      this.edicion = data ['id'] != null;
      this.init();
    });
  }
  aceptar(): void {
    if (this.categoria.id > 0 && this.categoria.nomCategoria.length > 0) {
      if (this.edicion) {
        this.CategoriaService.modificar(this.categoria).subscribe(data => {
          this.CategoriaService.listar().subscribe(data => {
            this.CategoriaService.setLista(data);
          })
        })
      } else {

        this.CategoriaService.insertar(this.categoria).subscribe(data => {
          this.CategoriaService.listar().subscribe(data => {
            this.CategoriaService.setLista(data);
          })
        })
      }
      this.router.navigate(['categoria']);
    } else {
      this.mensaje = "Complete los valores requeridos";
    }
  }

  init() {
    if (this.edicion) {
      this.CategoriaService.listarId(this.id).subscribe(data => {
        this.categoria = data;
      })
    }

  }
}






/*
function init() {
  throw new Error('Function not implemented.');
}*/