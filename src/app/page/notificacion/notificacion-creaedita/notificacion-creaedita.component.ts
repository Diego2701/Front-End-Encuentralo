import { Component, OnInit } from '@angular/core';
import { NotificacionService } from 'src/app/service/notificacion.service';
import { Notificacion } from 'src/app/model/notificacion';
import { ActivatedRoute, Params, Router } from '@angular/router';
@Component({
  selector: 'app-notificacion-creaedita',
  templateUrl: './notificacion-creaedita.component.html',
  styleUrls: ['./notificacion-creaedita.component.css']
})
export class NotificacionCreaeditaComponent implements OnInit {
  notificacion: Notificacion = new Notificacion();
  mensaje: string = "";
  edicion: boolean = false;
  id: number = 0;
  constructor(private notificacionService: NotificacionService,
    private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.edicion = data['id'] != null;
      this.init();
    });
  }
  aceptar(): void {
    if (this.notificacion.fechaCaducidad.length > 0) {
      if (this.edicion) {
        this.notificacionService.modificar(this.notificacion).subscribe(data => {
          this.notificacionService.listar().subscribe(data => {
            this.notificacionService.setLista(data);
          })
        })
      } else {
        this.notificacionService.insertar(this.notificacion).subscribe(data => {
          this.notificacionService.listar().subscribe(data => {
            this.notificacionService.setLista(data);
          })
        })
      }
      this.router.navigate(['notificacion']);
    } else {
      this.mensaje = "Complete los valores requeridos";
    }
  }

  init() {
    if (this.edicion) {
      this.notificacionService.listarId(this.id).subscribe(data => {
        this.notificacion = data;
      })
    }

  }

}
