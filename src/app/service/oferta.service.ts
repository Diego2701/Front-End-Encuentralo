import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Oferta } from '../model/oferta';
import { EMPTY, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class OfertaService {
url:string="http://localhost:8085/oferta"
private listaOferta = new Subject<Oferta[]>()
private confirmarEliminacion=new Subject<Boolean>()

  constructor(private http:HttpClient) { }
  listar(){
    return this.http.get<Oferta[]>(this.url);  
  }

  insertar(oferta: Oferta) {
    return this.http.post(this.url, oferta);
  }
  setLista(listaNueva:  Oferta[]) {
    this.listaOferta.next(listaNueva);
  }
  getLista() {
    return this.listaOferta.asObservable();
  }
  modificar(oferta: Oferta) {
    return this.http.put(this.url, oferta);
  }
  listarId(id: number) {
    return this.http.get<Oferta>(`${this.url}/${id}`);
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
      return this.http.post<Oferta[]>(`${this.url}/buscar`, texto);
    }
    return EMPTY;
  }

}
