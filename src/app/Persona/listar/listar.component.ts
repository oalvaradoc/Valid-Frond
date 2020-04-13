import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService  } from '../../Service/service.service';
import { Persona } from 'src/app/Modelo/Persona';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  personas: Persona[];
  persona: Persona = new Persona();
  activo = true;

  constructor(private service: ServiceService, private router: Router) { }

  ngOnInit() {
    this.service.getPersonas()
    .subscribe(data => {this.personas = data;
                        console.log(data); });
  }

  Editar(persona: Persona): void {
    localStorage.setItem('id', persona.id.toString());
    this.router.navigate(['edit']);
  }

  Delete(persona: Persona): void {
    this.service.deletePersona(persona)
    .subscribe(data => {
      this.personas = this.personas.filter(p => p !== persona);
      alert('Usuario eliminado ......');
    });
  }

  Actualizar(persona: Persona) {
    const element = document.getElementById('checked_' + persona.id) as HTMLInputElement;

    const isChecked = element.checked;

    persona.procesado = isChecked;

    this.service.updatePersona(persona)
    .subscribe(data => {
      this.persona = data;
      console.log(data);
    });
  }

  Procesado(): void {
    this.ngOnInit();
    alert( 'Se Actualizo con Exito...!!!');
  }

}
