import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Reporte } from '../model/reporte';
import { EMPTY, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ReporteService {
url:string="http://localhost:8085/reporte"
private listaReporte = new Subject<Reporte[]>()
private confirmarEliminacion=new Subject<Boolean>()
  constructor(private http:HttpClient) { }
  listar(){
    return this.http.get<Reporte[]>(this.url);  
  }

  insertar(reporte: Reporte) {
    return this.http.post(this.url, reporte);
  }
  setLista(listaNueva: Reporte[]) {
    this.listaReporte.next(listaNueva);
  }
  getLista() {
    return this.listaReporte.asObservable();
  }
  modificar(reporte: Reporte) {
    return this.http.put(this.url, reporte);
  }
  listarId(id: number) {
    return this.http.get<Reporte>(`${this.url}/${id}`);
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
      return this.http.post<Reporte[]>(`${this.url}/buscar`, texto);
    }
    return EMPTY;
  }
}
