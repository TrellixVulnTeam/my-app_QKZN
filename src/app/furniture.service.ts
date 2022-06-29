import { Injectable } from '@angular/core';
import { Furniture } from './Furniture';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FurnitureService {

  private furnitureUrl = "api/furnitures";

  getFurnitures(): Observable<Furniture[]> {
    return this.http.get<Furniture[]>(this.furnitureUrl)
      .pipe(
        tap(_ => console.log('fetched furnitures')),
        catchError(this.handleError<Furniture[]>('getFurniture', []))
      );
  }

  getFurniture(id: number): Observable<Furniture> {
    const url = `${this.furnitureUrl}/${id}`;
    return this.http.get<Furniture>(url).pipe(
      tap(_ => console.log(`fetched furniture id=${id}`)),
      catchError(this.handleError<Furniture>(`getFurniture id=${id}`))
    );
  }

  updateFurniture(furniture: Furniture): Observable<any> {
    return this.http.put(this.furnitureUrl, furniture, this.httpOptions).pipe(
      tap(_ => console.log(`updated furniture id=${furniture.id}`)),
      catchError(this.handleError<any>('updateFurniture'))
    );
  }

  deleteFurniture(id: number): Observable<Furniture> {
    const url = `${this.furnitureUrl}/${id}`;
  
    return this.http.delete<Furniture>(url, this.httpOptions).pipe(
      tap(_ => console.log(`deleted furniture id=${id}`)),
      catchError(this.handleError<Furniture>('deleteFurniture'))
    );
  }
  newFurniturePrefab:Furniture = {name:"New furniture",description:"Description",price:0,id:1000,image:"https://image.shutterstock.com/image-vector/missing-picture-page-website-design-260nw-1552421075.jpg"}

  addNewFurniture(id:number): Observable<Furniture>{
    this.newFurniturePrefab.id = id;
    return this.http.post<Furniture>(this.furnitureUrl, this.newFurniturePrefab, this.httpOptions).pipe(
      tap((newFurniture: Furniture) => console.log(`added furniture w/ id=${this.newFurniturePrefab.id}`)),
      catchError(this.handleError<Furniture>('addFurniture'))
    );
  }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient
  ) { }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
