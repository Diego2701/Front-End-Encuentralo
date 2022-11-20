import { NotificacionService } from 'src/app/service/notificacion.service';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Notificacion } from 'src/app/model/notificacion';
@Component({
  selector: 'app-notificacion-fecha',
  templateUrl: './notificacion-fecha.component.html',
  styleUrls: ['./notificacion-fecha.component.css']
})
export class NotificacionFechaComponent implements OnInit {
  dataSource: MatTableDataSource<Notificacion>= new MatTableDataSource();
  displayedColumns:string[]=['id','fecha','stock']
  constructor(private nS: NotificacionService) { }

  ngOnInit(): void {
    this.nS.buscarfecha().subscribe(data=>{
      this.dataSource=new MatTableDataSource(data);
    })
  }

}
