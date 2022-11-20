import { Vendedor } from './vendedor';
import { Categoria } from './categoria';
import { Notificacion} from './notificacion';
export class Producto {
    id: number = 0;
    desProducto: string = "";
    marcaProducto: string = "";
    categoria: Categoria = new Categoria();
    vendedor: Vendedor = new Vendedor();
    notificacion: Notificacion= new Notificacion();

}