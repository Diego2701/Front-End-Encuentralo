import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EMPTY, Subject } from 'rxjs';
import { Producto } from '../model/producto';


@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  url: string = "http://localhost:8085/productos"
  private listaProducto = new Subject<Producto[]>()
  private confirmarEliminacion=new Subject<Boolean>()

  constructor(private http: HttpClient) { }

  listar() {
    return this.http.get<Producto[]>(this.url);
  }
  insertar(producto: Producto) {
    return this.http.post(this.url, producto);
  }
  setLista(listaNueva: Producto[]) {
    this.listaProducto.next(listaNueva);
  }
  getLista() {
    return this.listaProducto.asObservable();
  }
  modificar(producto: Producto) {
    return this.http.put(this.url, producto);
  }
  listarId(id: number) {
    return this.http.get<Producto>(`${this.url}/${id}`);
  }
  eliminar(id: number) {
    return this.http.delete(this.url + "/" + id);
  }
  getConfirmarEliminacion() {
    return this.confirmarEliminacion.asObservable();
  }
  setConfirmarEliminacion(estado: Boolean) {
    this.confirmarEliminacion.next(estado);
  }
  buscar(texto: string) {
    if (texto.length != 0) {
      return this.http.post<Producto[]>(`${this.url}/buscar`, texto);
    }
    return EMPTY;
  }
}
