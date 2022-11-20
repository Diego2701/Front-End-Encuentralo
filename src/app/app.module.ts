import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CategoriaComponent } from './page/categoria/categoria.component';
import { ProductoComponent } from './page/producto/producto.component';
import { VendedorComponent } from './page/vendedor/vendedor.component';
import { VendedorListarComponent } from './page/vendedor/vendedor-listar/vendedor-listar.component';
import { ProductoListarComponent } from './page/producto/producto-listar/producto-listar.component';
import { CategoriaListarComponent } from './page/categoria/categoria-listar/categoria-listar.component';
import{MatTableModule} from '@angular/material/table';
import { DonacionComponent } from './page/donacion/donacion.component';
import { NotificacionComponent } from './page/notificacion/notificacion.component';
import { NotificacionListarComponent } from './page/notificacion/notificacion-listar/notificacion-listar.component';
import { DonacionListarComponent } from './page/donacion/donacion-listar/donacion-listar.component';
import { ConsumidorComponent } from './page/consumidor/consumidor.component';
import { OfertaComponent } from './page/oferta/oferta.component';
import { ReporteComponent } from './page/reporte/reporte.component';
import { FacturaComponent } from './page/factura/factura.component';
import { DetalleVentaComponent } from './page/detalle-venta/detalle-venta.component';
import { DetalleVentaListarComponent } from './page/detalle-venta/detalle-venta-listar/detalle-venta-listar.component';
import { ConsumidorListarComponent } from './page/consumidor/consumidor-listar/consumidor-listar.component';
import { OfertaListarComponent } from './page/oferta/oferta-listar/oferta-listar.component';
import { FacturaListarComponent } from './page/factura/factura-listar/factura-listar.component';
import { ReporteListarComponent } from './page/reporte/reporte-listar/reporte-listar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import {MatMenuModule} from '@angular/material/menu';
import { NotificacionDialogoComponent } from './page/notificacion/notificacion-listar/notificacion-dialogo/notificacion-dialogo.component';
import { NotificacionBuscarComponent } from './page/notificacion/notificacion-buscar/notificacion-buscar.component';
import { NotificacionCreaeditaComponent } from './page/notificacion/notificacion-creaedita/notificacion-creaedita.component';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';

import { MatInputModule } from '@angular/material/input';

import { CategoriaCreaeditaComponent } from './page/categoria/categoria-creaedita/categoria-creaedita.component';
import { CategoriaDialogoComponent } from './page/categoria/categoria-listar/categoria-dialogo/categoria-dialogo.component';
import { CategoriaBuscarComponent } from './page/categoria/categoria-buscar/categoria-buscar.component';
import { ConsumidorBuscarComponent } from './page/consumidor/consumidor-buscar/consumidor-buscar.component';
import { ConsumidorCreaeditaComponent } from './page/consumidor/consumidor-creaedita/consumidor-creaedita.component';
import { ConsumidorDialogoComponent } from './page/consumidor/consumidor-listar/consumidor-dialogo/consumidor-dialogo.component';
import { VendedorDialogoComponent } from './page/vendedor/vendedor-listar/vendedor-dialogo/vendedor-dialogo.component';
import { VendedorCreaeditaComponent } from './page/vendedor/vendedor-creaedita/vendedor-creaedita.component';
import { VendedorBuscarComponent } from './page/vendedor/vendedor-buscar/vendedor-buscar.component';
import { ProductoCreaeditaComponent } from './page/producto/producto-creaedita/producto-creaedita.component';
import { ProductoDialogoComponent } from './page/producto/producto-listar/producto-dialogo/producto-dialogo.component';
import { MatSelectModule } from '@angular/material/select';
import { ProductoBuscarComponent } from './page/producto/producto-buscar/producto-buscar.component';
import { OfertaCreaeditaComponent } from './page/oferta/oferta-creaedita/oferta-creaedita.component';
import { OfertaBuscarComponent } from './page/oferta/oferta-buscar/oferta-buscar.component';
import { OfertaDialogoComponent } from './page/oferta/oferta-listar/oferta-dialogo/oferta-dialogo.component';
import { DonacionCreaeditaComponent } from './page/donacion/donacion-creaedita/donacion-creaedita.component';
import { DonacionBuscarComponent } from './page/donacion/donacion-buscar/donacion-buscar.component';
import { DonacionDialogoComponent } from './page/donacion/donacion-listar/donacion-dialogo/donacion-dialogo.component';
import { ReporteCreaeditaComponent } from './page/reporte/reporte-creaedita/reporte-creaedita.component';
import { ReporteBuscarComponent } from './page/reporte/reporte-buscar/reporte-buscar.component';
import { ReporteDialogoComponent } from './page/reporte/reporte-listar/reporte-dialogo/reporte-dialogo.component';
import { DetalleVentaCreaeditaComponent } from './page/detalle-venta/detalle-venta-creaedita/detalle-venta-creaedita.component';

