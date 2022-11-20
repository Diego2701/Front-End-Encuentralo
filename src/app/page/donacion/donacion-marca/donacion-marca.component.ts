import { DonacionService } from 'src/app/service/donacion.service';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Donacion } from 'src/app/model/donacion';
import { RespuestaOne } from './../../../model/respuestaone';

@Component({
  selector: 'app-donacion-marca',
  templateUrl: './donacion-marca.component.html',
  styleUrls: ['./donacion-marca.component.css']
})
export class DonacionMarcaComponent implements OnInit {
  dataSource: MatTableDataSource<RespuestaOne> = new MatTableDataSource();
  displayedColumns:string[]=['marca','cantidad'];
  constructor(private dS:DonacionService) { }

  ngOnInit(): void {
    this.dS.buscarMarcaProducto().subscribe(data=>{
      this.dataSource=new MatTableDataSource(data);
    })
    
  }

}
