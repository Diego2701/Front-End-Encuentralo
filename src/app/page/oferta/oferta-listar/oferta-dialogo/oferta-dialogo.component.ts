import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { OfertaService } from 'src/app/service/oferta.service';
@Component({
  selector: 'app-oferta-dialogo',
  templateUrl: './oferta-dialogo.component.html',
  styleUrls: ['./oferta-dialogo.component.css']
})
export class OfertaDialogoComponent implements OnInit {

  constructor(private ofertaService : OfertaService, 
    private dialogRef:MatDialogRef<OfertaDialogoComponent>) { }

  ngOnInit(): void {
  }
  confirmar(estado: boolean) {
    this.ofertaService.setConfirmarEliminacion(estado);
    this.dialogRef.close();
  }

}
