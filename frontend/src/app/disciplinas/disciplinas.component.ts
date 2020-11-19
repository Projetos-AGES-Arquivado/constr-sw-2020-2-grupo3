import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({ templateUrl: 'disciplinas.component.html' })
export class DisciplinasComponent {
  constructor(
    private router: Router
  ) {}

  navigate() {
    this.router.navigate(['/']);
  }
}
