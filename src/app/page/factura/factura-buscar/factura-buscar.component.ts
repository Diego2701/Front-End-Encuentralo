import { Factura } from './../../../model/factura';
import { FacturaService } from './../../../service/factura.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-factura-buscar',
  templateUrl: './factura-buscar.component.html',
  styleUrls: ['./factura-buscar.component.css']
})
export class FacturaBuscarComponent implements OnInit {
  textoBuscar: string ="";
  constructor(private facturaService: FacturaService) { }

  ngOnInit(): void {
  }
  buscar(e:any){
    this.facturaService.buscar(e.target.value).subscribe(data=>{
      this.facturaService.setLista(data);
    });
    
  }
}
