import { Component, OnInit } from '@angular/core';

import { Country } from '../country';

import { CountryService } from '../country.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  countries: Country[] = [];

  constructor(private countryService: CountryService) { }

  ngOnInit() {
    this.getCountries();
  }

  getCountries(): void {
    this.countryService.getCountries()
      .subscribe(countries => this.countries = countries)
  }

}
