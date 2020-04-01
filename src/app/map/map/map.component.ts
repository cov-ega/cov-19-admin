import {AfterViewInit, Component, OnInit} from '@angular/core';
import * as L from 'leaflet';
import {MarkerService} from '../services/marker.service';

const iconRetinaUrl = 'https://icon2.cleanpng.com/20180203/upq/kisspng-drawing-pin-bulletin-board-paper-clip-art-pushpin-png-photos-5a7581a9b11028.6232203815176503457253.jpg';
const iconUrl = 'https://icon2.cleanpng.com/20180203/upq/kisspng-drawing-pin-bulletin-board-paper-clip-art-pushpin-png-photos-5a7581a9b11028.6232203815176503457253.jpg';
const shadowUrl = 'assets/marker-shadow.png';
const iconDefault = L.icon({
  iconRetinaUrl,
  iconUrl,
  shadowUrl,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [41, 41]
});
L.Marker.prototype.options.icon = iconDefault;
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements AfterViewInit, OnInit {
  private map;
  mapInit: any;


  constructor(private markerService: MarkerService) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.initMap();
    this.markerService.makeCapitalCircleMarkers(this.map);
  }

  private initMap(): void {
    this.map = L.map('map', {
      center: [ 42.6211, 20.8905 ],
      zoom: 9,
      minZoom: 9,
    });

    this.mapInit = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    this.mapInit.addTo(this.map);

  }
}
