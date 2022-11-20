import { Component, OnInit } from '@angular/core';
import { Oferta } from 'src/app/model/oferta';
import { OfertaService } from 'src/app/service/oferta.service';
import { Producto } from 'src/app/model/producto';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ProductoService } from 'src/app/service/producto.service';
@Component({
  selector: 'app-oferta-creaedita',
  templateUrl: './oferta-creaedita.component.html',
  styleUrls: ['./oferta-creaedita.component.css']
})
export class OfertaCreaeditaComponent implements OnInit {
oferta: Oferta= new Oferta();
mensaje: string = "";
edicion: boolean = false;
id: number=0;
listaproducto: Producto[] = [];
idproductoSeleccionado: number = 0;

  constructor(private OfertaService: OfertaService,
    private router: Router, 
    private route: ActivatedRoute,
    private productoService: ProductoService ) { }

  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.id = data ['id'];
      this.edicion = data ['id'] != null;
      this.init();
    });
    this.productoService.listar().subscribe(data => { this.listaproducto = data });

  }
  aceptar(): void {
    if (this.oferta.id > 0 && this.oferta.desOferta > 0 && this.oferta.precioOferta>0 &&
      this.idproductoSeleccionado>0) {
      let p = new Producto();
      p.id= this.idproductoSeleccionado;
      this.oferta.producto =p;  
      if (this.edicion) {
        this.OfertaService.modificar(this.oferta).subscribe(data => {
          this.OfertaService.listar().subscribe(data => {
            this.OfertaService.setLista(data);
          })
        })
      } else {

        this.OfertaService.insertar(this.oferta).subscribe(data => {
          this.OfertaService.listar().subscribe(data => {
            this.OfertaService.setLista(data);
          })
        })
      }
      this.router.navigate(['oferta']);
    } else {
      this.mensaje = "Complete los valores requeridos";
    }
  }

  init() {
    if (this.edicion) {
      this.OfertaService.listarId(this.id).subscribe(data => {
        this.oferta= data;
        console.log(data);
        this.idproductoSeleccionado= data.producto.id;
        
      })
    }

  }


}
