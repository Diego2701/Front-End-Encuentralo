import { Component, OnInit } from '@angular/core';
import { Notificacion } from 'src/app/model/notificacion';
import { NotificacionService } from 'src/app/service/notificacion.service';

@Component({
  selector: 'app-notificacion-buscar',
  templateUrl: './notificacion-buscar.component.html',
  styleUrls: ['./notificacion-buscar.component.css']
})
export class NotificacionBuscarComponent implements OnInit {
  textoBuscar: string = ""
  constructor(private notificacionService: NotificacionService) { }

  ngOnInit(): void {
  }
  buscar(e:any){
    this.notificacionService.buscar(e.target.value).subscribe(data=>{
      this.notificacionService.setLista(data);
    });
    
  }
}
