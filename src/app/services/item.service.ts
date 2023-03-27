import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from '../models/item';


@Injectable({
  providedIn: 'root'
})
export class ItemService {

  items: Item[] = [
    {
      id: 0,
      title: 'producto1',
      price: 10.5,
      quantity: 4,
      completed: false
    },
    {
      id: 1,
      title: 'producto2',
      price: 3.5,
      quantity: 8,
      completed: true
    },
    {
      id: 2,
      title: 'producto3',
      price: 300,
      quantity: 1,
      completed: false
    }
  ];

  constructor() { }

  getItems() {

    return this.items;
     
  }

  addItem(item:Item) {
    this.items.unshift(item);
  }
}


