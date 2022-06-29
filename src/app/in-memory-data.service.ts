import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Furniture } from './Furniture';
@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const furnitures = [
      {id:1,name:'BILLY', description:'Reol',price:299,image:"https://www.ikea.com/dk/da/images/products/billy-reol-hvid__0625599_pe692385_s5.jpg?f=xl"},
      {id:2,name:'BILLY', description:'Reol',price:199,image:"https://www.ikea.com/dk/da/images/products/billy-reol-hvid__0644780_pe702956_s5.jpg?f=xl"},
      {id:3,name:'BILLY', description:'Reol',price:219,image:"https://www.ikea.com/dk/da/images/products/gersby-reol-hvid__0251910_pe390723_s5.jpg?f=xl"},
      {id:4,name:'ÄPPLARYD', description:'2-pers, sofa',price:6299,image:"https://www.ikea.com/dk/da/images/products/aepplaryd-2-pers-sofa-lejde-lysegra__0992863_pe820294_s5.jpg?f=xl"},
      {id:5,name:'FRIHETEN', description:'Hjørnesovesofa med opbevaring, med ekstra ryghynder',price:6299,image:'https://www.ikea.com/dk/da/images/products/friheten-hjornesovesofa-med-opbevaring-med-ekstra-ryghynder-hyllie-morkegra__0796779_pe766564_s5.jpg?f=xl'},
    ];
    return {furnitures};
  }

  genId(furnitures: Furniture[]): number {
    return furnitures.length > 0 ? Math.max(...furnitures.map(Furniture => Furniture.id)) + 1 : 11;
  }
}