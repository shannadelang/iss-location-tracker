import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import { IssInfoService } from '../iss-info.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-leaflet',
  templateUrl: './leaflet.component.html',
  styleUrls: ['./leaflet.component.scss']
})
export class LeafletComponent implements OnInit {
  map;

  constructor() { }

  ngOnInit(): void {
  }

  initMap() {
    this.map = L.map('map', {
      center: [ 39.8282, -98.5795 ],
      zoom: 4
    });
  
    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(this.map);
  }

  getIssLocation(){
    //this.issService.issCoordinates();
  }
  
}
