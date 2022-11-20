import { DetalleVenta } from './detalle-venta';
import { Consumidor } from './consumidor';

export class Factura{
    id:number=0;
    consumidor:Consumidor=new Consumidor();
    detalleVenta: DetalleVenta=new DetalleVenta();
}