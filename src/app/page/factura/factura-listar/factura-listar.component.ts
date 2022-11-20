import { FacturaDialogoComponent } from './factura-dialogo/factura-dialogo.component';
import { FacturaService } from './../../../service/factura.service';
import { Factura } from './../../../model/factura';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-factura-listar',
  templateUrl: './factura-listar.component.html',
  styleUrls: ['./factura-listar.component.css']
})
export class FacturaListarComponent implements OnInit {
  lista: Factura[] = [];
  dataSource:MatTableDataSource<Factura>=new MatTableDataSource();
  displayedColumns:string[]=['Id','Consumidor','NVenta','accion1','accion2']
  private idMayor: number = 0;
  constructor(private fs: FacturaService, private dialog: MatDialog) { }

  ngOnInit(): void {
   
    this.fs.listar().subscribe(data => {
      this.lista=data;
      this.dataSource = new MatTableDataSource(data);
    })
    this.fs.getLista().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      console.log(data);
    });
    this.fs.getConfirmarEliminacion().subscribe(data => {
      data == true ? this.eliminar(this.idMayor) : false;
    });
  }
  listar(){
    this.fs.listar().subscribe(d=>{
      this.fs.setLista(d);
    })
  }
  confirmar(id: number) {
    this.idMayor = id;
    this.dialog.open(FacturaDialogoComponent);
  }
  eliminar(id: number) {
    this.fs.eliminar(id).subscribe(() => {
      this.fs.listar().subscribe(data => {
        this.fs.setLista(data);
      });
    });
  }

}
