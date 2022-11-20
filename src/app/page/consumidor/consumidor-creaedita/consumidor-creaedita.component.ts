import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Consumidor } from 'src/app/model/consumidor';
import { ConsumidorService } from './../../../service/consumidor.service';

@Component({
  selector: 'app-consumidor-creaedita',
  templateUrl: './consumidor-creaedita.component.html',
  styleUrls: ['./consumidor-creaedita.component.css']
})
export class ConsumidorCreaeditaComponent implements OnInit {
  consumidor: Consumidor=new Consumidor();
  mensaje:string="";
  edicion: boolean=false;
  id:number=0;
  constructor(private consumidorService: ConsumidorService,
    private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.id=data['id'];
      this.edicion=data['id']!=null;
      this.init();
    });
  }
  aceptar():void{
    if(this.consumidor.id>0 && this.consumidor.nomConsumidor.length>0 && this.consumidor.dniConsumidor>0 && this.consumidor.edadConsumidor >0 && this.consumidor.celConsumidor>0 && this.consumidor.emailConsumidor.length>0 && this.consumidor.username.length >0 && this.consumidor.password.length>0){
      if(this.edicion){
        this.consumidorService.modificar(this.consumidor).subscribe(data=>{
          this.consumidorService.listar().subscribe(data=>{
            this.consumidorService.setLista(data);
          })
        })
      } else {
        this.consumidorService.insertar(this.consumidor).subscribe(data=>{
          this.consumidorService.listar().subscribe(data=>{
            this.consumidorService.setLista(data);
          })
        })
      }
      this.router.navigate(['consumidor']);
    } else {
      this.mensaje="Complete los valores requeridos";
    }
  }

  init(){
    if(this.edicion){
      this.consumidorService.listarId(this.id).subscribe(data=>{
        this.consumidor=data;
      })
    }
  }
}
