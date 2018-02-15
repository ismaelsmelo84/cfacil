import { OrderCheckout } from '../order/order.model';

export class SOrder {

  no_emailBusca: string;
  results: ResultItem [];

  constructor(no_emailBusca: string) {
    this.no_emailBusca = no_emailBusca;
  }

  public getResults(): ResultItem {
    let results = new ResultItem();
    return results;
  }

  private getExistOrderToEmail() {

    return true;
  }

  public getReturnOrderStatus(i: number): string {

    return 'Realizado';
  }
}

export class ResultItem {

  no_email: string;
  orderCheckout: OrderCheckout;
  ic_status: string;

  constructor() {

  }
}
