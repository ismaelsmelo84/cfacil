import { Component } from '@angular/core';
import { dadosContato } from '../data';

import { ValidationService } from '../../_components/validator/validation.service';

@Component({
  selector: 'app-home-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})

export class ContactComponent {

  dadoContato: any;

  constructor() {
    Object.assign(this, {
      dadosContato
    });
  }
}
