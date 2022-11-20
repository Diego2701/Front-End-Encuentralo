import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/model/producto';
import { ProductoService } from 'src/app/service/producto.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { VendedorService } from 'src/app/service/vendedor.service';
import { NotificacionService } from 'src/app/service/notificacion.service';
import { Vendedor } from 'src/app/model/vendedor';
import { Notificacion } from 'src/app/model/notificacion';
import { Categoria } from 'src/app/model/categoria';
import { CategoriaService } from 'src/app/service/categoria.service';
@Component({
  selector: 'app-producto-creaedita',
  templateUrl: './producto-creaedita.component.html',
  styleUrls: ['./producto-creaedita.component.css']
})
export class ProductoCreaeditaComponent implements OnInit {
  producto: Producto = new Producto();
  mensaje: string = "";
  edicion: boolean = false;
  id: number=0;
  listaVendedor: Vendedor[] = [];
  idVendedorSeleccionado: number = 0;
  listaNotifica: Notificacion[] = [];
  idNotifiSeleccionado: number = 0;
  listaCategoria: Categoria[]=[];
  idCategoriaSeleccionado: number = 0;
  
  constructor(private ProductoService: ProductoService,
     private router: Router, 
     private route: ActivatedRoute,
     private vendedorService: VendedorService ,
     private notifiService: NotificacionService ,
     private categoriaService: CategoriaService) { }

  ngOnInit(): void {

    this.route.params.subscribe((data: Params) => {
      this.id = data ['id'];
      this.edicion = data ['id'] != null;
      this.init();
    });
    this.vendedorService.listar().subscribe(data => { this.listaVendedor = data });
    this.notifiService.listar().subscribe(data => { this.listaNotifica = data });
    this.categoriaService.listar().subscribe(data=>{this.listaCategoria=data});
  }

  aceptar(): void {
    if (this.producto.id > 0 && this.producto.desProducto.length > 0 && this.producto.marcaProducto.length>0 &&
      this.idCategoriaSeleccionado>0 && this.idNotifiSeleccionado>0 &&
      this.idVendedorSeleccionado>0) {
      let v = new Vendedor();
      let n =new Notificacion();
      let c = new Categoria();
      v.id= this.idVendedorSeleccionado;
      n.id= this.idNotifiSeleccionado;
      c.id= this.idCategoriaSeleccionado;
      this.producto.vendedor= v;
      this.producto.notificacion=n;
      this.producto.categoria=c;
      if (this.edicion) {
        this.ProductoService.modificar(this.producto).subscribe(data => {
          this.ProductoService.listar().subscribe(data => {
            this.ProductoService.setLista(data);
          })
        })
      } else {

        this.ProductoService.insertar(this.producto).subscribe(data => {
          this.ProductoService.listar().subscribe(data => {
            this.ProductoService.setLista(data);
          })
        })
      }
      this.router.navigate(['producto']);
    } else {
      this.mensaje = "Complete los valores requeridos";
    }
  }

  init() {
    if (this.edicion) {
      this.ProductoService.listarId(this.id).subscribe(data => {
        this.producto = data;
        console.log(data);
        this.idVendedorSeleccionado= data.vendedor.id;
        this.idNotifiSeleccionado=data.notificacion.id;
        this.idCategoriaSeleccionado=data.categoria.id;
      })
    }

  }

}
