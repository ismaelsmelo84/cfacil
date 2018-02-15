export class Contact {

  no_contato: string;
  no_contatoEmail: string;
  no_contatoAssunto: string;
  tx_contatoMsg: string;

  constructor(no_contato: string, no_contatoEmail: string, no_contatoAssunto: string, tx_contatoMsg: string) {

    this.no_contato = no_contato;
    this.no_contatoEmail = no_contatoEmail;
    this.no_contatoAssunto = no_contatoAssunto;
    this.tx_contatoMsg = tx_contatoMsg;
  }
}
