import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { DonacionService } from 'src/app/service/donacion.service';
import { Donacion } from 'src/app/model/donacion';
import { MatDialog } from '@angular/material/dialog';
import { DonacionDialogoComponent } from './donacion-dialogo/donacion-dialogo.component';

@Component({
  selector: 'app-donacion-listar',
  templateUrl: './donacion-listar.component.html',
  styleUrls: ['./donacion-listar.component.css']
})
export class DonacionListarComponent implements OnInit {
  lista: Donacion[] = [];
  dataSource: MatTableDataSource<Donacion> = new MatTableDataSource();
  displayedColumns:string[]=['id','nombre','producto','cantidad','direccion','accion1','accion2'];
  private idMayor: number = 0;
  constructor(private ds:DonacionService , private dialog : MatDialog) { }

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
    this.dialog.open(DonacionDialogoComponent);
  }
  eliminar(id: number) {
    this.ds.eliminar(id).subscribe(() => {
      this.ds.listar().subscribe(data => {
        this.ds.setLista(data);
      });
    });
  }


}

