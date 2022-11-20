import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { DetalleVentaService } from 'src/app/service/detalle-venta.service';
@Component({
  selector: 'app-detalle-venta-dialogo',
  templateUrl: './detalle-venta-dialogo.component.html',
  styleUrls: ['./detalle-venta-dialogo.component.css']
})
export class DetalleVentaDialogoComponent implements OnInit {

  constructor(private ventaService: DetalleVentaService,
    private dialogRef: MatDialogRef<DetalleVentaDialogoComponent>) { }

  ngOnInit(): void {
  }
  confirmar(estado: boolean) {
    this.ventaService.setConfirmarEliminacion(estado);
    this.dialogRef.close();
  }
}
