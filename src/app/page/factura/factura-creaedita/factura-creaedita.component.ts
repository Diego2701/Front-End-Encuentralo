import { ConsumidorService } from './../../../service/consumidor.service';
import { Consumidor } from './../../../model/consumidor';
import { DetalleVentaService } from './../../../service/detalle-venta.service';
import { FacturaService } from './../../../service/factura.service';
import { DetalleVenta } from './../../../model/detalle-venta';
import { Factura } from './../../../model/factura';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
@Component({
  selector: 'app-factura-creaedita',
  templateUrl: './factura-creaedita.component.html',
  styleUrls: ['./factura-creaedita.component.css']
})
export class FacturaCreaeditaComponent implements OnInit {
  factura: Factura = new Factura();
  mensaje: string = "";
  edicion: boolean = false;
  id: number=0;
  listaVentas: DetalleVenta[] = [];
  idVentaSeleccionado: number = 0;
  listaConsumidor:Consumidor[] = [];
  idConsumidorSeleccionado: number = 0;

  constructor(private facturaService: FacturaService,
    private router: Router, 
    private route: ActivatedRoute,
    private ventaService: DetalleVentaService,
    private consumidorService: ConsumidorService ) { }

  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.id = data ['id'];
      this.edicion = data ['id'] != null;
      this.init();
    });
    this.ventaService.listar().subscribe(data => { this.listaVentas = data });
    this.consumidorService.listar().subscribe(data => { this.listaConsumidor= data });
    
  }
  aceptar(): void {
    if (this.factura.id > 0 &&this.idConsumidorSeleccionado>0  && this.idVentaSeleccionado > 0  ) {
      let v = new DetalleVenta();
      let c = new Consumidor();
      v.id=this.idVentaSeleccionado;
      c.id=this.idConsumidorSeleccionado;
      this.factura.consumidor=c;
      this.factura.detalleVenta=v;
      if (this.edicion) {
        this.facturaService.modificar(this.factura).subscribe(data => {
          this.facturaService.listar().subscribe(data => {
            this.facturaService.setLista(data);
          })
        })
      } else {

        this.facturaService.insertar(this.factura).subscribe(data => {
          this.facturaService.listar().subscribe(data => {
            this.facturaService.setLista(data);
          })
        })
      }
      this.router.navigate(['factura']);
    } else {
      this.mensaje = "Complete los valores requeridos";
    }
  }

  init() {
    if (this.edicion) {
      this.facturaService.listarId(this.id).subscribe(data => {
        this.factura = data;
        console.log(data);
        this.idVentaSeleccionado= data.detalleVenta.id;
        this.idConsumidorSeleccionado=data.consumidor.id;
      })
    }

  }
}
