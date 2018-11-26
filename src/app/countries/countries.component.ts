import { Component, OnInit } from '@angular/core';
import { Country } from '../country';
import { State } from '../state';

import { CountryService } from '../country.service';
import { mapChildrenIntoArray } from '@angular/router/src/url_tree';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {
  countries: Country [];
  states: State[];

  constructor(private countryService: CountryService) { }

  getCountries(): void {
    this.countryService.getCountries()
        .subscribe(countries => this.countries = countries);
  }
  add(name:string, code: string): void {
    if (!name) { return; }
    this.countryService.addCountry({ code, name } as Country)
      .subscribe(country => {
        this.countries.push(country);
      })
  }

  addS(name: string, code: string, country_code: string): void {
    if (!name) { return; }
    this.countryService.addState({ code, name, country_code } as State, country_code)
      .subscribe(state => console.log(state))
  }

  ngOnInit() {
    this.getCountries();
  }

}
