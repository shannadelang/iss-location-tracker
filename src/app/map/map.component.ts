import { Component, OnInit, Inject } from '@angular/core';
import { LeafletComponent } from '../leaflet/leaflet.component';
import { IssInfoService } from '../iss-info.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  private leaflet = new LeafletComponent();
  

  constructor(private issInfoService: IssInfoService) {}

  ngOnInit(): void {
  }

  ngAfterViewInit(){
    console.log("AfterViewinit");
    this.leaflet.initMap();
    this.issInfoService.issCoordinates();
  }

}
