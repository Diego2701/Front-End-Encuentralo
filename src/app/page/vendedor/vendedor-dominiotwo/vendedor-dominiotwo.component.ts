import { Respuesta } from './../../../model/respuesta';
import { VendedorService } from 'src/app/service/vendedor.service';
import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit } from '@angular/core';
import { Vendedor } from './../../../model/vendedor';
@Component({
  selector: 'app-vendedor-dominiotwo',
  templateUrl: './vendedor-dominiotwo.component.html',
  styleUrls: ['./vendedor-dominiotwo.component.css']
})
export class VendedorDominiotwoComponent implements OnInit {
  dataSource: MatTableDataSource<Respuesta> = new MatTableDataSource();
  displayedColumns:string[]=['Name','Cantidad'];
  constructor(private vs:VendedorService) { }

  ngOnInit(): void {
    this.vs.buscarcantidadproducto().subscribe(data=>{
      this.dataSource=new MatTableDataSource(data);
    })


  }

}
