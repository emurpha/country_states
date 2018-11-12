import { Injectable } from '@angular/core';

import { Country } from './country';
import { State } from './state';

import { Observable} from 'rxjs';

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

  private countriesUrl = 'http://localhost:8000/countries/'; //URL to Web api
  private statesUrl = 'http://localhost:8000/countries';

  getCountries(): Observable<Country[]> {
    return this.http.get<Country[]>(this.countriesUrl)
  }

  addCountry(country: Country): Observable<Country> {
    return this.http.post<Country>(this.countriesUrl, country, httpOptions)
  }
  
  getState(countryId: string): Observable<State[]> {
    const url = `${this.statesUrl}/${countryId}/states/`;
    console.log("URL="+url);
    return this.http.get<State[]>(url)
  }

  addState(state: State, coCountryCode): Observable<State> {
    const urlS = `${this.statesUrl}/${coCountryCode}/states/`;
    console.log(urlS);
    return this.http.post<State>(urlS, state, httpOptions)
  }

};
