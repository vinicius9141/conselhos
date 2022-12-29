import { Component, OnInit } from '@angular/core';
import { ChangeStatsService } from 'src/app/services/change-stats.service';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public statsChanged: boolean = false;

  constructor(private changeStats: ChangeStatsService) {}

  ngOnInit(): void {}

  public getStats(): any {
    this.statsChanged = this.changeStats.changeStat();
  }
}
