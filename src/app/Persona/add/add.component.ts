import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../../Service/service.service';
import { Persona } from '../../Modelo/Persona';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  persona: Persona = new Persona();

  constructor(private router: Router, private service: ServiceService) { }

  ngOnInit() {
  }

  Guardar(persona: Persona) {
    this.service.createPersona(persona)
    .subscribe(data => {
      alert('Se agrego exitosamente');
      this.router.navigate(['listar']);
    } );
  }
}
