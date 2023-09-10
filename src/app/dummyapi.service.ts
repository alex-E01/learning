import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class DummyapiService {


  constructor(private http:HttpClient) { 

  }

  getData(url: any) {

    return this.http.get(url).pipe(map((data) => data));

  }


  
}
