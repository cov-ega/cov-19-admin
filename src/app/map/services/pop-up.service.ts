import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PopUpService {

  constructor() { }

  makeCapitalPopup(data: any): string {
    debugger;
    return `
      <div>Qyteti: ${ data.name }</div>
      <div>Shteti: ${ data.state }</div>
      <div>Infected: ${ data.population }</div>`;
  }
}
