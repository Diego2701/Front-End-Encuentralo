import { VendedorService } from './../../../service/vendedor.service';
import { MatTableDataSource } from '@angular/material/table';
import { Vendedor } from './../../../model/vendedor';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vendedor-dominio',
  templateUrl: './vendedor-dominio.component.html',
  styleUrls: ['./vendedor-dominio.component.css']
})
export class VendedorDominioComponent implements OnInit {
  dataSource: MatTableDataSource<Vendedor> = new MatTableDataSource();
  displayedColumns:string[]=['Id','Name','Edad'];

  constructor(private vs: VendedorService) { }

  ngOnInit(): void {
    this.vs.buscardominio().subscribe(data=>{
      this.dataSource=new MatTableDataSource(data);
    })
  }

}
