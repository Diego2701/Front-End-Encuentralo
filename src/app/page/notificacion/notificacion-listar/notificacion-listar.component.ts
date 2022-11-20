import { Component, OnInit } from '@angular/core';
import { NotificacionService } from 'src/app/service/notificacion.service';
import { Notificacion } from 'src/app/model/notificacion';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { NotificacionDialogoComponent } from './notificacion-dialogo/notificacion-dialogo.component';
@Component({
  selector: 'app-notificacion-listar',
  templateUrl: './notificacion-listar.component.html',
  styleUrls: ['./notificacion-listar.component.css']
})
export class NotificacionListarComponent implements OnInit {
  dataSource: MatTableDataSource<Notificacion>= new MatTableDataSource();
  displayedColumns:string[]=['id','fecha','stock','accion1','accion2']
  private idMayor: number=0;
  constructor(private ns:NotificacionService,private dialog: MatDialog) { }

  ngOnInit(): void {
    this.ns.listar().subscribe(data=>{
      this.dataSource=new MatTableDataSource(data)});

    this.ns.getLista().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      });
      this.ns.getConfirmaEliminacion().subscribe(data => {
        data == true ? this.eliminar(this.idMayor) : false;
      }); 
  }
  confirmar(id: number) {
    this.idMayor = id;
    this.dialog.open(NotificacionDialogoComponent);
  }

  listar(){
    this.ns.listar().subscribe(d=>{
      this.ns.setLista(d);
    })
  }
  eliminar(id: number) {
    this.ns.eliminar(id).subscribe(() => {
      this.ns.listar().subscribe(data => {
        this.ns.setLista(data);/* se ejecuta la línea 27*/
      });
    });

}
}
