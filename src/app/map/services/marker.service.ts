import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import * as L from 'leaflet';
import {PopUpService} from './pop-up.service';

@Injectable({
  providedIn: 'root'
})
export class MarkerService {

  capitals: any = {
    'type': 'FeatureCollection',
    'features': [
      {
      'type': 'Feature',
      'geometry': {'type': 'Point', 'coordinates': [42.4819999, 20.7325773]},
      'properties': {'state': 'Kosovo', 'name': 'Malisheve', 'population': 32}
      },
      {
        'type': 'Feature',
        'geometry': {'type': 'Point', 'coordinates': [42.9098755, 21.1781376]},
        'properties': {'state': 'Kosove', 'name': 'Besiane', 'population': 3}
      },
      {
        'type': 'Feature',
        'geometry': {'type': 'Point', 'coordinates': [42.688530,21.066945]},
        'properties': {'state': 'Kosove', 'name': 'Prishtine', 'population': 10}
      },
      {
        'type': 'Feature',
        'geometry': {'type': 'Point', 'coordinates': [42.6604761,21.1681383]},
        'properties': {'state': 'Kosove', 'name': 'Kastriot', 'population': 1}
      },
      {
        'type': 'Feature',
        'geometry': {'type': 'Point', 'coordinates': [42.4618662,21.4271909]},
        'properties': {'state': 'Kosove', 'name': 'Gjilan', 'population': 15}
      },
      {
        'type': 'Feature',
        'geometry': {'type': 'Point', 'coordinates': [42.3211331,21.3469835]},
        'properties': {'state': 'Kosove', 'name': 'Viti', 'population': 7}
      },
      {
        'type': 'Feature',
        'geometry': {'type': 'Point', 'coordinates': [42.2234773,20.6995783]},
        'properties': {'state': 'Kosove', 'name': 'Prizren', 'population': 1}
      },
      {
        'type': 'Feature',
        'geometry': {'type': 'Point', 'coordinates': [42.3921632,20.3916963]},
        'properties': {'state': 'Kosove', 'name': 'Gjakove', 'population': 5}
      },
      {
        'type': 'Feature',
        'geometry': {'type': 'Point', 'coordinates': [42.8235676,20.9564483]},
        'properties': {'state': 'Kosove', 'name': 'Vushtrri', 'population': 6}
      },
      {
        'type': 'Feature',
        'geometry': {'type': 'Point', 'coordinates': [42.660684,20.2631995]},
        'properties': {'state': 'Kosove', 'name': 'Peje', 'population': 1}
      },
      {
        'type': 'Feature',
        'geometry': {'type': 'Point', 'coordinates': [42.6232631,20.5743625]},
        'properties': {'state': 'Kosove', 'name': 'Kline', 'population': 1}
      },
      {
        'type': 'Feature',
        'geometry': {'type': 'Point', 'coordinates': [42.3602439,20.8225225]},
        'properties': {'state': 'Kosove', 'name': 'Therande', 'population': 1}
      },
      {
        'type': 'Feature',
        'geometry': {'type': 'Point', 'coordinates': [42.4373519,21.0305387]},
        'properties': {'state': 'Kosove', 'name': 'Shtime', 'population': 1}
      },
    ]
  };

  static ScaledRadius(val: number, maxVal: number): number {
    return 20 * (val / maxVal);
  }

  constructor(private http: HttpClient, private popupService: PopUpService) { }

  makeCapitalCircleMarkers(map: L.map): void {

    // Find the maximum population to scale the radii by.
    const maxVal = Math.max(...this.capitals.features.map(x => x.properties.population), 0);

    for (const c of this.capitals.features) {
         const  circle = L.circleMarker([c.geometry.coordinates[0], c.geometry.coordinates[1]],
           {
             radius: MarkerService.ScaledRadius(c.properties.population, maxVal),
             fillColor: "#ff0000",
             color: "#ff0022",
           }
           );

         circle.bindPopup(this.popupService.makeCapitalPopup(c.properties));

         circle.addTo(map);

      }
  }

}
