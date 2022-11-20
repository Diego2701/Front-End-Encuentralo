import { Component, OnInit } from '@angular/core';
import { ProductoService } from 'src/app/service/producto.service';
import { Producto } from 'src/app/model/producto';
@Component({
  selector: 'app-producto-buscar',
  templateUrl: './producto-buscar.component.html',
  styleUrls: ['./producto-buscar.component.css']
})
export class ProductoBuscarComponent implements OnInit {
  textoBuscar: string ="";
  constructor(private productoService:ProductoService) { }

  ngOnInit(): void {
  }
  buscar(e:any){
    this.productoService.buscar(e.target.value).subscribe(data=>{
      this.productoService.setLista(data);
    });
    
  }
}

