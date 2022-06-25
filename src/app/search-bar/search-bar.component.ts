import { Component, OnInit } from '@angular/core';
import { FurnitureService } from '../furniture.service';
import { Furniture } from '../Furniture';
import { FilterPipe } from '../filter.pipe';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  furnitures: Furniture[] = [];


  constructor(private furnitureService: FurnitureService) { }

  getFurniture(): void{
    this.furnitureService.getFurnitures().subscribe(furnitures => this.furnitures = furnitures);
  }

  ngOnInit(): void {
    this.getFurniture(); 
  }

}
