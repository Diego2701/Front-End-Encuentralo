import { OfertaService } from 'src/app/service/oferta.service';
import { DetalleVentaService } from './../../../service/detalle-venta.service';
import { Oferta } from './../../../model/oferta';
import { DetalleVenta } from '../../../model/detalle-venta';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';


@Component({
  selector: 'app-detalle-venta-creaedita',
  templateUrl: './detalle-venta-creaedita.component.html',
  styleUrls: ['./detalle-venta-creaedita.component.css']
})
export class DetalleVentaCreaeditaComponent implements OnInit {
  venta: DetalleVenta = new DetalleVenta();
  mensaje: string = "";
  edicion: boolean = false;
  id: number=0;
  listaOferta: Oferta[] = [];
  idOfertaSeleccionado: number = 0;
  
  constructor(private ventaService: DetalleVentaService,
    private router: Router, 
    private route: ActivatedRoute,
    private ofertaService: OfertaService) { }

  ngOnInit(): void {
    
    this.route.params.subscribe((data: Params) => {
      this.id = data ['id'];
      this.edicion = data ['id'] != null;
      this.init();
    });
    this.ofertaService.listar().subscribe(data => { this.listaOferta = data });
    
  }
  aceptar(): void {
    if (this.venta.id > 0 && this.venta.cantidadVenta > 0 && this.venta.totalVenta>0 &&
      this.idOfertaSeleccionado>0 ) {
      let o = new Oferta();
      o.id= this.idOfertaSeleccionado;
      this.venta.ofer= o;
      if (this.edicion) {
        this.ventaService.modificar(this.venta).subscribe(data => {
          this.ventaService.listar().subscribe(data => {
            this.ventaService.setLista(data);
          })
        })
      } else {

        this.ventaService.insertar(this.venta).subscribe(data => {
          this.ventaService.listar().subscribe(data => {
            this.ventaService.setLista(data);
          })
        })
      }
      this.router.navigate(['detalle-venta']);
    } else {
      this.mensaje = "Complete los valores requeridos";
    }
  }

  init() {
    if (this.edicion) {
      this.ventaService.listarId(this.id).subscribe(data => {
        this.venta = data;
        console.log(data);
        this.idOfertaSeleccionado= data.ofer.id;
       
      })
    }

  }
}
