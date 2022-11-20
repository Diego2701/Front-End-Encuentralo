import { DetalleVentaDialogoComponent } from './detalle-venta-dialogo/detalle-venta-dialogo.component';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { DetalleVenta } from '../../../model/detalle-venta';
import { MatDialog } from '@angular/material/dialog';
import { DetalleVentaService } from 'src/app/service/detalle-venta.service';
@Component({
  selector: 'app-detalle-venta-listar',
  templateUrl: './detalle-venta-listar.component.html',
  styleUrls: ['./detalle-venta-listar.component.css']
})
export class DetalleVentaListarComponent implements OnInit {
  lista: DetalleVenta[] = [];
  dataSource:MatTableDataSource<DetalleVenta>=new MatTableDataSource();
  displayedColumns:string[]=['Id','cantidad','total','oferta','accion1','accion2']
  private idMayor: number = 0;
  constructor(private ds: DetalleVentaService, private dialog: MatDialog) { }

  ngOnInit(): void {
   
    this.ds.listar().subscribe(data => {
      this.lista=data;
      this.dataSource = new MatTableDataSource(data);
    })
    this.ds.getLista().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      console.log(data);
    });
    this.ds.getConfirmarEliminacion().subscribe(data => {
      data == true ? this.eliminar(this.idMayor) : false;
    });
  }
  listar(){
    this.ds.listar().subscribe(d=>{
      this.ds.setLista(d);
    })
  }
  confirmar(id: number) {
    this.idMayor = id;
    this.dialog.open(DetalleVentaDialogoComponent);
  }
  eliminar(id: number) {
    this.ds.eliminar(id).subscribe(() => {
      this.ds.listar().subscribe(data => {
        this.ds.setLista(data);
      });
    });
  }

}
