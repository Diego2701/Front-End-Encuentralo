import { RespuestaOne } from './../model/respuestaone';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Donacion } from '../model/donacion';
import { EMPTY, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DonacionService {
url: string="http://localhost:8085/donacion"
private listaDonacion = new Subject<Donacion[]>()
private confirmarEliminacion=new Subject<Boolean>()
  constructor(private http: HttpClient) { }

listar(){
  return this.http.get<Donacion[]>(this.url);
}
insertar(donacion: Donacion) {
  return this.http.post(this.url, donacion);
}
setLista(listaNueva:  Donacion[]) {
  this.listaDonacion.next(listaNueva);
}
getLista() {
  return this.listaDonacion.asObservable();
}
modificar(donacion: Donacion) {
  return this.http.put(this.url, donacion);
}
listarId(id: number) {
  return this.http.get<Donacion>(`${this.url}/${id}`);
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
    return this.http.post<Donacion[]>(`${this.url}/buscar`, texto);
  }
  return EMPTY;
}

buscarMarcaProducto(){
  return this.http.get<RespuestaOne[]>(`${this.url}/marcas`);
}
}
