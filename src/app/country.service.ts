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

  private countriesUrl = 'https://xc-ajax-demo.herokuapp.com/api/countries/'; //URL to Web api
  private statesUrl = 'https://xc-ajax-demo.herokuapp.com/api/countries/<country_code>/states/';

  getCountries(): Observable<Country[]> {
    return this.http.get<Country[]>(this.countriesUrl)
  }

  addCountry(country: Country): Observable<Country> {
    return this.http.post<Country>(this.countriesUrl, country, httpOptions)
  }

  getStates(state: State): Observable<State[]> {
    return this.http.get<State[]>(this.statesUrl)
  }
  

};
