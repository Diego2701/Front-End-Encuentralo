import { Component, OnInit } from '@angular/core';
import { NotificacionService } from 'src/app/service/notificacion.service';
import { MatDialogRef} from '@angular/material/dialog';
@Component({
  selector: 'app-notificacion-dialogo',
  templateUrl: './notificacion-dialogo.component.html',
  styleUrls: ['./notificacion-dialogo.component.css']
})
export class NotificacionDialogoComponent implements OnInit {

  constructor(private notificacionService:NotificacionService,
    private dialogRef:MatDialogRef<NotificacionDialogoComponent>) { }

  ngOnInit(): void {
  }
  confirmar(estado: boolean) {
    this.notificacionService.setConfirmaEliminacion(estado);
    this.dialogRef.close();
  }

}
