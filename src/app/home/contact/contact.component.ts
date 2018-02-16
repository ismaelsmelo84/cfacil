/* Recursos nativos ou de terceiros */
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormArray, FormGroup, Validators, AbstractControl, FormControl } from '@angular/forms';

/* Recursos customizados */
import { ValidationService } from '../../_components/validator/validation.service';

/* Tipos de dados */
import { Contact } from './contact.model';

/* Conjuntos de dados */
import { dadosContato } from '../data';

@Component({
  selector: 'app-home-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})

export class ContactComponent implements OnInit {

  dadosContato: any;
  contactForm: FormGroup;

  contact: Contact;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {

    this.contactForm = this.fb.group({
      no_contato: this.fb.control( '', [ Validators.required, Validators.minLength(3) ]),
      no_contatoEmail: this.fb.control( '', Validators.compose([Validators.required, ValidationService.emailValidator ])),
      no_contatoAssunto: this.fb.control( '', [ Validators.required, Validators.minLength(5) ]),
      tx_contatoMsg: this.fb.control( '' )
    });

    Object.assign(this, {
      dadosContato
    });
  }

  public onFormSubmit() {

     if ( this.contactForm.dirty && this.contactForm.valid ) {

       this.contact = new Contact(
         this.contactForm.controls.no_contato.value,
         this.contactForm.controls.no_contatoEmail.value,
         this.contactForm.controls.no_contatoAssunto.value,
         this.contactForm.controls.tx_contatoMsg.value
       );

       const data = JSON.stringify( this.contact );
        console.log( '-----CONTATO em formato JSON-----' );
        console.log( data );

       // this.notificationService.notify(`Você nos enviou uma mensagem com o assunto ${this.contactForm.controls.no_contatoAssunto.value}`)
     }
   }

   /* Reseta o formulário */
   public resetaForm() {

      this.contactForm.controls.no_contato.reset();
      this.contactForm.controls.no_contatoAssunto.reset();
      this.contactForm.controls.tx_contatoMsg.reset();
   }
}
