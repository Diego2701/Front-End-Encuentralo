import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Notificacion } from '../model/notificacion';
import { EMPTY, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class NotificacionService {
url: string ="http://localhost:8085/notificacion"
private listaCambio = new Subject<Notificacion[]>()
private confirmaEliminacion = new Subject<Boolean>()
  constructor(private http:HttpClient) { }

listar(){
  return this.http.get<Notificacion[]>(this.url);
}
insertar(notificacion: Notificacion) {
  return this.http.post(this.url,notificacion);
}
setLista(listaNueva: Notificacion[]) {
  this.listaCambio.next(listaNueva);
}
getLista() {
  return this.listaCambio.asObservable();
}
modificar(notificacion: Notificacion) {
  return this.http.put(this.url, notificacion);
}
listarId(id: number) {
  return this.http.get<Notificacion>(`${this.url}/${id}`);
}
eliminar(id: number) {
  return this.http.delete(this.url + "/" + id);
}
getConfirmaEliminacion() {
  return this.confirmaEliminacion.asObservable();
}
setConfirmaEliminacion(estado: Boolean) {
  this.confirmaEliminacion.next(estado);
}
buscar(texto: string) {
  if (texto.length != 0) {
    return this.http.post<Notificacion[]>(`${this.url}/buscar`, texto);
  }
  return EMPTY;
}

buscarfecha(){
  return this.http.get<Notificacion[]>(`${this.url}/buscarFecha`)
}
  
}


