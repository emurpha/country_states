import { Component, OnInit } from '@angular/core';
import { Country } from '../country';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {
  country: Country = {
    id: 1,
    code: 'Af',
    name: 'Afghanistan'
  }

  constructor() { }

  ngOnInit() {
  }

}
