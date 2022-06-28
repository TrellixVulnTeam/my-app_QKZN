import { Component, OnInit } from '@angular/core';
import { FurnitureService } from '../furniture.service';
import { Furniture } from '../Furniture';
import { Sort } from '@angular/material/sort';

@Component({
  selector: 'app-admin-view',
  templateUrl: './admin-view.component.html',
  styleUrls: ['./admin-view.component.css']
})
export class AdminViewComponent implements OnInit {
  
  furnitures: Furniture[] = [];

  constructor(private furnitureService: FurnitureService) {}
  searchText = '';

  getFurniture(): void{
    this.furnitureService.getFurnitures().subscribe(furnitures => this.furnitures = furnitures);
  }
  ngOnInit(): void {
    this.getFurniture();
  }
  newFurnitureObj: Furniture = {id:1000,price:200,name:"Ingen",description:"Ingen",image:"None"};

  newFurniture(): void{
    this.newFurnitureObj.id=this.furnitures.length+1;
    this.newFurnitureObj.name="Ingen";
    this.newFurnitureObj.price=0;
    this.newFurnitureObj.image="https://user-images.githubusercontent.com/43302778/106805462-7a908400-6645-11eb-958f-cd72b74a17b3.jpg";
    this.newFurnitureObj.description="Ingen";
    console.log("Clicked");
    this.furnitureService.addFurniture(this.newFurnitureObj);
    this.getFurniture();
    this.sortData({active: 'id', direction: 'asc'});
  }

  sortData(sort: Sort) {
    console.log(sort);
    const data = this.furnitures.slice();
    if (!sort.active || sort.direction === '') {
      this.furnitures = data;
      return;
    }

    this.furnitures = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'name':
          return compare(a.name, b.name, isAsc);
        case 'price':
          return compare(a.price, b.price, isAsc);
        case 'id':
          return compare(a.id, b.id, isAsc);
        default:
          return 0;
      }
    });
  }
}

function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
