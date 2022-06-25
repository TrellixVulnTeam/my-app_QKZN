import { Component, OnInit } from '@angular/core';
import { FurnitureService } from '../furniture.service';
import { Furniture } from '../Furniture';
import { SearchBarComponent } from '../search-bar/search-bar.component';

@Component({
  selector: 'app-furniture',
  templateUrl: './furniture.component.html',
  styleUrls: ['./furniture.component.css']
})
export class FurnitureComponent implements OnInit {
  furnitures: Furniture[] = [];

  constructor(private furnitureService: FurnitureService) { }
  searchText = '';
  getFurniture(): void{
    this.furnitureService.getFurnitures().subscribe(furnitures => this.furnitures = furnitures);
  }

  ngOnInit(): void {
    this.getFurniture();
  }

}
