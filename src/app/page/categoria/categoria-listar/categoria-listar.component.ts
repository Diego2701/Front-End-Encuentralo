import { Component, OnInit } from '@angular/core';
import { MatTableDataSource} from '@angular/material/table'
import { Categoria } from 'src/app/model/categoria';
import { CategoriaService } from 'src/app/service/categoria.service';
import { MatDialog } from '@angular/material/dialog';
import { CategoriaDialogoComponent } from './categoria-dialogo/categoria-dialogo.component';
@Component({
  selector: 'app-categoria-listar',
  templateUrl: './categoria-listar.component.html',
  styleUrls: ['./categoria-listar.component.css']
})
export class CategoriaListarComponent implements OnInit {
  dataSource: MatTableDataSource<Categoria> = new MatTableDataSource();
  displayedColumns: string[] = ['id', 'nombre', 'accion1', 'accion2'];
  private idMayor: number = 0;
  constructor(private ps: CategoriaService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.ps.listar().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    })
    this.ps.getLista().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    });
    this.ps.getConfirmarEliminacion().subscribe(data => {
      data == true ? this.eliminar(this.idMayor) : false;
    });
  }
  listar(){
    this.ps.listar().subscribe(d=>{
      this.ps.setLista(d);
    })
  }
  confirmar(id: number) {
    this.idMayor = id;
    this.dialog.open(CategoriaDialogoComponent);
  }
  eliminar(id: number) {
    this.ps.eliminar(id).subscribe(() => {
      this.ps.listar().subscribe(data => {
        this.ps.setLista(data);
      });
    });
  }

}
