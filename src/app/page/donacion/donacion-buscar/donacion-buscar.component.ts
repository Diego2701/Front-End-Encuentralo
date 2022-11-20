import { Donacion } from 'src/app/model/donacion';
import { DonacionService } from 'src/app/service/donacion.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-donacion-buscar',
  templateUrl: './donacion-buscar.component.html',
  styleUrls: ['./donacion-buscar.component.css']
})
export class DonacionBuscarComponent implements OnInit {
  textoBuscar: string ="";
  constructor(private donaService: DonacionService) { }

  ngOnInit(): void {
  }
  buscar(e:any){
    this.donaService.buscar(e.target.value).subscribe(data=>{
      this.donaService.setLista(data);
    });
    
  }
}
