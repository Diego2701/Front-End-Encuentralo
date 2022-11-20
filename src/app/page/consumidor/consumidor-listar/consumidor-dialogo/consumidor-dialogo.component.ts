import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ConsumidorService } from 'src/app/service/consumidor.service';
@Component({
  selector: 'app-consumidor-dialogo',
  templateUrl: './consumidor-dialogo.component.html',
  styleUrls: ['./consumidor-dialogo.component.css']
})
export class ConsumidorDialogoComponent implements OnInit {

  constructor(private consumidorService: ConsumidorService,
    private dialoRef: MatDialogRef<ConsumidorDialogoComponent>) { }

  ngOnInit(): void {
  }
  confirmar(estado:boolean){
    this.consumidorService.setConfirmaEliminacion(estado);
    this.dialoRef.close();
  }
}
