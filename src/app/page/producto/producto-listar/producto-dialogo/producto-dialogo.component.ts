import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ProductoService } from 'src/app/service/producto.service';
@Component({
  selector: 'app-producto-dialogo',
  templateUrl: './producto-dialogo.component.html',
  styleUrls: ['./producto-dialogo.component.css']
})
export class ProductoDialogoComponent implements OnInit {

  constructor(private ProductoService: ProductoService,
    private dialogRef: MatDialogRef<ProductoDialogoComponent>) { }

  ngOnInit(): void {
  }
  confirmar(estado: boolean) {
    this.ProductoService.setConfirmarEliminacion(estado);
    this.dialogRef.close();
  }
}
