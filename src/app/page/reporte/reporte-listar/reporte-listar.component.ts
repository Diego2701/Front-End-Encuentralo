import { ReporteDialogoComponent } from './reporte-dialogo/reporte-dialogo.component';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Reporte } from 'src/app/model/reporte';
import { ReporteService } from 'src/app/service/reporte.service';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-reporte-listar',
  templateUrl: './reporte-listar.component.html',
  styleUrls: ['./reporte-listar.component.css']
})
export class ReporteListarComponent implements OnInit {
  lista: Reporte[] = [];
  dataSource:MatTableDataSource<Reporte>=new MatTableDataSource();
  displayedColumns:string[]=['Id','Descripcion','NVendedor','NConsumidor','accion1','accion2']
  private idMayor: number = 0;
  constructor(private rS:ReporteService,  private dialog: MatDialog) { }

  ngOnInit(): void {
    this.rS.listar().subscribe(data => {
      this.lista=data;
      this.dataSource = new MatTableDataSource(data);
    })
    this.rS.getLista().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      console.log(data);
    });
    this.rS.getConfirmarEliminacion().subscribe(data => {
      data == true ? this.eliminar(this.idMayor) : false;
    });
  }
  listar(){
    this.rS.listar().subscribe(d=>{
      this.rS.setLista(d);
    })
  }
  confirmar(id: number) {
    this.idMayor = id;
    this.dialog.open(ReporteDialogoComponent);
  }
  eliminar(id: number) {
    this.rS.eliminar(id).subscribe(() => {
      this.rS.listar().subscribe(data => {
        this.rS.setLista(data);
      });
    });
  }


}
