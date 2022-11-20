import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DetalleVenta } from '../model/detalle-venta';
import { EMPTY, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DetalleVentaService {
  url: string = "http://localhost:8085/detalleVenta"
  private listaVenta = new Subject<DetalleVenta[]>()
  private confirmarEliminacion=new Subject<Boolean>()
  constructor(private http: HttpClient) { }
  listar() {
    return this.http.get<DetalleVenta[]>(this.url);
  }
  insertar(detallev: DetalleVenta) {
    return this.http.post(this.url, detallev);
  }
  setLista(listaNueva: DetalleVenta[]) {
    this.listaVenta.next(listaNueva);
  }
  getLista() {
    return this.listaVenta.asObservable();
  }
  modificar(detallev: DetalleVenta) {
    return this.http.put(this.url, detallev);
  }
  listarId(id: number) {
    return this.http.get<DetalleVenta>(`${this.url}/${id}`);
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
      return this.http.post<DetalleVenta[]>(`${this.url}/buscar`, texto);
    }
    return EMPTY;
  }
}
