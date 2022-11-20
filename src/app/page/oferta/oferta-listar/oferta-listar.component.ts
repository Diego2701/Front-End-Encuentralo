import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Oferta } from 'src/app/model/oferta';
import { OfertaService } from 'src/app/service/oferta.service';
import { MatDialog } from '@angular/material/dialog';
import { OfertaDialogoComponent } from './oferta-dialogo/oferta-dialogo.component';
@Component({
  selector: 'app-oferta-listar',
  templateUrl: './oferta-listar.component.html',
  styleUrls: ['./oferta-listar.component.css']
})
export class OfertaListarComponent implements OnInit {
  lista: Oferta[] = [];
  dataSource:MatTableDataSource<Oferta>=new MatTableDataSource();
  displayedColumns:string[]=['Id','Descuento','Precio','Fecha','Producto','accion1','accion2']
  private idMayor: number = 0;
  constructor(private oS:OfertaService , private dialog: MatDialog) { }

  ngOnInit(): void {
    this.oS.listar().subscribe(data => {
      this.lista=data;
      this.dataSource = new MatTableDataSource(data);
    })
    this.oS.getLista().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      console.log(data);
    });
    this.oS.getConfirmarEliminacion().subscribe(data => {
      data == true ? this.eliminar(this.idMayor) : false;
    });
  }
  listar(){
    this.oS.listar().subscribe(d=>{
      this.oS.setLista(d);
    })
  }
  confirmar(id: number) {
    this.idMayor = id;
    this.dialog.open(OfertaDialogoComponent);
  }
  eliminar(id: number) {
    this.oS.eliminar(id).subscribe(() => {
      this.oS.listar().subscribe(data => {
        this.oS.setLista(data);
      });
    });
  }

}
