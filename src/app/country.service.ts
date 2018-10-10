import { Injectable } from '@angular/core';

import { Country } from './country';
import { COUNTRIES } from './mock-countries';

import { Observable, of } from 'rxjs';

import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor(
    private http: HttpClient
  ){}

  private countriesUrl = 'https://xc-ajax-demo.herokuapp.com/api/countries/'; //URL to Web api

  getCountries(): Observable<Country[]> {
    return this.http.get<Country[]>(this.countriesUrl)
  }

  addCountry(country: Country): Observable<Country> {
    return this.http.post<Country>(this.countriesUrl, country, httpOptions)
  }
  

};
