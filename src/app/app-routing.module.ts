import { NotificacionFechaComponent } from './page/notificacion/notificacion-fecha/notificacion-fecha.component';
import { DonacionMarcaComponent } from './page/donacion/donacion-marca/donacion-marca.component';
import { VendedorDominiotwoComponent } from './page/vendedor/vendedor-dominiotwo/vendedor-dominiotwo.component';
import { VendedorDominioComponent } from './page/vendedor/vendedor-dominio/vendedor-dominio.component';
import { FacturaCreaeditaComponent } from './page/factura/factura-creaedita/factura-creaedita.component';
import { DetalleVentaCreaeditaComponent } from './page/detalle-venta/detalle-venta-creaedita/detalle-venta-creaedita.component';
import { ReporteCreaeditaComponent } from './page/reporte/reporte-creaedita/reporte-creaedita.component';
import { DonacionCreaeditaComponent } from './page/donacion/donacion-creaedita/donacion-creaedita.component';
import { OfertaCreaeditaComponent } from './page/oferta/oferta-creaedita/oferta-creaedita.component';
import { VendedorCreaeditaComponent } from './page/vendedor/vendedor-creaedita/vendedor-creaedita.component';
import { FacturaComponent } from './page/factura/factura.component';
import { ReporteComponent } from './page/reporte/reporte.component';
import { OfertaComponent } from './page/oferta/oferta.component';
import { ConsumidorComponent } from './page/consumidor/consumidor.component';
import { NotificacionComponent } from './page/notificacion/notificacion.component';
import { DonacionComponent } from './page/donacion/donacion.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriaComponent } from './page/categoria/categoria.component';
import { ProductoComponent } from './page/producto/producto.component';
import { VendedorComponent } from './page/vendedor/vendedor.component';
import { DetalleVentaComponent } from './page/detalle-venta/detalle-venta.component';
import { NotificacionCreaeditaComponent } from './page/notificacion/notificacion-creaedita/notificacion-creaedita.component';
import { CategoriaCreaeditaComponent } from './page/categoria/categoria-creaedita/categoria-creaedita.component';
import { ConsumidorCreaeditaComponent } from './page/consumidor/consumidor-creaedita/consumidor-creaedita.component';
import { ProductoCreaeditaComponent } from './page/producto/producto-creaedita/producto-creaedita.component';
const routes: Routes = [{
  path: 'categoria', component:CategoriaComponent,children:[
    { path: 'nuevo', component: CategoriaCreaeditaComponent },
    { path: 'edicion/:id', component: CategoriaCreaeditaComponent }
  ]
},
{
  path:'vendedor', component:VendedorComponent,children:[
    {path: 'nuevo', component: VendedorCreaeditaComponent},
    {path: 'edicion/:id', component: VendedorCreaeditaComponent},
    {path: 'dominios', component: VendedorDominioComponent},
    {path: 'cantidades',component:VendedorDominiotwoComponent}
  ]
},
{
  path:'producto', component:ProductoComponent,children:[
    {path: 'nuevo', component: ProductoCreaeditaComponent},
    {path: 'edicion/:id', component: ProductoCreaeditaComponent}
  ]
},
{
  path:'donacion', component:DonacionComponent,children:[
    { path: 'nuevo', component: DonacionCreaeditaComponent},
    { path: 'edicion/:id', component: DonacionCreaeditaComponent },
    { path: 'marcas', component:DonacionMarcaComponent}
  ]
},
{
  path:'notificacion', component:NotificacionComponent,children:[
    {path:'nuevo', component:NotificacionCreaeditaComponent},
    {path:'edicion/:id', component:NotificacionCreaeditaComponent},
    {path: 'fechas',component:NotificacionFechaComponent}
  ]
},
{
  path:'consumidor', component:ConsumidorComponent,children:[
    {path: 'nuevo', component: ConsumidorCreaeditaComponent},
    {path: 'edicion/:id', component: ConsumidorCreaeditaComponent}
  ]
},
{
  path:'oferta', component:OfertaComponent,children:[

    {path: 'nuevo', component: OfertaCreaeditaComponent},
    {path: 'edicion/:id', component: OfertaCreaeditaComponent}
    
  ]
},
{
  path:'reporte', component:ReporteComponent,children:[
    {path: 'nuevo', component: ReporteCreaeditaComponent},
    {path: 'edicion/:id', component: ReporteCreaeditaComponent}
  ]
},
{
  path:'detalle-venta', component:DetalleVentaComponent,children:[
    {path: 'nuevo', component: DetalleVentaCreaeditaComponent},
    {path: 'edicion/:id', component: DetalleVentaCreaeditaComponent}
    
  ]
},
{
  path:'factura', component:FacturaComponent,children:[
    {path: 'nuevo', component: FacturaCreaeditaComponent},
    {path: 'edicion/:id', component: FacturaCreaeditaComponent}
  ]
}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
