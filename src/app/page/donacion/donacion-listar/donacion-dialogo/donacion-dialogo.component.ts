import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { DonacionService } from 'src/app/service/donacion.service';
@Component({
  selector: 'app-donacion-dialogo',
  templateUrl: './donacion-dialogo.component.html',
  styleUrls: ['./donacion-dialogo.component.css']
})
export class DonacionDialogoComponent implements OnInit {

  constructor(private donaService : DonacionService, 
    private dialogRef:MatDialogRef<DonacionDialogoComponent>) { }

  ngOnInit(): void {
  }
  confirmar(estado: boolean) {
    this.donaService.setConfirmarEliminacion(estado);
    this.dialogRef.close();
  }

}
