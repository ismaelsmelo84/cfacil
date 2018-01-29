import { Injectable } from '@angular/core'
import {HttpClient, HttpHeaders} from '@angular/common/http'
import {Observable} from 'rxjs/Observable'
import 'rxjs/add/operator/map'
import {configAPI} from '../config_api'

@Injectable()
export class OrdersService {

  orders: any = [
      {id: 1, name: 'teste1'},
      {id: 2, name: 'teste1'},
      {id: 3, name: 'teste1'}
    ]

  constructor() {

  }

  //Consultar pedidos realizados
  public searchOrder(){
    return this.orders
  }

  //Consultar pedidos realizados informando o e-mail
  public searchOrderByEmail(no_email: string){

  }
}

/*

import {Injectable} from '@angular/core'

import {HttpClient, HttpHeaders} from '@angular/common/http'
import {Observable} from 'rxjs/Observable'
import 'rxjs/add/operator/map'

import {ShoppingCartService} from '../restaurant-detail/shopping-cart/shopping-cart.service'
import {CartItem} from '../restaurant-detail/shopping-cart/cart-item.model'
import {Order, OrderItem} from './order.model'

import {URL_API} from '../app.api'
import {LoginService} from '../security/login/login.service'

@Injectable()
export class OrderService {

  constructor(private cartService: ShoppingCartService,
              private http: HttpClient) {}

  itemsValue(): number {
    return this.cartService.total()
  }

  cartItems(): CartItem[] {
    return this.cartService.items
  }

  increaseQty(item: CartItem) {
    this.cartService.increaseQty(item)
  }

  decreaseQty(item: CartItem) {
    this.cartService.decreaseQty(item)
  }

  remove(item: CartItem) {
    this.cartService.removeItem(item)
  }

  clear() {
    this.cartService.clear()
  }

  checkOrder(order: Order): Observable<String> {
    return this.http.post<Order>(`${URL_API}/orders`, order)
                    .map(order=>order.id)
  }
}
*/
