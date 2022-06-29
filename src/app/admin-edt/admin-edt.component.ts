import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';


import { FurnitureService } from '../furniture.service';
import { Furniture } from '../Furniture';

@Component({
  selector: 'app-admin-edt',
  templateUrl: './admin-edt.component.html',
  styleUrls: ['./admin-edt.component.css']
})

export class AdminEdtComponent implements OnInit {
  @Input() furniture?: Furniture;
  constructor(
    private route: ActivatedRoute,
    private furnitureService: FurnitureService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getFurnitures();
  }

  getFurnitures(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
    this.furnitureService.getFurniture(id)
      .subscribe(furniture => this.furniture = furniture);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    if (this.furniture) {
      this.furnitureService.updateFurniture(this.furniture)
        .subscribe(() => this.goBack());
    }
  }
}
