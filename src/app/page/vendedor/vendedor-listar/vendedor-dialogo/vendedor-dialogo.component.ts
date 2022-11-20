import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { VendedorService } from 'src/app/service/vendedor.service';
@Component({
  selector: 'app-vendedor-dialogo',
  templateUrl: './vendedor-dialogo.component.html',
  styleUrls: ['./vendedor-dialogo.component.css']
})
export class VendedorDialogoComponent implements OnInit {

  constructor(private vendedorService:VendedorService,
    private dialoRef: MatDialogRef<VendedorDialogoComponent>) { }

  ngOnInit(): void {
  }
  confirmar(estado:boolean){
    this.vendedorService.setConfirmaEliminacion(estado);
    this.dialoRef.close();
  }
}
