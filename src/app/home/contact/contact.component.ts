import { Component, OnInit } from '@angular/core';
import { dadosContato } from '../data';
import { FormBuilder, FormArray, FormGroup, Validators, AbstractControl } from '@angular/forms';

import { ValidationService } from '../../_components/validator/validation.service';

@Component({
  selector: 'app-home-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})

export class ContactComponent implements OnInit {

  dadoContato: any
  contactForm: any

  constructor(private fb: FormBuilder) {

    Object.assign(this, {
      dadosContato
    });
  }

  ngOnInit() {
    this.contactForm = this.fb.group({
      no_contato: ['', [Validators.required, Validators.minLength(3)]],
      no_contatoEmail: ['', [Validators.required, ValidationService.emailValidator]],
      no_contatoAssunto: ['', [Validators.required, Validators.minLength(5)]],
      tx_contatoMsg: ['', [Validators.required, Validators.minLength(25)]]
    });
  }

  saveContact() {
    if (this.contactForm.dirty && this.contactForm.valid) {
      console.log(`Nome: ${this.contactForm.value.no_contato} E-mail: ${this.contactForm.value.no_contatoEmail}`);
    }
  }
}
