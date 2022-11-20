import { Component, OnInit } from '@angular/core';
import { Vendedor } from 'src/app/model/vendedor';
import { VendedorService } from 'src/app/service/vendedor.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-vendedor-creaedita',
  templateUrl: './vendedor-creaedita.component.html',
  styleUrls: ['./vendedor-creaedita.component.css']
})
export class VendedorCreaeditaComponent implements OnInit {
  vendedor: Vendedor=new Vendedor();
  mensaje:string="";
  edicion: boolean=false;
  id:number=0;

  constructor(private vendedorService: VendedorService,
    private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.id=data['id'];
      this.edicion=data['id']!=null;
      this.init();
    });
  }

aceptar():void{
    if(this.vendedor.id>0 && this.vendedor.nomVendedor.length>0 && this.vendedor.dniVendedor>0 && 
      this.vendedor.edadVendedor >0 && this.vendedor.celVendedor>0 && this.vendedor.emailVendedor.length>0 && 
      this.vendedor.username.length >0 && this.vendedor.password.length>0){
      if(this.edicion){
        this.vendedorService.modificar(this.vendedor).subscribe(data=>{
          this.vendedorService.listar().subscribe(data=>{
            this.vendedorService.setLista(data);
          })
        })
      } else {
        this.vendedorService.insertar(this.vendedor).subscribe(data=>{
          this.vendedorService.listar().subscribe(data=>{
            this.vendedorService.setLista(data);
          })
        })
      }
      this.router.navigate(['vendedor']);
    } else {
      this.mensaje="Complete los valores requeridos";
    }
  }

  init(){
    if(this.edicion){
      this.vendedorService.listarId(this.id).subscribe(data=>{
        this.vendedor=data;
      })
    }
  }
}
