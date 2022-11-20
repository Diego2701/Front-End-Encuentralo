import { DetalleVenta } from './../../../model/detalle-venta';
import { DetalleVentaService } from './../../../service/detalle-venta.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detalle-venta-buscar',
  templateUrl: './detalle-venta-buscar.component.html',
  styleUrls: ['./detalle-venta-buscar.component.css']
})
export class DetalleVentaBuscarComponent implements OnInit {
  textoBuscar: string ="";
  constructor(private ds:DetalleVentaService) { }

  ngOnInit(): void {
  }
  buscar(e:any){
    this.ds.buscar(e.target.value).subscribe(data=>{
      this.ds.setLista(data);
    });
    
  }
  

}
