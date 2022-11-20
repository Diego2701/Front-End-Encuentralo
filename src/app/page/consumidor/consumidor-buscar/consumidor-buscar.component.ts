import { Component, OnInit } from '@angular/core';
import { ConsumidorService } from 'src/app/service/consumidor.service';
import { Consumidor } from 'src/app/model/consumidor';

@Component({
  selector: 'app-consumidor-buscar',
  templateUrl: './consumidor-buscar.component.html',
  styleUrls: ['./consumidor-buscar.component.css']
})
export class ConsumidorBuscarComponent implements OnInit {
  textoBuscar: string=""
  constructor(private consumidorService: ConsumidorService) { }

  ngOnInit(): void {
   
  }
  buscar(e:any){
    this.consumidorService.buscar(e.target.value).subscribe(data=>{
      this.consumidorService.setLista(data);
    });
    
  }
}
