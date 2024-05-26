import { Component } from '@angular/core';
import { Color, Hero } from '../../interfaces/hero';

@Component({
  selector: 'product-order',
  templateUrl: './order.component.html',
  styles: [
  ]
})
export class OrderComponent {

  public isUpperCase: boolean = false;

  public heroes: Hero[] = [
    {
      name: 'Superman',
      canFly: true,
      color: Color.blue
    },
    {
      name: 'Spiderman',
      canFly: false,
      color: Color.red
    },
    {
      name: 'Batman',
      canFly: false,
      color: Color.black
    },
    {
      name: 'Linterna Verde',
      canFly: true,
      color: Color.green
    }


  ]

  toogleUpperCase():void {
    this.isUpperCase = !this.isUpperCase;
  }


}
