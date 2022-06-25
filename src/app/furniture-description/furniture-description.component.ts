import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { FurnitureService } from '../furniture.service';
import { Furniture } from '../Furniture';

@Component({
  selector: 'app-furniture-description',
  templateUrl: './furniture-description.component.html',
  styleUrls: ['./furniture-description.component.css']
})
export class FurnitureDescriptionComponent implements OnInit {
  furniture: Furniture | undefined;

  constructor(
    private route: ActivatedRoute,
    private furnitureService: FurnitureService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.furnitureService.getFurniture(id).subscribe(furniture => this.furniture = furniture)
  }

}
