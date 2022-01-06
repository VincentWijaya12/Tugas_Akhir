import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Devision } from '../model/devision.model';

const baseUrl = 'http://spa-api.aqiladigital.com/api/divisions'
@Injectable({
  providedIn: 'root'
})
export class DivisionService {

  constructor(private http:HttpClient) { }

  getAll():Observable<Devision>[]>{
    return this.http.get<Devision[]>(baseUrl);
}
