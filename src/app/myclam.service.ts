import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Cards } from './cards';
import { filter, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MyclamService {
  constructor(private http: HttpClient) { }
  getData() {
  // https://jsonp.afeld.me/?callback=?&url=
    console.log('kkk');
    return this.http.get<Cards[]>('https://jsonp.afeld.me/?url=https%3A%2F%2Fapi.myglamapp.pl%2Fapi%2Fcategories%3Flanguage%3DEN').pipe(
       map((res: any ) => res.data)
    );
 }
}
