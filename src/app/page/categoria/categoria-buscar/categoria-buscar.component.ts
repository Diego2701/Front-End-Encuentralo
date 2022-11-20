import { Component, OnInit } from '@angular/core';
import { Categoria } from 'src/app/model/categoria';
import { CategoriaService } from 'src/app/service/categoria.service';
@Component({
  selector: 'app-categoria-buscar',
  templateUrl: './categoria-buscar.component.html',
  styleUrls: ['./categoria-buscar.component.css']
})
export class CategoriaBuscarComponent implements OnInit {
  textobuscar: string = ""
  constructor(private  categoriaService: CategoriaService) { }

  ngOnInit(): void {
  }
  buscar(e:any){
    this.categoriaService.buscar(e.target.value).subscribe(data=>{
      this.categoriaService.setLista(data);
    });
    
  }

}
