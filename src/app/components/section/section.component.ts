import {Component, Input, OnInit} from '@angular/core';
import {Section} from "../../models/section.model";
import {FormatService} from "../../services/static/format.service";

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent implements OnInit {
  @Input() section: Section
  public showDepartureMap: boolean = false;
  public showArrivalMap: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  formatTime(time: string) {
    return FormatService.formatTime(time);
  }

  formatPlatform(platform: string) {
    return FormatService.formatPlatform(platform);
  }

  formatDelay(delay: string) {
    return FormatService.formatDelay(delay);
  }

  showMap(station: 'arrival' | 'departure') {
    if (station === 'arrival') {
      this.showArrivalMap = true;
    } else {
      this.showDepartureMap = true;
    }
  }
}