import { DetalleVentaDialogoComponent } from './page/detalle-venta/detalle-venta-listar/detalle-venta-dialogo/detalle-venta-dialogo.component';
import { FacturaCreaeditaComponent } from './page/factura/factura-creaedita/factura-creaedita.component';

import { FacturaDialogoComponent } from './page/factura/factura-listar/factura-dialogo/factura-dialogo.component';
import { FacturaBuscarComponent } from './page/factura/factura-buscar/factura-buscar.component';
import { DetalleVentaBuscarComponent } from './page/detalle-venta/detalle-venta-buscar/detalle-venta-buscar.component';
import { VendedorDominioComponent } from './page/vendedor/vendedor-dominio/vendedor-dominio.component';
import { VendedorDominiotwoComponent } from './page/vendedor/vendedor-dominiotwo/vendedor-dominiotwo.component';
import { DonacionMarcaComponent } from './page/donacion/donacion-marca/donacion-marca.component';
import { NotificacionFechaComponent } from './page/notificacion/notificacion-fecha/notificacion-fecha.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoriaComponent,
    ProductoComponent,
    VendedorComponent,
    VendedorListarComponent,
    ProductoListarComponent,
    CategoriaListarComponent,
    DonacionComponent,
    NotificacionComponent,
    NotificacionListarComponent,
    DonacionListarComponent,
    ConsumidorComponent,
    OfertaComponent,
    ReporteComponent,
    FacturaComponent,
    DetalleVentaComponent,
    DetalleVentaListarComponent,
    ConsumidorListarComponent,
    OfertaListarComponent,
    FacturaListarComponent,
    ReporteListarComponent,
    NavBarComponent,
    NotificacionDialogoComponent,
    NotificacionBuscarComponent,
    NotificacionCreaeditaComponent,
    CategoriaCreaeditaComponent,
    CategoriaDialogoComponent,
    CategoriaBuscarComponent,
    ConsumidorBuscarComponent,
    ConsumidorCreaeditaComponent,
    ConsumidorDialogoComponent,
    VendedorDialogoComponent,
    VendedorCreaeditaComponent,
    VendedorBuscarComponent,
    ProductoCreaeditaComponent,
    ProductoDialogoComponent,
    ProductoBuscarComponent,
    OfertaCreaeditaComponent,
    OfertaBuscarComponent,
    OfertaDialogoComponent,
    DonacionCreaeditaComponent,
    DonacionBuscarComponent,
    DonacionDialogoComponent,
    ReporteCreaeditaComponent,
    ReporteBuscarComponent,
    ReporteDialogoComponent,
    DetalleVentaCreaeditaComponent,
    DetalleVentaDialogoComponent,
    FacturaCreaeditaComponent,
   
    FacturaDialogoComponent,
        FacturaBuscarComponent,
        DetalleVentaBuscarComponent,
        VendedorDominioComponent,
        VendedorDominiotwoComponent,
        DonacionMarcaComponent,
        NotificacionFechaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatDialogModule,
    FormsModule,
    MatInputModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
