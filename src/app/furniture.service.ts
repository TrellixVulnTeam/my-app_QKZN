import { Injectable } from '@angular/core';
import { Furniture } from './Furniture';
import { FURNITURE } from './mock-furniture';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FurnitureService {

  getFurnitures(): Observable<Furniture[]> {
    const furnitures = of(FURNITURE);
    return furnitures;
  }
  getFurniture(id: number): Observable<Furniture> {
    const furniture = FURNITURE.find(h=>h.id===id)!;
    return of(furniture);
  }
  constructor() { }
}
