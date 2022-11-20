import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Donacion } from 'src/app/model/donacion';
import { DonacionService } from 'src/app/service/donacion.service';
import { Producto } from 'src/app/model/producto';
import { ProductoService } from 'src/app/service/producto.service';
@Component({
  selector: 'app-donacion-creaedita',
  templateUrl: './donacion-creaedita.component.html',
  styleUrls: ['./donacion-creaedita.component.css']
})
export class DonacionCreaeditaComponent implements OnInit {
  donacion: Donacion= new Donacion();
  mensaje: string = "";
  edicion: boolean = false;
  id: number=0;
  listaproducto: Producto[] = [];
  idproductoSeleccionado: number = 0;
  constructor(private donaService:DonacionService,
    private router: Router, 
    private route: ActivatedRoute,
    private productoService: ProductoService

  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.id = data ['id'];
      this.edicion = data ['id'] != null;
      this.init();
    });
    this.productoService.listar().subscribe(data => { this.listaproducto = data });

  }
  aceptar(): void {
    if (this.donacion.nomDonar.length > 0 && this.donacion.direccion.length > 0 && this.donacion.cantidad>0 &&
      this.idproductoSeleccionado>0) {
      let p = new Producto();
      p.id= this.idproductoSeleccionado;
      this.donacion.producto =p;  
      if (this.edicion) {
        this.donaService.modificar(this.donacion).subscribe(data => {
          this.donaService.listar().subscribe(data => {
            this.donaService.setLista(data);
          })
        })
      } else {

        this.donaService.insertar(this.donacion).subscribe(data => {
          this.donaService.listar().subscribe(data => {
            this.donaService.setLista(data);
          })
        })
      }
      this.router.navigate(['donacion']);
    } else {
      this.mensaje = "Complete los valores requeridos";
    }
  }

  init() {
    if (this.edicion) {
      this.donaService.listarId(this.id).subscribe(data => {
        this.donacion= data;
        console.log(data);
        this.idproductoSeleccionado= data.producto.id;
        
      })
    }
  }

}
