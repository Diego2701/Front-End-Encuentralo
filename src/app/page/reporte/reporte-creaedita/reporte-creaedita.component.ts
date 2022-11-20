import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Reporte } from 'src/app/model/reporte';
import { ReporteService } from 'src/app/service/reporte.service';
import { Vendedor } from 'src/app/model/vendedor';
import { VendedorService } from 'src/app/service/vendedor.service';
import { Consumidor } from 'src/app/model/consumidor';
import { ConsumidorService } from 'src/app/service/consumidor.service';
@Component({
  selector: 'app-reporte-creaedita',
  templateUrl: './reporte-creaedita.component.html',
  styleUrls: ['./reporte-creaedita.component.css']
})
export class ReporteCreaeditaComponent implements OnInit {
  reporte: Reporte = new Reporte();
  mensaje: string = "";
  edicion: boolean = false;
  id: number=0;
  listaVendedor: Vendedor[] = [];
  idVendedorSeleccionado: number = 0;
  listaConsumidor: Consumidor[] = [];
  idConsumidorSeleccionado: number = 0;
  constructor(private reporteService: ReporteService,
    private router: Router, 
    private route: ActivatedRoute,
    private vendedorService: VendedorService ,
    private consuService: ConsumidorService ) { }

  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.id = data ['id'];
      this.edicion = data ['id'] != null;
      this.init();
    });
    this.vendedorService.listar().subscribe(data => { this.listaVendedor = data });
    this.consuService.listar().subscribe(data => { this.listaConsumidor = data });
    
  }

  aceptar(): void {
    if (this.reporte.id > 0 && this.reporte.desReporte.length > 0 && 
      this.idVendedorSeleccionado>0 && this.idConsumidorSeleccionado>0) {
      let v = new Vendedor();
      let c =new Consumidor();
      v.id=this.idVendedorSeleccionado;
      c.id=this.idConsumidorSeleccionado;
      this.reporte.consumidor=c;
      this.reporte.vendedor=v;
      if (this.edicion) {
        this.reporteService.modificar(this.reporte).subscribe(data => {
          this.reporteService.listar().subscribe(data => {
            this.reporteService.setLista(data);
          })
        })
      } else {

        this.reporteService.insertar(this.reporte).subscribe(data => {
          this.reporteService.listar().subscribe(data => {
            this.reporteService.setLista(data);
          })
        })
      }
      this.router.navigate(['reporte']);
    } else {
      this.mensaje = "Complete los valores requeridos";
    }
  }

  init() {
    if (this.edicion) {
      this.reporteService.listarId(this.id).subscribe(data => {
        this.reporte = data;
        console.log(data);
        this.idVendedorSeleccionado= data.vendedor.id;
        this.idConsumidorSeleccionado=data.consumidor.id;
       
      })
    }

  }

}
