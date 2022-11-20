import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/model/producto';
import { ProductoService } from 'src/app/service/producto.service';
import { MatDialog } from '@angular/material/dialog';
import { ProductoDialogoComponent } from './producto-dialogo/producto-dialogo.component';

@Component({
  selector: 'app-producto-listar',
  templateUrl: './producto-listar.component.html',
  styleUrls: ['./producto-listar.component.css']
})
export class ProductoListarComponent implements OnInit {
  lista: Producto[] = [];
  dataSource:MatTableDataSource<Producto>= new MatTableDataSource();
  displayedColumns: string[]=['id','descrip','marca','categoria','vendedor','notifi','accion1','accion2']
  private idMayor: number = 0;
  constructor(private ps:ProductoService, private dialog: MatDialog) { }

  ngOnInit(): void {

    this.ps.listar().subscribe(data => {
      this.lista=data;
      this.dataSource = new MatTableDataSource(data);
    })
    this.ps.getLista().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      console.log(data);
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
    this.dialog.open(ProductoDialogoComponent);
  }
  eliminar(id: number) {
    this.ps.eliminar(id).subscribe(() => {
      this.ps.listar().subscribe(data => {
        this.ps.setLista(data);
      });
    });
  }


}
