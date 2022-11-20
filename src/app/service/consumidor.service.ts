import { EMPTY, Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Consumidor } from '../model/consumidor';

@Injectable({
  providedIn: 'root'
})
export class ConsumidorService {
url:string="http://localhost:8085/consumidor"
private listaCambio = new Subject<Consumidor[]>()
private confirmaEliminacion = new Subject<Boolean>()
  constructor(private http:HttpClient) { }
  listar(){
    return this.http.get<Consumidor[]>(this.url);
  }
  insertar(consumidor:Consumidor){
    return this.http.post(this.url,consumidor);
  }
  setLista(listaNueva: Consumidor[]){
    this.listaCambio.next(listaNueva);
  }
  getLista(){
    return this.listaCambio.asObservable();
  }
  modificar(consumidor: Consumidor){
    return this.http.put(this.url, consumidor);
  }
  listarId(id:number){
    return this.http.get<Consumidor>(`${this.url}/${id}`);
  }
  eliminar(id:number){
    return this.http.delete(this.url + "/" + id);
  }
  getConfirmaEliminacion(){
    return this.confirmaEliminacion.asObservable();
  }
  setConfirmaEliminacion(estado: Boolean){
    this.confirmaEliminacion.next(estado);
  }
  buscar (texto: string){
    if(texto.length!=0){
      return this.http.post<Consumidor[]>(`${this.url}/buscar`, texto);
    }
    return EMPTY;
  }
}
