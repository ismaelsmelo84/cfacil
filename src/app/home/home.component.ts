import { Component } from '@angular/core';
import { ativacao } from './data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  ativacao: any;

  constructor() {
    Object.assign(this, {
      ativacao
    });
  }
}
