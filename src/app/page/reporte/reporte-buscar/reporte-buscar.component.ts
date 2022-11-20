import { Reporte } from './../../../model/reporte';
import { ReporteService } from 'src/app/service/reporte.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reporte-buscar',
  templateUrl: './reporte-buscar.component.html',
  styleUrls: ['./reporte-buscar.component.css']
})
export class ReporteBuscarComponent implements OnInit {
  textoBuscar: string ="";
  constructor(private reporteService:ReporteService) { }

  ngOnInit(): void {
  }
  buscar(e: any) {
    this.reporteService.buscar(e.target.value).subscribe(data=>{
      this.reporteService.setLista(data);
    });
  }


}
