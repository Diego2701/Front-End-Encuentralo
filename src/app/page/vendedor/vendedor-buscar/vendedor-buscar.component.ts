import { Vendedor } from 'src/app/model/vendedor';
import { VendedorService } from './../../../service/vendedor.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vendedor-buscar',
  templateUrl: './vendedor-buscar.component.html',
  styleUrls: ['./vendedor-buscar.component.css']
})
export class VendedorBuscarComponent implements OnInit {
  textoBuscar: string=""
  constructor(private vendedorService: VendedorService) { }

  ngOnInit(): void {
  }
  buscar(e:any){
    this.vendedorService.buscar(e.target.value).subscribe(data=>{
      this.vendedorService.setLista(data);
    });
    
  }
}
