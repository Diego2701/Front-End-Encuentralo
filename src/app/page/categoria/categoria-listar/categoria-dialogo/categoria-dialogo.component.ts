import { Component, OnInit } from '@angular/core';
import { CategoriaService } from 'src/app/service/categoria.service';
import { MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-categoria-dialogo',
  templateUrl: './categoria-dialogo.component.html',
  styleUrls: ['./categoria-dialogo.component.css']
})
export class CategoriaDialogoComponent implements OnInit {

  constructor(private categoriaService: CategoriaService,
    private dialogRef: MatDialogRef<CategoriaDialogoComponent>
  ) { }

  ngOnInit(): void {
  }
  confirmar(estado: boolean) {
    this.categoriaService.setConfirmarEliminacion(estado);
    this.dialogRef.close();
  }
}
