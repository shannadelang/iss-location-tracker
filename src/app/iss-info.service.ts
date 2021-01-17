import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class IssInfoService {
  urlCurrentLocation = "http://api.open-notify.org/iss-now.json";
  urlPeopleInSpace = "http://api.open-notify.org/astros.json";

  constructor(private httpClient:HttpClient) { 
    this.issCoordinates();
  }

  getCords(): Observable<any>{
    return this.httpClient.get(this.urlCurrentLocation);
  }

  issCoordinates(){
    this.getCords().subscribe(result => {
      console.log(result);
    })
  }
}
