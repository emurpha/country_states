import { Component, OnInit } from '@angular/core';

import { Country } from '../country';
import { State } from '../state';

import { CountryService } from '../country.service';

import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  countries: Country[] = [];
  states: State;

  constructor(
    private countryService: CountryService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getCountries();
  }

  getCountries(): void {
    this.countryService.getCountries()
      .subscribe(countries => this.countries = countries)
  }
  getState(): void {
    const countryId = +this.route.snapshot.paramMap.get('countryId');
    this.countryService.getState(countryId)
      .subscribe(state => this.states = state)
  }

}
