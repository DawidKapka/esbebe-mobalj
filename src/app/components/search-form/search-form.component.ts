import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent implements OnInit {

  @Input('type') public formType: 'connections' | 'departures' = null;
  tab: 'connections' | 'departures' = 'connections';

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.tab = this.formType;
  }

  navigateTo(page: 'connections' | 'departures') {
    this.router.navigate([page]);
    this.tab = page;
  }
}
