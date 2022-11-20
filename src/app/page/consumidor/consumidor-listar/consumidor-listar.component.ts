import { Component, OnInit } from '@angular/core';
import { MatTableDataSource} from '@angular/material/table'
import { ConsumidorService } from 'src/app/service/consumidor.service';
import { Consumidor } from 'src/app/model/consumidor';
import { MatDialog } from '@angular/material/dialog';
import { ConsumidorDialogoComponent } from './consumidor-dialogo/consumidor-dialogo.component';
@Component({
  selector: 'app-consumidor-listar',
  templateUrl: './consumidor-listar.component.html',
  styleUrls: ['./consumidor-listar.component.css']
})
export class ConsumidorListarComponent implements OnInit {
  dataSource: MatTableDataSource<Consumidor> = new MatTableDataSource();
  displayedColumns:string[]=['Id','Name','DNI','Edad','Celular','Email','Usuario','Password','acciones','accion2']
  private idMayor: number=0;
  constructor(private cS:ConsumidorService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.cS.listar().subscribe(d => {
      this.dataSource = new MatTableDataSource(d);
    })
    this.cS.getLista().subscribe(d=>{
      this.dataSource=new MatTableDataSource(d);
    });
    this.cS.getConfirmaEliminacion().subscribe(d=>{
      d==true? this.eliminar(this.idMayor):false;
    });
    }
    listar(){
      this.cS.listar().subscribe(d=>{
        this.cS.setLista(d);
      })
    }

    confirmar(id:number){
      this.idMayor=id;
      this.dialog.open(ConsumidorDialogoComponent);
    }
    eliminar(id:number){
      this.cS.eliminar(id).subscribe(()=>{
        this.cS.listar().subscribe(d=>{
          this.cS.setLista(d);
        });
      });
    }
}
