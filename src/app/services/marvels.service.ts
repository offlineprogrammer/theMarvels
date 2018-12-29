import { Injectable } from '@angular/core';
import { character } from '../interfaces/character';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { HttpParamsOptions } from '@angular/common/http/src/params';


const myObject: any = { hash: 'thisThing'};
const httpParams: HttpParamsOptions = { fromObject: myObject } as HttpParamsOptions

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'}),
  httpParams: new HttpParams(httpParams)
};
const apiUrl = "http://gateway.marvel.com/v1/public/characters?apikey=82744fdc803f1e31bcc6cbedcbe607c0";

@Injectable({
  providedIn: 'root'
})
export class MarvelsService {

  public Marvels : character[] = [];

  constructor(private http: HttpClient) { }


  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError('Something bad happened; please try again later.');
  }
  
  private extractData(res: Response) {
    console.log(res);
    let body = res;
    return body || { };
  }


  load() {
    return new Promise(resolve => {
      this.http.get(apiUrl,httpOptions).subscribe(data => {
        this.Marvels = data.data.results.map(item => new character(item));
        console.log(this.Marvels);
        resolve(true);
      }, err => {
        console.log(err);
      });
    });
  }


  // load(): Observable<any> {
  //   return this.http.get(apiUrl, httpOptions).pipe(
  //     map(this.extractData),
  //     catchError(this.handleError));
  // }
  

}
