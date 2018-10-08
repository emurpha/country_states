import { Injectable } from '@angular/core';

import { Country } from './country';
import { COUNTRIES } from './mock-countries';

import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor(
  ){}

  private countriesUrl = 'api/countries'; //URL to Web api

  getCountries(): Observable<Country[]> {
    return of(COUNTRIES);
  }
  

};
