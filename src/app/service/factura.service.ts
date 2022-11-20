import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Factura } from '../model/factura';
import { EMPTY, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class FacturaService {
url: string="http://localhost:8085/factura"
private listafactura = new Subject<Factura[]>()
private confirmarEliminacion=new Subject<Boolean>()
  constructor(private http:HttpClient) { }
  listar(){
    return this.http.get<Factura[]>(this.url);  
  }
  insertar(factura: Factura) {
    return this.http.post(this.url, factura);
  }
  setLista(listaNueva: Factura[]) {
    this.listafactura.next(listaNueva);
  }
  getLista() {
    return this.listafactura.asObservable();
  }
  modificar(factura: Factura) {
    return this.http.put(this.url, factura);
  }
  listarId(id: number) {
    return this.http.get<Factura>(`${this.url}/${id}`);
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
      return this.http.post<Factura[]>(`${this.url}/buscar`, texto);
    }
    return EMPTY;
  }
}
