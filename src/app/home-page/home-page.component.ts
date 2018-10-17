import { Component, OnInit } from '@angular/core';

import { Country } from '../country';
import { State } from '../state';

import { CountryService } from '../country.service';

import { ActivatedRoute } from '@angular/router';

import { NgSelectOption } from '@angular/forms';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  countries: Country[] = [];
  states: State[] = [];

  constructor(
    private countryService: CountryService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getCountries();
  }

  getCountries(){
    this.countryService.getCountries()
      .subscribe(countries => this.countries = countries);
    return this.countries
  }

  getState(countryId): void {
    console.log(countryId);
    this.countryService.getState(countryId)
      .subscribe(states => this.states = states)
  }

}
