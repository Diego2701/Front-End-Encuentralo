import { Component, OnInit } from '@angular/core';
import { Oferta } from 'src/app/model/oferta';
import { OfertaService } from 'src/app/service/oferta.service';
@Component({
  selector: 'app-oferta-buscar',
  templateUrl: './oferta-buscar.component.html',
  styleUrls: ['./oferta-buscar.component.css']
})
export class OfertaBuscarComponent implements OnInit {
  textoBuscar: string ="";
  constructor(private ofertaService:OfertaService) { }

  ngOnInit(): void {
  }
  buscar(e:any){
    this.ofertaService.buscar(e.target.value).subscribe(data=>{
      this.ofertaService.setLista(data);
    });
    
  }
}
