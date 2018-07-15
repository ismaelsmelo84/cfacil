/* Recursos nativos ou de terceiros */
import { Component, OnInit  } from '@angular/core';
import { FormBuilder, FormArray, FormGroup, Validators, AbstractControl } from '@angular/forms';

/* Recursos customizados */
import { ValidationService } from '../../_components/validator/validation.service';

/* Tipos de dados */
import { SOrder } from './search-order.model';

/* Conjuntos de dados */
import { searchOrder } from '../data';

@Component({
  selector: 'app-home-search-order',
  templateUrl: 'search-order.component.html',
  styleUrls: ['./search-order.component.css']
})

export class SearchOrderComponent implements OnInit {

  searchForm: any;
  searchOrder: any;

  order: SOrder;

  constructor( private fb: FormBuilder ) {
    Object.assign(this, {
      searchOrder
    });
  }

  ngOnInit() {
    this.searchForm = this.fb.group({
      no_emailBusca: [ '', [ Validators.required, ValidationService.emailValidator ] ]
    });
  }

  public onFormSubmit() {

     if ( this.searchForm.dirty && this.searchForm.valid ) {

       this.order = new SOrder( this.searchForm.controls.no_emailBusca.value );

       // tslint:disable-next-line:prefer-const
       let data = JSON.stringify( this.order );
      console.log( '-----FILTRO DA PESQUISA em formato JSON-----' );
      console.log( data );
     }
   }

   public getFilter(): string {
     const ret = this.searchForm.controls.no_emailBusca.value;
     return ret;
   }
}
