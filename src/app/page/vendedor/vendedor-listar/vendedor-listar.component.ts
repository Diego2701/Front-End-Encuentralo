import { VendedorDialogoComponent } from './vendedor-dialogo/vendedor-dialogo.component';
import { Component, OnInit } from '@angular/core';
import { VendedorService } from 'src/app/service/vendedor.service';
import { Vendedor } from 'src/app/model/vendedor';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-vendedor-listar',
  templateUrl: './vendedor-listar.component.html',
  styleUrls: ['./vendedor-listar.component.css']
})
export class VendedorListarComponent implements OnInit {
  dataSource: MatTableDataSource<Vendedor> = new MatTableDataSource();
  displayedColumns:string[]=['Id','Name','DNI','Edad','Celular','Email','Usuario','Password','acciones','accion2']
  private idMayor: number=0;
  constructor(private vS: VendedorService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.vS.listar().subscribe(d => {
      this.dataSource = new MatTableDataSource(d);
    })
    this.vS.getLista().subscribe(d=>{
      this.dataSource=new MatTableDataSource(d);
    });
    this.vS.getConfirmaEliminacion().subscribe(d=>{
      d==true? this.eliminar(this.idMayor):false;
    });
  }
  listar(){
    this.vS.listar().subscribe(d=>{
      this.vS.setLista(d);
    })
  }
  confirmar(id:number){
    this.idMayor=id;
    this.dialog.open(VendedorDialogoComponent);
  }
  eliminar(id:number){
    this.vS.eliminar(id).subscribe(()=>{
      this.vS.listar().subscribe(d=>{
        this.vS.setLista(d);
      });
    });
  }
}
